
// import axios from 'axios';
// import { genresList } from '../api/genresList';
// import { genresLibraryFormat } from '../api/getMovieGenres';

// const API_KEY = '7cb8097836a7a1f4e5c19953961668c8';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const TREND_URL = `${BASE_URL}/trending/movie/week`;
// const IMG_URL = 'https://image.tmdb.org/t/p/w400/';

// const gallery = document.querySelector('.js-gallery');

// let page = 1;

// export function genresLibraryFormat(array) {
//   const genreResult = array.map(genre => genre.name);
//   if (!genreResult.length) {
//     return 'Unknown genre';
//   } else if (genreResult.length > 2) {
//     return `${genreResult[0]}, ${genreResult[1]}...`;
//   } else {
//     return genreResult.join(', ');
//   }
// }

// async function getTrendFilms(page) {
//   try {
//     const { data } = await axios.get(
//       `${TREND_URL}?api_key=${API_KEY}&page=${page}`,
//     );
//     if (Array.isArray(data.results)) {
//       return data.results;
//     } else {
//       throw new Error('Unexpected API response format');
//     }
//   } catch (error) {
//     console.error(error);
//     throw new Error('Failed to fetch trending films');
//   }
// }

// function createListMarkup(data) {
//   if (data) {
//     return data
//       .map(
//         ({
//           original_title,
//           poster_path,
//           id,
//           genre_names,
//           release_date,
//         }) => {
//           let posterPath = ``;
//           if (poster_path) {
//             posterPath = `${IMG_URL}${poster_path}`;
//           } else {
//             posterPath =
//               'https://ih1.redbubble.net/image.1027712254.9762/fposter,small,wall_texture,product,750x1000.u2.jpg';
//           }
//           return `
//             <li class="gallery__item" key="${id}">
//               <img
//                 class="gallery__img"
//                 src="${posterPath}"
//                 alt="${original_title}"
//                 width
//                 loading="lazy"
//               />
//               <div class="gallery__wrap">
//                 <h2 class="gallery__title">${original_title}</h2>
//                 <div class="gallery__info">
//                   <p class="gallery__genre-text">${genre_names}</p>
//                   <p class="gallery__date">| ${release_date.slice(0, 4)}</p>
//                 </div>
//               </div>
//             </li>
//           `;
//         }
//       )
//       .join('');
//   }
//   return '';
// }


// export { createListMarkup };

// async function renderMovies() {
//   const data = await getTrendFilms(page);
//   const listMarkup = createListMarkup(data);
//   gallery.innerHTML = listMarkup;
// }

// renderMovies();


