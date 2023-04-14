import { getMovieByTrend } from '../api/movieAPI';
import { createGalleryMarkup } from './markup-cards-main-page';
import refs from '../refs';
import { spinner } from '../components/spinner';

const galleryMovie = refs.gallery;
spinner('start');
getMovieByTrend().then(data => {
  // Placeholder for spinner;
  galleryMovie.insertAdjacentHTML(
    'beforeend',
    createGalleryMarkup(data.results)
  );
  spinner('stop');
});
