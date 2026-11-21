// Keep the one selection frame inside its link. The browser scrolls it with
// the content, including nested scrolling and mobile momentum scrolling.
(() => {
  const ring = document.createElement('span');
  ring.className = 'link-selection-ring';
  ring.setAttribute('aria-hidden', 'true');
  ring.hidden = true;
  document.documentElement.classList.add('link-selection-ready');

  let selected = null;
  let keyboard = false;
  let frame = 0;
  const observer = new ResizeObserver(() => schedule());
  const linkFrom = target => target?.closest?.('a[href], [role="link"]');

  function contentBounds(link) {
    const rects = [];
    const range = document.createRange();
    function visit(node) {
      if (node === ring) return;
      if (node.nodeType === 3) {
        const text = node.textContent;
        const start = text.search(/\S/);
        if (start < 0) return;
        range.setStart(node, start);
        range.setEnd(node, text.trimEnd().length);
        rects.push(...range.getClientRects());
      } else if (node.nodeType === 1) {
        const style = getComputedStyle(node);
        if (style.display === 'none' || style.visibility === 'hidden') return;
        if (node.matches('img, svg, video, canvas')) rects.push(node.getBoundingClientRect());
        else node.childNodes.forEach(visit);
      }
    }
    link.childNodes.forEach(visit);
    const visible = rects.filter(rect => rect.width > 0 && rect.height > 0);
    if (!visible.length) return link.getBoundingClientRect();
    return {
      left: Math.min(...visible.map(rect => rect.left)),
      top: Math.min(...visible.map(rect => rect.top)),
      right: Math.max(...visible.map(rect => rect.right)),
      bottom: Math.max(...visible.map(rect => rect.bottom)),
    };
  }

  function position() {
    frame = 0;
    if (!selected) return;
    const rect = selected.getBoundingClientRect();
    if (!selected.isConnected || !rect.width || !rect.height) {
      select(null);
      return;
    }
    const bounds = contentBounds(selected);
    // Measure the actual containing-block origin: inline, flex, grid and
    // bordered links have different padding boxes. No viewport overlay.
    Object.assign(ring.style, {left: '0px', top: '0px', width: '0px', height: '0px'});
    const origin = ring.getBoundingClientRect();
    // Two pixels of space around visible content, plus the two-pixel border.
    Object.assign(ring.style, {
      left: `${bounds.left - origin.left - 4}px`, top: `${bounds.top - origin.top - 4}px`,
      width: `${bounds.right - bounds.left + 8}px`, height: `${bounds.bottom - bounds.top + 8}px`,
    });
  }

  function schedule() {
    if (selected && !frame) frame = requestAnimationFrame(position);
  }

  function select(link) {
    if (selected === link) { schedule(); return; }
    selected?.removeAttribute('data-link-selected');
    selected?.removeAttribute('data-link-positioned');
    observer.disconnect();
    ring.remove();
    selected = link;
    ring.hidden = !link;
    if (!link) return;
    link.setAttribute('data-link-selected', '');
    if (getComputedStyle(link).position === 'static') link.setAttribute('data-link-positioned', '');
    link.append(ring);
    observer.observe(link);
    position();
    // Only opacity animates. Selection never changes the link's box or spacing.
    ring.style.animation = 'none';
    void ring.offsetWidth;
    ring.style.animation = '';
  }

  document.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    keyboard = false;
    // A touch/pen contact may become a scroll. Wait for its actual click so
    // panning over blank space or another link preserves the current frame.
    if (event.pointerType === 'touch' || event.pointerType === 'pen') return;
    select(linkFrom(event.target));
  }, true);
  document.addEventListener('click', event => {
    keyboard = false;
    const link = linkFrom(event.target);
    select(link);
    if (!link?.href || event.button !== 0 || event.metaKey || event.ctrlKey ||
        event.shiftKey || event.altKey || link.hasAttribute('download') ||
        (link.target && link.target.toLowerCase() !== '_self')) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || url.pathname === location.pathname) return;
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
  // Ordinary scrolling needs no JavaScript positioning at all.
  addEventListener('resize', schedule, {passive: true});
  window.visualViewport?.addEventListener('resize', schedule);
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
