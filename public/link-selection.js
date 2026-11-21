// Paint directly on the selected anchor. No positioned frame, scroll listener,
// geometry measurement or transform can make the frame drift from its content.
let selectedLink;
function clearLinkSelection() {
  selectedLink?.removeAttribute('data-link-selected');
  selectedLink = undefined;
}
document.addEventListener('click', event => {
  const link = event.target.closest?.('a[href]');
  clearLinkSelection();
  if (event.button !== 0) return;
  if (link?.isConnected) {
    selectedLink = link;
    link.setAttribute('data-link-selected', '');
  } else if (document.activeElement?.matches('a:focus-visible')) {
    document.activeElement.blur();
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Tab') clearLinkSelection();
});
document.addEventListener('focusin', event => {
  if (event.target.matches?.(':focus-visible')) clearLinkSelection();
});
addEventListener('pagehide', clearLinkSelection);
