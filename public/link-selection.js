// A single viewport overlay keeps link feedback outside document layout and
// outside clipping containers. Navigation and native link actions stay intact.
(() => {
  const ring = document.createElement('div');
  ring.className = 'link-selection-ring';
  ring.setAttribute('aria-hidden', 'true');
  ring.hidden = true;
  document.body.append(ring);
  document.documentElement.classList.add('link-selection-ready');

  let selected = null;
  let keyboard = false;
  let frame = 0;
  const observer = new ResizeObserver(() => schedule());
  const linkFrom = target => target?.closest?.('a[href], [role="link"]');

  function position() {
    frame = 0;
    if (!selected) return;
    const rect = selected.getBoundingClientRect();
    if (!selected.isConnected || !rect.width || !rect.height) {
      select(null);
      return;
    }
    // Four pixels of breathing room, plus the two-pixel border.
    Object.assign(ring.style, {
      left: `${rect.left - 6}px`, top: `${rect.top - 6}px`,
      width: `${rect.width + 12}px`, height: `${rect.height + 12}px`,
    });
  }

  function schedule() {
    if (selected && !frame) frame = requestAnimationFrame(position);
  }

  function select(link) {
    if (selected === link) { schedule(); return; }
    selected?.removeAttribute('data-link-selected');
    observer.disconnect();
    selected = link;
    ring.hidden = !link;
    if (!link) return;
    link.setAttribute('data-link-selected', '');
    observer.observe(link);
    position();
    // Restart opacity only. Geometry never transitions, moves or scales in.
    ring.style.animation = 'none';
    void ring.offsetWidth;
    ring.style.animation = '';
  }

  document.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    keyboard = false;
    select(linkFrom(event.target));
  }, true);
  document.addEventListener('pointercancel', () => select(null), true);
  // Covers keyboard activation, assistive technology and synthesized taps.
  document.addEventListener('click', event => {
    keyboard = false;
    const link = linkFrom(event.target);
    select(link);
    if (!link?.href || event.button !== 0 || event.metaKey || event.ctrlKey ||
        event.shiftKey || event.altKey || link.hasAttribute('download') ||
        (link.target && link.target.toLowerCase() !== '_self')) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || url.pathname === location.pathname) return;
    // Keep a clicked navigation link selected after the next document loads.
    // Storage may be disabled; feedback on the current page still works.
    try {
      sessionStorage.setItem('math-notes:pending-link', JSON.stringify({
        destination: url.href, text: link.textContent.trim(),
      }));
    } catch { /* Optional navigation continuity. */ }
  }, true);
  document.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    keyboard = true;
    select(null);
  }, true);
  document.addEventListener('focusin', event => {
    const link = linkFrom(event.target);
    if (link || keyboard) select(link);
  });
  document.addEventListener('focusout', () => {
    if (keyboard) queueMicrotask(() => select(linkFrom(document.activeElement)));
  });
  addEventListener('scroll', schedule, {capture: true, passive: true});
  addEventListener('resize', schedule, {passive: true});
  window.visualViewport?.addEventListener('resize', schedule);
  window.visualViewport?.addEventListener('scroll', schedule);
  document.fonts?.ready.then(schedule);
  addEventListener('pageshow', schedule);
  addEventListener('pagehide', () => select(null));

  try {
    const pending = JSON.parse(sessionStorage.getItem('math-notes:pending-link'));
    sessionStorage.removeItem('math-notes:pending-link');
    if (pending?.destination === location.href) {
      select([...document.querySelectorAll('a[href]')].find(link =>
        link.href === pending.destination && link.textContent.trim() === pending.text) || null);
    }
  } catch { /* No saved navigation selection. */ }
})();
