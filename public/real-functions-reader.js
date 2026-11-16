const textbookReader = document.querySelector('[data-textbook-reader]');
if (textbookReader) {
  const fileInput = textbookReader.querySelector('input');
  const links = textbookReader.querySelector('nav');
  let objectUrl;
  textbookReader.hidden = false;
  fileInput.addEventListener('change', () => {
    if (objectUrl) URL.revokeObjectURL(objectUrl);
    const file = fileInput.files[0];
    objectUrl = file ? URL.createObjectURL(file) : null;
    for (const link of links.querySelectorAll('[data-pdf-page]')) {
      if (objectUrl) link.href = objectUrl + '#page=' + link.dataset.pdfPage;
      else link.removeAttribute('href');
    }
    links.hidden = !objectUrl;
  });
}
