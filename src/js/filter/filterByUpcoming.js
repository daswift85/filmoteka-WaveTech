import { getTopRatedMovie } from '../api/movieAPI';
import { createGalleryMarkup } from '../render/markup-cards-main-page';
import { spinner } from '../components/spinner';
import refs from '../refs';

const galleryMovie = refs.gallery;

refs.upcomingBtn.addEventListener('click', async function (event) {
  try {
    spinner('start');
    const weeklyTrendingMovies = await getTopRatedMovie('upcoming');
    galleryMovie.innerHTML = '';
    galleryMovie.insertAdjacentHTML(
      'beforeend',
      createGalleryMarkup(weeklyTrendingMovies.results)
    );
    spinner('stop');
  } catch (error) {
    console.log(error);
  }
});
