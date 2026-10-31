// Shared algebra-index.js and fragment-navigation.js are prepended by the static build.
const redirectLink = document.querySelector('[data-redirect]');
if (redirectLink?.href) {
  const target = new URL(redirectLink.href);
  target.search = location.search;
  target.hash = location.hash;
  location.replace(target.href);
}

const collection = document.querySelector('[data-collection]');
if (collection) {
  const form = collection.querySelector('form');
  const query = document.getElementById('query');
  const categoryInput = document.getElementById('category');
  const entries = [...collection.querySelectorAll('[data-entry]')];
  const filters = [...collection.querySelectorAll('[data-filter]')];
  const count = document.getElementById('result-count');
  const empty = document.getElementById('no-results');
  const examDirectory = collection.querySelector('[data-exam-directory]');
  const examCards = [...collection.querySelectorAll('[data-exam-id]')];
  const entryList = collection.querySelector('[data-problem-results] .entry-list') || collection.querySelector('.entry-list');
  const sentenceDirectory = collection.querySelector('[data-sentence-directory]');
  const sentencePatterns = collection.querySelector('[data-sentence-patterns]');
  const readingAnswersDirectory = collection.querySelector('[data-reading-answers-directory]');
  const readingDirectory = collection.querySelector('[data-reading-directory]');
  const writingDirectory = collection.querySelector('[data-writing-directory]');
  const writingResults = collection.querySelector('[data-writing-results]');
  const algebraIndexes = new Map(entries.filter(e=>'algebraContext' in e.dataset).map(entry=>[
    entry, parseAlgebraIndex(entry.dataset.search).chapters.flatMap(c=>c.groups.flatMap(g=>g.exercises)),
  ]));
  function update() {
    const params = new URLSearchParams(location.search);
    query.value = (params.get('q') || '').slice(0, 200);
    const category = collection.dataset?.defaultCategory || params.get('category') || '';
    categoryInput.value = category;
    const words = query.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let visible = 0;
    const visibleIds = new Set();
    for (const entry of entries) {
      const values = [entry.dataset.category, ...JSON.parse(entry.dataset.readingTopics || '[]')];
      const matches = !category || (category === 'uncategorized' ? !entry.dataset.category : values.some(value => value === category || value.startsWith(category + '/')));
      const index = algebraIndexes.get(entry);
      const exercises = index?.filter(e=>matchesAlgebraExercise(e, query.value, entry.dataset.algebraContext));
      entry.hidden = !(matches && (index && hasAlgebraLocator(query.value) ? exercises.length > 0 : words.every(word => entry.dataset.search.includes(word))));
      if (index) {
        const nav = entry.querySelector('[data-algebra-matches]');
        nav.replaceChildren();
        nav.hidden = entry.hidden || !words.length || !exercises.length;
        if (!nav.hidden) {
          for (const exercise of exercises.slice(0, 8)) {
            const link = document.createElement('a');
            link.href = new URL(exercise.url.slice(1), document.querySelector('.brand').href);
            link.textContent = `${exercise.key} · PDF ${exercise.page}${exercise.note === '—' ? '' : ' · ' + exercise.note}`;
            nav.append(link);
          }
          const more = document.createElement('a');
          const url = new URL(entry.querySelector('h2 a').href);
          url.searchParams.set('exercise', query.value);
          more.href = url.href;
          more.textContent = `在目录中查看 ${exercises.length} 道匹配题`;
          nav.append(more);
        }
      }
      if (!entry.hidden) {
        visible++;
        visibleIds.add(entry.dataset.entryId);
      }
    }
    if (examDirectory) {
      const showYears = category === 'exams';
      examDirectory.hidden = !showYears;
      for (const card of examCards) card.hidden = !visibleIds.has(card.dataset.examId);
    }
    const showSentences = category === 'sentences' && words.length === 0;
    if (sentenceDirectory) sentenceDirectory.hidden = !showSentences;
    const showReadingAnswers = category === 'reading-answers' && words.length === 0;
    if (readingAnswersDirectory) readingAnswersDirectory.hidden = !showReadingAnswers;
    const showReadings = category === 'translation' && words.length === 0;
    if (readingDirectory) readingDirectory.hidden = !showReadings;
    const showWriting = category === 'writing' && words.length === 0;
    if (writingDirectory) writingDirectory.hidden = !showWriting;
    if (writingResults) writingResults.hidden = showWriting;
    if (entryList) entryList.hidden = (Boolean(readingAnswersDirectory) && showReadingAnswers) || (Boolean(writingDirectory) && showWriting) || (Boolean(readingDirectory) && showReadings) || (Boolean(examDirectory) && category === 'exams') || (Boolean(sentenceDirectory) && showSentences);
    const showPatterns = category === 'sentence-patterns' || category.startsWith('sentence-patterns/');
    if (sentencePatterns) sentencePatterns.hidden = !showPatterns;
    for (const link of filters) {
      if (link.dataset.filter === category || (link.dataset.filter === 'sentence-patterns' && showPatterns)) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
      const url = new URL(link.href);
      if (query.value) url.searchParams.set('q', query.value);
      else url.searchParams.delete('q');
      link.href = url.href;
    }
    const problemDirectory = collection.querySelector('[data-problem-directory]');
    if (problemDirectory) {
      problemDirectory.hidden = words.length > 0;
      collection.querySelector('[data-problem-results]').hidden = words.length === 0;
    }
    count.hidden = Boolean((readingAnswersDirectory && showReadingAnswers) || (sentenceDirectory && showSentences) || (readingDirectory && showReadings) || (writingDirectory && showWriting));
    count.textContent = `${visible} 份公开资料${query.value ? ' · 搜索：' + query.value : ''}`;
    empty.hidden = !entries.length || visible !== 0;
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    const params = new URLSearchParams(new FormData(form));
    for (const [key,value] of [...params]) if (!value) params.delete(key);
    history.pushState(null, '', location.pathname + (params.size ? '?' + params : ''));
    update();
  });
  for (const link of filters) link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    history.pushState(null, '', link.href);
    update();
  });
  addEventListener('popstate', update);
  update();
}

// All tables and PDF links work without JavaScript; filters only hide rows.
const algebraDirectory = document.getElementById('algebra-directory');
if (algebraDirectory) {
  const form = algebraDirectory.querySelector('form');
  const chapter = form.elements.namedItem('chapter');
  const exerciseInput = form.elements.namedItem('exercise');
  const overview = algebraDirectory.querySelector('.algebra-overview');
  const chapters = [...algebraDirectory.querySelectorAll('[data-algebra-chapter]')];
  const groups = [...algebraDirectory.querySelectorAll('[data-algebra-group]')].map(element=>({
    element,
    rows: [...element.querySelectorAll('tbody tr')].map(row=>{
      const key = row.cells[0].textContent;
      const match = key.match(/^(习题 \d+\.\d+|复习题\S+|补充题\S+) 第 (\d+) 题$/);
      const link = row.cells[1].querySelector('a');
      return {row, exercise: {key, group: match[1], number: Number(match[2]),
        page: Number(new URL(link.href).hash.slice(6)), url: link.href,
        note: row.cells[2].textContent, section: match[1].match(/\d+\.\d+/)?.[0] || '',
        chapter: Number(element.closest('[data-algebra-chapter]').dataset.algebraChapter),
        title: element.querySelector('h3').textContent, anchor: element.dataset.algebraGroup}};
    }),
  }));
  function updateAlgebra() {
    const params = new URLSearchParams(location.search);
    chapter.value = params.get('chapter') || '';
    if (chapter.selectedIndex < 0) chapter.value = '';
    exerciseInput.value = (params.get('exercise') || '').slice(0, 200);
    let target;
    try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch { /* Ignore malformed fragments. */ }
    if (target && algebraDirectory.contains(target)) {
      chapter.value = target.closest('[data-algebra-chapter]')?.dataset.algebraChapter || '';
      exerciseInput.value = '';
      overview.open = !chapter.value;
    } else if (chapter.value || exerciseInput.value) overview.open = false;
    let count = 0;
    for (const group of groups) {
      let visible = 0;
      for (const {row,exercise} of group.rows) {
        row.hidden = Boolean((chapter.value && String(exercise.chapter) !== chapter.value) || !matchesAlgebraExercise(exercise, exerciseInput.value, algebraDirectory.dataset.algebraContext));
        if (!row.hidden) visible++;
      }
      group.element.hidden = visible === 0;
      count += visible;
    }
    for (const section of chapters) {
      section.hidden = ![...section.querySelectorAll('[data-algebra-group]')].some(g=>!g.hidden);
      const chapterLinks = section.querySelector(':scope > .prose > ul');
      if (chapterLinks) chapterLinks.hidden = Boolean(exerciseInput.value.trim());
    }
    algebraDirectory.querySelector('[data-algebra-count]').textContent = `${count} 道主编号题`;
    algebraDirectory.querySelector('[data-algebra-empty]').hidden = count !== 0;
    if (target && algebraDirectory.contains(target)) target.scrollIntoView({block:'start'});
  }
  function navigateAlgebra() {
    const url = new URL(location.href);
    for (const field of [chapter, exerciseInput]) {
      if (field.value) url.searchParams.set(field.name, field.value);
      else url.searchParams.delete(field.name);
    }
    url.hash = '';
    history.pushState(null, '', url);
    updateAlgebra();
  }
  form.addEventListener('submit', event=>{event.preventDefault();navigateAlgebra();});
  chapter.addEventListener('change', navigateAlgebra);
  form.addEventListener('reset', event=>{
    event.preventDefault(); chapter.value = exerciseInput.value = ''; overview.open = true; navigateAlgebra();
  });
  addEventListener('popstate', updateAlgebra);
  addEventListener('hashchange', updateAlgebra);
  addEventListener('fragmentnavigation', updateAlgebra);
  form.hidden = false;
  updateAlgebra();
}

// Progressive enhancement: all CMC titles and PDF links are already in the HTML.
const cmcDirectory = document.getElementById('cmc-directory');
if (cmcDirectory) {
  const form = cmcDirectory.querySelector('form');
  const edition = form.elements.namedItem('edition');
  const stage = form.elements.namedItem('stage');
  const groups = [...cmcDirectory.querySelectorAll('[data-cmc-edition]')];
  const overview = cmcDirectory.querySelector('.cmc-overview');
  const count = cmcDirectory.querySelector('[data-cmc-count]');
  function updateCmc() {
    const params = new URLSearchParams(location.search);
    edition.value = params.get('edition') || '';
    stage.value = params.get('stage') || '';
    if (edition.selectedIndex < 0) edition.value = '';
    if (stage.selectedIndex < 0) stage.value = '';
    let target;
    try { target = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch { /* Invalid fragments are ignored. */ }
    if (target && cmcDirectory.contains(target)) {
      const group = target.closest('[data-cmc-edition]');
      edition.value = group?.dataset.cmcEdition || '';
      stage.value = target.closest('[data-cmc-stage]')?.dataset.cmcStage || '';
      overview.open = !group;
    } else if (edition.value || stage.value) overview.open = false;
    let visible = 0;
    for (const group of groups) {
      group.hidden = Boolean(edition.value && group.dataset.cmcEdition !== edition.value);
      for (const section of group.querySelectorAll('[data-cmc-stage]')) {
        section.hidden = Boolean(stage.value && section.dataset.cmcStage !== stage.value);
        if (!group.hidden && !section.hidden) visible += Number(section.dataset.cmcPapers);
      }
    }
    count.textContent = `${visible} 套试卷${edition.value ? ` · 第 ${edition.value} 届` : ''}${stage.value ? ` · ${stage.value}` : ''}`;
    cmcDirectory.querySelector('[data-cmc-empty]').hidden = visible !== 0;
    // Reveal the target before the browser attempts its fragment scroll.
    if (target && cmcDirectory.contains(target)) target.scrollIntoView({block: 'start'});
  }
  function navigateCmc() {
    const url = new URL(location.href);
    for (const field of [edition, stage]) {
      if (field.value) url.searchParams.set(field.name, field.value);
      else url.searchParams.delete(field.name);
    }
    url.hash = '';
    history.pushState(null, '', url);
    updateCmc();
  }
  form.addEventListener('change', navigateCmc);
  form.addEventListener('submit', event => { event.preventDefault(); navigateCmc(); });
  form.addEventListener('reset', event => {
    event.preventDefault();
    edition.value = stage.value = '';
    overview.open = true;
    navigateCmc();
  });
  addEventListener('popstate', updateCmc);
  addEventListener('hashchange', updateCmc);
  addEventListener('fragmentnavigation', updateCmc);
  form.hidden = false;
  updateCmc();
}

// Web-font swaps can move a chapter after the browser's initial fragment jump.
// Realign once when fonts settle, unless the reader has already interacted.
const article = document.querySelector('.article-shell');
const initialFragment = location.hash;
if (article && initialFragment && document.fonts) {
  let interrupted = false;
  const cancel = () => { interrupted = true; };
  const events = ['wheel', 'touchstart', 'pointerdown', 'keydown'];
  for (const event of events) addEventListener(event, cancel, {once: true, passive: true});
  const align = () => {
    for (const event of events) removeEventListener(event, cancel);
    if (interrupted || location.hash !== initialFragment) return;
    let id;
    try { id = decodeURIComponent(initialFragment.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    if (target && article.contains(target)) target.scrollIntoView({behavior: 'instant', block: 'start'});
  };
  const settle = () => document.fonts.ready.then(() => requestAnimationFrame(align));
  if (document.readyState === 'complete') settle();
  else addEventListener('load', settle, {once: true});
}

