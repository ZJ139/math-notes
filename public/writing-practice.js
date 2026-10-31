export const answerKeys = ['a-original', 'a-revision', 'b-original', 'b-revision'];
export const imageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
export const maxImageBytes = 5 * 1024 * 1024;
export function wordCount(text) {
  return (text.match(/[A-Za-z]+(?:[’'‐-][A-Za-z]+)*|\d+(?:\.\d+)?%?/g) || []).length;
}
export function validateImage(file) {
  if (!imageTypes.includes(file.type)) throw new Error('请选择 JPG、PNG、WebP 或 GIF 图片。');
  if (!file.size || file.size > maxImageBytes) throw new Error('每张图片须大于 0 且不超过 5 MB。');
}
export function validateBackup(value, year) {
  if (value?.format !== 'math-notes-writing-practice' || value.version !== 1 || value.year !== year) throw new Error(`请选择 ${year} 年的作文练习备份。`);
  if (!Array.isArray(value.answers) || value.answers.length !== 4 || new Set(value.answers.map(a => a.key)).size !== 4) throw new Error('备份须包含四个独立作答区。');
  for (const answer of value.answers) {
    if (!answerKeys.includes(answer.key) || typeof answer.text !== 'string' || answer.text.length > 30000 || !Array.isArray(answer.images) || answer.images.length > 4) throw new Error('备份的作答格式或大小无效。');
    for (const file of answer.images) {
      if (typeof file.name !== 'string' || file.name.length > 500 || typeof file.data !== 'string' || !/^data:image\/(jpeg|png|webp|gif);base64,[A-Za-z0-9+/]+={0,2}$/.test(file.data) || file.data.length > Math.ceil(maxImageBytes / 3) * 4 + 64) throw new Error('备份中包含无效或过大的图片。');
    }
  }
  return value;
}
export function openPracticeStore() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('math-notes-writing-practice', 1);
    request.onupgradeneeded = () => request.result.createObjectStore('answers', {keyPath: 'id'});
    request.onerror = () => reject(request.error);
    request.onblocked = () => reject(new Error('请关闭其他练习页面后重试。'));
    request.onsuccess = () => { request.result.onversionchange = () => request.result.close(); resolve(request.result); };
  });
}
export function readAnswers(db, year) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction('answers', 'readonly');
    const result = {};
    for (const key of answerKeys) {
      const request = tx.objectStore('answers').get(`${year}/${key}`);
      request.onsuccess = () => { result[key] = request.result; };
    }
    tx.oncomplete = () => resolve(result);
    tx.onerror = tx.onabort = () => reject(tx.error || new Error('无法读取练习。'));
  });
}
// A single transaction prevents a partial import and checks for edits from other tabs.
export function writeAnswers(db, values) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction('answers', 'readwrite');
    const store = tx.objectStore('answers');
    const saved = [];
    let conflict = false;
    for (const {record, expectedRevision} of values) {
      const request = store.get(record.id);
      request.onsuccess = () => {
        if ((request.result?.revision || null) !== expectedRevision) { conflict = true; tx.abort(); return; }
        const next = {...record, revision: crypto.randomUUID(), updatedAt: new Date().toISOString()};
        store.put(next);
        saved.push(next);
      };
    }
    tx.oncomplete = () => resolve(saved);
    tx.onerror = tx.onabort = () => reject(conflict ? new Error('另一个标签页已修改这份练习。请先导出当前备份，再刷新页面，以免覆盖。') : tx.error || new Error('保存未完成。'));
  });
}

async function initPractice(root) {
  const year = Number(root.dataset.year);
  const feedback = root.querySelector('[data-feedback]');
  const states = new Map();
  let db = null;
  let uploads = 0;
  let importing = false;
  const tell = (message, error = false) => { feedback.textContent = message; feedback.classList.toggle('save-error', error); };
  const failed = error => tell(error?.message || '操作未完成，请导出备份并重试。', true);
  for (const panel of root.querySelectorAll('[data-answer]')) {
    const key = panel.dataset.answer;
    states.set(key, {key, panel, text: panel.querySelector('textarea'), status: panel.querySelector('[data-status]'), images: [], revision: null, generation: 0, dirty: false, pending: null, timer: 0, urls: []});
  }
  const updateCount = s => { s.panel.querySelector('[data-word-count]').textContent = `${wordCount(s.text.value)} 词`; };
  function renderImages(s) {
    s.urls.forEach(url => URL.revokeObjectURL(url)); s.urls = [];
    const container = s.panel.querySelector('[data-images]'); container.replaceChildren();
    s.images.forEach((file, index) => {
      const url = URL.createObjectURL(file.blob); s.urls.push(url);
      const figure = document.createElement('figure');
      const link = document.createElement('a'); link.href = url; link.target = '_blank'; link.rel = 'noopener'; link.title = '打开原尺寸图片';
      const img = document.createElement('img'); img.src = url; img.alt = `${s.key.startsWith('a') ? '小作文' : '大作文'}${s.key.endsWith('original') ? '第一作答区' : '第二作答区'}手写图片 ${index + 1}`;
      link.append(img);
      const caption = document.createElement('figcaption'); caption.textContent = file.name;
      const remove = document.createElement('button'); remove.type = 'button'; remove.className = 'text-button'; remove.textContent = '移除'; remove.setAttribute('aria-label', `移除图片 ${file.name}`);
      remove.addEventListener('click', () => { if (importing) return; s.images.splice(index, 1); renderImages(s); changed(s); });
      figure.append(link, caption, remove); container.append(figure);
    });
  }
  function changed(s) {
    s.dirty = true; s.generation++; s.status.textContent = '尚未保存'; s.status.classList.remove('save-error'); updateCount(s);
    clearTimeout(s.timer); s.timer = setTimeout(() => save(s).catch(failed), 500);
  }
  async function save(s) {
    clearTimeout(s.timer);
    if (s.pending) { await s.pending; if (s.dirty) return save(s); return; }
    if (!s.dirty) return;
    if (!db) { s.status.textContent = '未保存，请导出备份'; s.status.classList.add('save-error'); throw new Error('浏览器存储不可用，当前内容尚未保存。请导出备份。'); }
    const generation = s.generation;
    s.status.textContent = '正在保存……';
    s.pending = (async () => {
      try {
        const [result] = await writeAnswers(db, [{record: {id: `${year}/${s.key}`, text: s.text.value, images: s.images.map(file => ({...file}))}, expectedRevision: s.revision}]);
        s.revision = result.revision;
        s.dirty = s.generation !== generation;
        s.status.textContent = s.dirty ? '尚未保存' : `已保存 · ${new Date(result.updatedAt).toLocaleTimeString('zh-CN', {hour:'2-digit', minute:'2-digit', second:'2-digit'})}`;
        s.status.classList.remove('save-error');
      } catch (error) {
        s.status.textContent = '保存失败，请导出备份'; s.status.classList.add('save-error'); throw error;
      } finally { s.pending = null; }
    })();
    await s.pending;
    if (s.dirty) return save(s);
  }
  const saveAll = () => Promise.all([...states.values()].map(save));
  async function checkReadable(file) {
    validateImage(file);
    const url = URL.createObjectURL(file);
    try { const img = new Image(); img.src = url; await img.decode(); } catch { throw new Error('图片无法读取，请选择完整的图片文件。'); }
    finally { URL.revokeObjectURL(url); }
  }
  try {
    db = await openPracticeStore();
    const stored = await readAnswers(db, year);
    for (const [key, s] of states) {
      const value = stored[key];
      s.text.value = value?.text || ''; s.images = value?.images || []; s.revision = value?.revision || null;
      s.status.textContent = value ? '已保存' : '';
      updateCount(s); renderImages(s);
    }
  } catch {
    db = null;
    tell('浏览器存储不可用。仍可编辑和导出备份，但本次内容不会自动保存；请勿直接关闭页面。', true);
    states.forEach(s => { s.status.textContent = '存储不可用，请导出备份'; });
  }
  root.querySelectorAll('button, input, textarea').forEach(el => { el.disabled = false; });
  for (const s of states.values()) {
    s.text.addEventListener('input', () => changed(s));
    s.panel.querySelector('[data-save]').addEventListener('click', () => save(s).catch(failed));
    const input = s.panel.querySelector('input[type=file]');
    input.addEventListener('change', async () => {
      const files = [...input.files]; input.value = ''; if (!files.length) return;
      uploads++; input.disabled = true;
      try {
        if (s.images.length + files.length > 4) throw new Error('每个作答区最多保存 4 张图片，请先移除不需要的图片。');
        await Promise.all(files.map(checkReadable));
        // Recheck after decoding so overlapping selections cannot exceed the limit.
        if (s.images.length + files.length > 4) throw new Error('这个作答区的图片数量已达上限。');
        s.images.push(...files.map(file => ({name: file.name.slice(0,500), blob: file})));
        renderImages(s); changed(s); await save(s); tell('图片已保存。');
      } catch (error) { failed(error); }
      finally { uploads--; input.disabled = false; }
    });
  }
  root.querySelector('[data-save-all]').addEventListener('click', async () => {
    try { if (uploads) throw new Error('图片正在读取，请稍后保存。'); await saveAll(); if (!db) throw new Error('浏览器存储不可用，请导出备份。'); tell('已保存全部作答。'); } catch (error) { failed(error); }
  });
  root.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', async () => {
    if (uploads) { tell('图片正在读取，请稍后复制。'); return; }
    const from = states.get(`${button.dataset.copy}-original`), to = states.get(`${button.dataset.copy}-revision`);
    if ((to.text.value || to.images.length) && !confirm('第二作答区已有内容。要用第一作答区覆盖其中的文字和图片吗？')) return;
    to.text.value = from.text.value; to.images = from.images.map(file => ({...file})); renderImages(to); changed(to);
    try { await save(to); tell('已复制到第二作答区。'); to.text.focus(); } catch (error) { failed(error); }
  }));
  const dataUrl = blob => new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = () => reject(reader.error); reader.readAsDataURL(blob); });
  root.querySelector('[data-export]').addEventListener('click', async () => {
    try {
      if (uploads) throw new Error('图片正在读取，请稍后导出。');
      const answers = await Promise.all([...states.values()].map(async s => ({key: s.key, text: s.text.value, images: await Promise.all(s.images.map(async file => ({name: file.name, data: await dataUrl(file.blob)})))})));
      const backup = {format: 'math-notes-writing-practice', version: 1, year, exportedAt: new Date().toISOString(), answers};
      const url = URL.createObjectURL(new Blob([JSON.stringify(backup)], {type: 'application/json'}));
      const a = document.createElement('a'); a.href = url; a.download = `考研作文练习-${year}-${new Date().toISOString().slice(0,10)}.json`; a.click(); setTimeout(() => URL.revokeObjectURL(url), 30000);
      tell('备份已导出。');
    } catch (error) { failed(error); }
  });
  const importInput = root.querySelector('#practice-import');
  importInput.addEventListener('change', async () => {
    const file = importInput.files[0]; importInput.value = ''; if (!file) return;
    try {
      if (uploads) throw new Error('图片正在读取，请稍后导入。');
      if (!db) throw new Error('浏览器存储不可用，无法导入。请使用允许存储的浏览器。');
      if (file.size > 120 * 1024 * 1024) throw new Error('备份文件超过 120 MB。');
      importing = true; root.querySelectorAll('button,input,textarea').forEach(el => { el.disabled = true; });
      const backup = validateBackup(JSON.parse(await file.text()), year);
      const records = await Promise.all(backup.answers.map(async answer => {
        const images = await Promise.all(answer.images.map(async image => {
          const [head, data] = image.data.split(',');
          const bytes = Uint8Array.from(atob(data), c => c.charCodeAt(0));
          const blob = new Blob([bytes], {type: head.slice(5, -7)});
          await checkReadable(blob);
          return {name: image.name, blob};
        }));
        return {key: answer.key, text: answer.text, images};
      }));
      if ([...states.values()].some(s => s.text.value || s.images.length) && !confirm(`导入将覆盖 ${year} 年四个作答区。建议先导出当前备份。是否继续？`)) return;
      await saveAll();
      const saved = await writeAnswers(db, records.map(record => ({record: {id: `${year}/${record.key}`, text: record.text, images: record.images}, expectedRevision: states.get(record.key).revision})));
      records.forEach(record => {
        const s = states.get(record.key); s.text.value = record.text; s.images = record.images; s.revision = saved.find(item => item.id === `${year}/${record.key}`).revision; s.dirty = false; s.generation++;
        updateCount(s); renderImages(s); s.status.textContent = '已导入并保存'; s.status.classList.remove('save-error');
      });
      tell('备份已恢复。');
    } catch (error) { failed(error); }
    finally { importing = false; root.querySelectorAll('button,input,textarea').forEach(el => { el.disabled = false; }); }
  });
  window.addEventListener('beforeunload', event => {
    if (uploads || importing || [...states.values()].some(s => s.dirty || s.pending)) { event.preventDefault(); event.returnValue = ''; }
  });
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') saveAll().catch(() => {}); });
}
if (typeof document !== 'undefined') {
  const root = document.querySelector('[data-writing-practice]');
  if (root) initPractice(root).catch(error => { root.querySelector('[data-feedback]').textContent = `练习未能加载：${error.message}。请刷新页面重试。`; });
}
