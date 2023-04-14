import { getMovieByTrend } from '../api/movieAPI';
import { createGalleryMarkup } from './markup-cards-main-page';
import refs from '../refs';

const galleryMovie = refs.gallery;
// Placeholder for spinner;
getMovieByTrend().then(data => {
  // Placeholder for spinner;
  galleryMovie.insertAdjacentHTML(
    'beforeend',
    createGalleryMarkup(data.results)
  );
});
