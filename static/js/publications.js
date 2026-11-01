const imageViewer = document.querySelector('#publication-image-viewer');
const enlargedImage = imageViewer.querySelector('img');
const imageCaption = imageViewer.querySelector('figcaption');

document.querySelectorAll('.publications-page .card img').forEach((image) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'publication-image-button';
    const title = image.closest('.card').querySelector('.card-title').textContent;
    button.setAttribute('aria-label', `Enlarge figure: ${title}`);
    button.setAttribute('aria-haspopup', 'dialog');
    image.replaceWith(button);
    button.append(image);
    button.addEventListener('click', () => {
        enlargedImage.src = image.src;
        enlargedImage.alt = `Figure for ${title}`;
        imageCaption.textContent = title;
        imageViewer.showModal();
    });
});

imageViewer.querySelector('.image-viewer-close').addEventListener('click', () => imageViewer.close());
imageViewer.addEventListener('click', (event) => {
    if (event.target === imageViewer) {
        const bounds = imageViewer.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom) imageViewer.close();
    }
});
