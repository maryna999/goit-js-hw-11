import { fetchImages } from './js/pixabay-api.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { renderGallery } from './js/render-functions.js';
import SimpleLightbox from "simplelightbox";


const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = input.value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Search query cannot be empty',
    });
    return;
  }

  loader.style.display = 'block';
  gallery.innerHTML = '';

  const images = await fetchImages(query);
  loader.style.display = 'none';

  if (images.length === 0) {
    iziToast.warning({
      title: 'No Results',
      message: 'Sorry, there are no images matching your search query. Please try again!',
    });
  } else {
    renderGallery(images);
  }
});
