import { getMovieInfo } from './api/movieAPI';
import refs from './refs';
import { createGalleryMarkup } from './render/markup-cards-main-page';
// import { spinner } from './components/spinner';
import { watched, queue } from './render/movie-modal';
import noPoster from './../images/noPoster.png';

const WatcedBtn = refs.libraryWatchedBtn;
const QueueBtn = refs.libraryQueueBtn;

const aLibraryHeader = document.querySelector('#myLibrarySwitchBtn');

// console.dir(aLibraryHeader);

// if (aLibraryHeader.classList.contains('js-in-library')) {
//   WatcedBtn.addEventListener('click', showWatched);
//   QueueBtn.addEventListener('click', showQueue);
  watchedArray();
// }

function showWatched() {
  if (!WatcedBtn.classList.contains('js-active')) {
    WatcedBtn.disabled = true;
    QueueBtn.disabled = false;
    WatcedBtn.classList.add('js-active');
    QueueBtn.classList.remove('js-active');
  }
//   if (!watched.length) {
//     refs.library.innerHTML = `
//       <li class="nothing">
//         <img src="noPoster" alt="no nothing" />
//       </li>`;
//     return;
//   }
  watchedArray();
}

function showQueue() {
  if (!QueueBtn.classList.contains('js-active')) {
    QueueBtn.disabled = true;
    WatcedBtn.disabled = false;
    QueueBtn.classList.add('js-active');
    WatcedBtn.classList.remove('js-active');
  }
  queueArray();
}

export async function takeFromLocal(key) {
  let movies = [];
  const existingMv = await JSON.parse(localStorage.getItem(key));
  if (existingMv) {
    // Check if existingMv is not null or undefined
    for (const movie of existingMv) {
      await getMovieInfo(movie)
        .then(data => {
          movies.push(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
//   console.log(movies);
    return movies;
}

function watchedArray() {
  takeFromLocal('watched')
    .then(data => {
      return createGalleryMarkup(data);
    })
    .then(data => {
      refs.library.innerHTML = '';
      return refs.library.insertAdjacentHTML('beforeend', data);
    })
    .catch(error => console.log(error));
  if (
    localStorage.getItem('watched') === null &&
    localStorage.getItem('queue') === null
  ) {
    document.querySelectorAll('.gallery__item').forEach(card => card.remove());
  }
}

function queueArray() {
  takeFromLocal('queue')
    .then(data => {
      return createGalleryMarkup(data);
    })
    .then(data => {
    //   refs.library.innerHTML = '';
      return refs.library.insertAdjacentHTML('beforeend', data);
    })
    .catch(error => console.log(error));
  if (
    localStorage.getItem('watched') === null &&
    localStorage.getItem('queue') === null
  ) {
    document.querySelectorAll('.gallery__item').forEach(card => card.remove());
  }
}