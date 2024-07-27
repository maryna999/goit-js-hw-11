import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';


export function renderImages(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = images.map(image => `
        <a href="${image.largeImageURL}" class="gallery-item">
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
            <div class="info">
                <p class="info-item"><b>Likes</b>: ${image.likes}</p>
                <p class="info-item"><b>Views</b>: ${image.views}</p>
                <p class="info-item"><b>Comments</b>: ${image.comments}</p>
                <p class="info-item"><b>Downloads</b>: ${image.downloads}</p>
            </div>
        </a>
    `).join('');

    const lightbox = new SimpleLightbox('.gallery a', { /* options */ });

    // Додати alt текст до кожного зображення в lightbox
    lightbox.on('shown.simplelightbox', function () {
        const currentImage = document.querySelector('.sl-image img');
        const altText = currentImage.alt;
        const altDiv = document.createElement('div');
        altDiv.classList.add('alt-text');
        altDiv.textContent = altText;
        document.querySelector('.sl-wrapper').appendChild(altDiv);
    });

    lightbox.on('close.simplelightbox', function () {
        const altDiv = document.querySelector('.alt-text');
        if (altDiv) {
            altDiv.remove();
        }
    });
}

export function showError(message) {
    iziToast.error({
        title: 'Error',
        message: message,
    });
}

export function showLoader() {
    document.querySelector('.loader-wrapper').style.display = 'flex';
}

export function hideLoader() {
    document.querySelector('.loader-wrapper').style.display = 'none';
}


