const API_KEY = "44900645-90bb6bb627b06b4b3923afb1e";

export async function fetchImages(query) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network error.');
    }
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}