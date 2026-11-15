// Keep each passage independent; a finished attempt is restored only with a complete valid choice set.
function initReadingPractice(root) {
  const form = root.querySelector('form');
  const fields = [...form.querySelectorAll('fieldset')];
  const review = root.querySelector('[data-review]');
  const explanations = [...review.querySelectorAll('[data-key]')];
  const submit = form.querySelector('[data-submit]');
  const retry = form.querySelector('[data-retry]');
  const storageKey = 'math-notes:reading-practice:v1:' + root.dataset.readingExercise;

  function choices() {
    return fields.map(field => field.querySelector('input:checked')?.value || '');
  }
  function save(submitted) {
    try { localStorage.setItem(storageKey, JSON.stringify({choices: choices(), submitted})); }
    catch { /* Reading and marking still work when browser storage is unavailable. */ }
  }
  function setReviewed(submitted) {
    const values = choices();
    root.classList.toggle('rt-reviewed', submitted);
    review.hidden = !submitted;
    submit.hidden = submitted;
    retry.hidden = !submitted;
    root.querySelectorAll('[data-marker]').forEach(marker => { marker.hidden = !submitted; });
    fields.forEach(field => { field.disabled = submitted; });
    if (submitted) {
      let correct = 0;
      explanations.forEach((explanation, index) => {
        const matched = values[index] === explanation.dataset.key;
        if (matched) correct++;
        explanation.querySelector('[data-your-answer]').textContent = '你的选择 ' + values[index] + (matched ? '（正确）' : '（错误）');
      });
      review.querySelector('[data-score]').textContent = '本篇答对 ' + correct + ' / ' + fields.length + ' 题';
    }
  }
  let saved;
  try { saved = JSON.parse(localStorage.getItem(storageKey)); } catch { /* No usable saved attempt. */ }
  form.reset();
  if (Array.isArray(saved?.choices) && saved.choices.length === fields.length) {
    fields.forEach((field, index) => {
      const input = [...field.querySelectorAll('input')].find(input => input.value === saved.choices[index]);
      if (input) input.checked = true;
    });
  }
  setReviewed(saved?.submitted === true && choices().every(Boolean));
  submit.disabled = false;
  form.addEventListener('change', () => save(false));
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity() || !choices().every(Boolean)) return;
    setReviewed(true);
    save(true);
    review.querySelector('h2').focus();
  });
  retry.addEventListener('click', () => {
    form.reset();
    setReviewed(false);
    save(false);
    fields[0].querySelector('input').focus();
  });
}
document.querySelectorAll('[data-reading-exercise]').forEach(initReadingPractice);
