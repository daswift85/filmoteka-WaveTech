import { genresListFormat } from '../genresListFormat';
import noPoster from '../../images/noPoster.png';
import { movieReleaseYearFormat } from '../movieReleaseYearFormat';

export function createGalleryMarkup(movies) {
  return movies
    .map(movie => {
      const genres = genresListFormat(movie.genre_ids);
      const movieYear = movieReleaseYearFormat(movie);
      const movieRate = movie.vote_average.toFixed(1)
      const poster = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : noPoster;

      return `<li class="gallery__item" data-movie="${movie.id}">
      <img
        class="gallery__img"
        src="${poster}"
        alt="${movie.title ?? movie.name}"
        width
        loading="lazy"
      />
      <div class="gallery__wrap">
        <h2 class="gallery__title">${movie.title ?? movie.name}</h2>
        <div class="gallery__info">
          <p class="gallery__genre-text">${genres}</p>
          <span class="gallery__date"> | </span>
          <p class="gallery__date"> ${movieYear}</p>
          <p class="gallery__rank"> ${ movieRate}</p>
        </div>
      </div>
    </li>`;
    })
    .join('');
}
