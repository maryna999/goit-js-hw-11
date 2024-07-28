import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery, showError, showLoader, hideLoader } from './js/render-functions.js';

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.trim();
    
    if (query === '') {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search query',
        });
        return;
    }

    document.getElementById('search-input').value = '';

    showLoader();
    clearGallery();

    fetchImages(query)
        .then(data => {
            if (data.hits.length === 0) {
                showError('Sorry, there are no images matching your search query. Please try again!');
            } else {
                renderImages(data.hits);
            }
        })
        .catch(error => {
            showError('An error occurred while fetching images. Please try again later.');
        })
        .finally(() => {
            hideLoader();
        });
});
