// Keep in-page reading navigation in the current history entry. Native fragment
// links remain available for sharing, new tabs and readers without JavaScript.
let fragmentTarget;
function findFragment(hash) {
  try { return document.getElementById(decodeURIComponent(hash.slice(1))); }
  catch { return null; }
}
function markFragment(target = findFragment(location.hash)) {
  fragmentTarget?.removeAttribute('data-fragment-target');
  fragmentTarget = target;
  fragmentTarget?.setAttribute('data-fragment-target', '');
}
document.documentElement.classList.add('fragment-navigation');
markFragment();
addEventListener('hashchange', () => markFragment());
addEventListener('popstate', () => markFragment());
document.addEventListener('click', event => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target.closest?.('a[href]');
  if (!link || link.hasAttribute('download') || (link.target && link.target.toLowerCase() !== '_self')) return;
  const url = new URL(link.href, location.href);
  if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search || !url.hash) return;
  const target = findFragment(url.hash);
  if (!target) return;
  event.preventDefault();
  // Preserve any state owned by filters. If a browser rate-limits replaceState,
  // still scroll locally instead of falling back to a new history entry.
  try { history.replaceState(history.state, '', url.href); } catch { /* Keep the existing URL. */ }
  // replaceState emits no hashchange; let filtered directories reveal targets.
  dispatchEvent(new Event('fragmentnavigation'));
  for (let parent = target.parentElement; parent; parent = parent.parentElement) {
    if (parent.tagName === 'DETAILS') parent.open = true;
  }
  markFragment(target);
  if (target.tabIndex < 0 && !target.hasAttribute('tabindex')) {
    target.setAttribute('tabindex', '-1');
    target.addEventListener('blur', () => target.removeAttribute('tabindex'), {once: true});
  }
  target.focus({preventScroll: true});
  target.scrollIntoView({block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
});
