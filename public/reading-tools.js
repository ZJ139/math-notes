// The outline and progress belong to the existing article, never to its content.
const readingPage = document.querySelector('[data-reading-progress]')?.closest('.article-shell')?.querySelector('.reading-page');
if (readingPage) {
  const shell = readingPage.closest('.article-shell');
  const toc = shell.querySelector('[data-article-toc]');
  const tocNav = toc.querySelector('[data-toc-links]');
  const progress = shell.querySelector('[data-reading-progress]');
  const progressFill = progress.firstElementChild;
  const backToTop = shell.querySelector('[data-back-to-top]');
  const headings = [...readingPage.querySelectorAll('.prose :is(h1,h2,h3)[id]')];
  const links = headings.map(heading => {
    const link = document.createElement('a');
    link.href = '#' + encodeURIComponent(heading.id);
    link.textContent = heading.textContent.trim();
    link.dataset.level = heading.tagName.slice(1);
    tocNav.append(link);
    return link;
  });
  if (headings.length > 1) {
    toc.hidden = false;
    shell.classList.add('has-toc');
    const compact = matchMedia('(max-width: 1099px)');
    toc.querySelector('details').open = !compact.matches;
    compact.addEventListener('change', event => { toc.querySelector('details').open = !event.matches; });
  }
  progress.hidden = false;
  let activeIndex = -1;
  let pending = false;
  function paintReadingState() {
    pending = false;
    const pageTop = readingPage.getBoundingClientRect().top + scrollY;
    const distance = Math.max(1, readingPage.offsetHeight - innerHeight);
    const value = Math.round(Math.max(0, Math.min(1, (scrollY - pageTop) / distance)) * 100);
    progressFill.style.transform = `scaleX(${value / 100})`;
    progress.setAttribute('aria-valuenow', String(value));
    backToTop.hidden = scrollY < 480;
    let next = headings.findIndex(heading => heading.getClientRects().length > 0);
    for (let index = 0; index < headings.length; index++) {
      if (!headings[index].getClientRects().length) continue;
      if (headings[index].getBoundingClientRect().top <= 100) next = index;
      else break;
    }
    if (next >= 0 && next !== activeIndex && links.length) {
      links[activeIndex]?.removeAttribute('aria-current');
      links[next].setAttribute('aria-current', 'location');
      activeIndex = next;
      // Scroll only this navigation, only when the current chapter has left it.
      // The link outline is painted on the link itself; no overlay tracks scroll.
      if (tocNav.clientHeight && !tocNav.contains(document.activeElement)) {
        const link = links[next].getBoundingClientRect();
        const nav = tocNav.getBoundingClientRect();
        if (link.top < nav.top || link.bottom > nav.bottom) {
          tocNav.scrollTop += link.top < nav.top ? link.top - nav.top : link.bottom - nav.bottom;
        }
      }
    }
  }
  function scheduleReadingState() {
    if (!pending) { pending = true; requestAnimationFrame(paintReadingState); }
  }
  addEventListener('scroll', scheduleReadingState, {passive: true});
  addEventListener('resize', scheduleReadingState, {passive: true});
  addEventListener('fragmentnavigation', scheduleReadingState);
  if (typeof ResizeObserver !== 'undefined') new ResizeObserver(scheduleReadingState).observe(readingPage);
  document.fonts?.ready.then(scheduleReadingState);
  backToTop.addEventListener('click', () => {
    scrollTo({top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
    const title = readingPage.querySelector('h1');
    title.tabIndex = -1;
    title.focus({preventScroll: true});
    title.addEventListener('blur', () => title.removeAttribute('tabindex'), {once: true});
  });
  paintReadingState();
}
