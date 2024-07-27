const API_KEY = "44900645-90bb6bb627b06b4b3923afb1e";
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}