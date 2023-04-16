import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { getMovieInfo, getMovieTrailer } from '../api/movieAPI';
import refs from '../refs';
import { showHideLoader } from '../loader';
import { getArrayOfMovies } from '../api/movieAPI';
import { createGalleryMarkup } from './markup-cards-main-page';

let keyTrailer = '';
const KEY_WATCHED = 'watched';
const KEY_QUEUE = 'queue';
export const watched = getWatchedLocalStoradge() || [];
export const queue = getQueueLocalStoradge() || [];

function getWatchedLocalStoradge() {
  return JSON.parse(localStorage.getItem(KEY_WATCHED));
}

function getQueueLocalStoradge() {
  return JSON.parse(localStorage.getItem(KEY_QUEUE));
}

function setWatchedLocalStoradge(arr) {
  localStorage.setItem(KEY_WATCHED, JSON.stringify(arr));
}

function setQueueLocalStoradge(arr) {
  localStorage.setItem(KEY_QUEUE, JSON.stringify(arr));
}

function onAddToWatched(id) {
    if (watched.includes(id)) {
     return;
   }
   watched.push(id);
   setWatchedLocalStoradge(watched);
   
 }
 
function onAddToQueue(id) {
     if (queue.includes(id)) {
     return;
   }
   queue.push(id);
   setQueueLocalStoradge(queue);
 }

export function loadIntoModal(id) {
    showHideLoader(refs.loaderModal);
    const film = getMovieInfo(id).then(data => {
        showHideLoader(refs.loaderModal);
        getMovieTrailer(id)
        .then(movies => {
            if(movies && movies.length){
                const objTrailer = movies.find(movie => movie.type === 'Trailer');
            if (objTrailer && objTrailer.type !== 'Trailer'){
                return;
            }
            keyTrailer = objTrailer ? objTrailer.key : '';
            }
            refresh(data, id, keyTrailer);
            keyTrailer = '';
          })
          .catch(error => {
            refresh(data, id);
          });
        });
}

function refresh(data, id, keyTrailer = '') {
    if (!createFilmCardMarkup(data)) {
      return;
    }
    const addWatchedRef = document.querySelector('[data-btn=addToWatched]');
    const addQueueRef = document.querySelector('[data-btn=addToQueue]');

    if(watched.includes(id)){
        addWatchedRef.textContent = 'Is in watched';
        addWatchedRef.style.backgroundColor = '#ff6b01';
        addWatchedRef.style.color = '#ffffff';
    }
    if (queue.includes(id)) {
        addQueueRef.textContent = 'Is in queue';
        addQueueRef.style.backgroundColor = '#ff6b01';
        addQueueRef.style.color = '#ffffff';
      }
      addWatchedRef.addEventListener ('click', () => {
        if (watched.includes(id)) {
            watched.splice(watched.indexOf(id), 1);
            setWatchedLocalStoradge(watched);
            addWatchedRef.style.backgroundColor = '#ffffff';
            getArrayOfMovies(watched)
            .then(data =>{
                if(refs.libraty){
                    refs.libraty.innerHTML = createGalleryMarkup(data);
                }
            })
            .catch(error => console.log(error));
        }else {
            onAddToWatched(id);
            setWatchedLocalStoradge(watched);
        }

        refs.modalRef.innerHTML = '';
        refresh(data, id, keyTrailer);
      });

      addQueueRef.addEventListener('click', () =>{
        if(queue.includes(id)){
            queue.splice(queue.indexOf(id), 1);
            setQueueLocalStoradge(queue);
            addQueueRef.style.backgroundColor = '#ffffff';

            getArrayOfMovies(queue).then(data =>{
                if(refs.libraty){
                    refs.libraty.innerHTML = createGalleryMarkup(data);
                }
            });
        }else{
            onAddToQueue(id);
            setQueueLocalStoradge(queue);
        }
        refs.modalRef.innerHTML = '';
        refresh(data, id, keyTrailer);
      });  
}

function createFilmCardMarkup(data){
    let status = true;
    if(!data){
        refs.modalRef.innerHTML =
      '<div class="modal__empty">Sorry, info is unavailable</div>';
    status = false;
    return;
    }
    const poster = data.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : noposter;

  const markup = `<img
      class="modal__img"
      src="${poster}"
      alt=""
      width="240"
      height="357"
    />
  <div data-id=${data.id}>
  <h2 class="modal__title">${data.title}</h2>
  <ul class="modal__list-box">
    <li class="modal__list-item item-vote">
      <span class="modal__list-right">Vote / Votes</span>
      <span class="modal__list-vote">${data.vote_average.toFixed(1)}</span>
      <span class="modal__list-votes">${data.vote_count}</span>
    </li>
    <li class="modal__list-item">
      <span class="modal__list-right">Popularity</span>
      <span class="modal__list-left"
        >${data.popularity.toFixed(1) ?? '-'}</span
      >
    </li>
    <li class="modal__list-item">
      <span class="modal__list-right">Original Title</span>
      <span class="modal__list-left">${data.title}</span>
    </li>
    <li class="modal__list-item">
      <span class="modal__list-right">Genre</span>
      <span class="modal__list-left">${getGenres(data.genres)}</span>
    </li>
  </ul>
  <ul class="modal__list list">
    <li class="modal__list-item modal__left">
      <p class="modal__list-left">
      
      </p>
    </li>
    <li class="modal__list-item modal__left"></li>
    <li class="modal__list-item modal__left"></li>
    <li class="modal__list-item modal__left"></li>
  </ul>
  <h3 class="modal__subtitle">ABOUT</h3>
  <p class="modal__descrpt">${data.overview ?? '---'}</p>
  <div class="modal__btn-list list">
    <button type="button" class="modal__btn" data-btn="addToWatched">
      add to Watched
    </button>
    <button type="button" class="modal__btn" data-btn="addToQueue">
      add to queue
    </button>
  </div>
</div>`;

  refs.modalRef.innerHTML = markup;
  refs.teamRef.innerHTML = '';
  const voteRef = document.querySelector('.modal__list-vote');

  if (data.vote_average < 6) {
    voteRef.style.backgroundColor = '#ffffff';
    voteRef.style.color = '#000000';
  }

  return status;
}

function getGenres(arrOfGenres) {
    return arrOfGenres.map(genr => genr.name).join(', ');
  }