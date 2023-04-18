import { getMovieInfo } from './api/movieAPI';
import refs from './refs';
import { createGalleryMarkup } from './render/markup-cards-main-page';
// import { spinner } from './components/spinner';
import { watched, queue } from './render/movie-modal';
import plug from './../images/plug-nobg.png';


const WatcedBtn = refs.libraryWatchedBtn;
const QueueBtn = refs.libraryQueueBtn;
console.log(WatcedBtn);

const aLibraryHeader = document.querySelector('#myLibrarySwitchBtn');

watchedArray();

if (WatcedBtn) {
  WatcedBtn.addEventListener('click', showWatched);
  QueueBtn.addEventListener('click', showQueue);
}


function showWatched() {
  if (!WatcedBtn.classList.contains('js-active')) {
    WatcedBtn.disabled = true;
    QueueBtn.disabled = false;
    WatcedBtn.classList.add('js-active');
    QueueBtn.classList.remove('js-active');
  } else { WatcedBtn.classList.remove('js-active') }

  watchedArray();
}

function showQueue() {
  if (!QueueBtn.classList.contains('js-active')) {
    QueueBtn.disabled = true;
    WatcedBtn.disabled = false;
    QueueBtn.classList.add('js-active');
    WatcedBtn.classList.remove('js-active');
    WatcedBtn.classList.remove('library__current-link');
  } else { WatcedBtn.classList.remove('js-active') }

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
          console.log();
        });
    }
  }

  return movies;
}

function watchedArray() {
  takeFromLocal('watched')
    .then(data => {
      if (data.length === 0) {// Check if data is empty
        refs.library.innerHTML = `
          <li class="nothing">
            <img class="nothing-img" src="${plug}" alt="no nothing" />
          </li>`;
      } else {
        const markup = createGalleryMarkup(data);
        refs.library.innerHTML = markup;
      }
    })
    .catch(error => console.log());
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
      if (data.length === 0) { // Check if data is empty
        refs.library.innerHTML = `
          <li class="nothing">
            <img class="nothing-img" src="${plug}" alt="no nothing" />
          </li>`;
      } else {
        const markup = createGalleryMarkup(data);
        refs.library.innerHTML = markup;
      }
    })
    .catch(error => console.log());
  if (
    localStorage.getItem('watched') === null &&
    localStorage.getItem('queue') === null
  ) {
    document.querySelectorAll('.gallery__item').forEach(card => card.remove());
  }
}

