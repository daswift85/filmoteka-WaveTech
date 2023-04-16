import {addToLocalStorage} from './setLocalStorage';
import {removeFromLocalStorage } from './removeLocalStorage';
import { btnSwitcher } from './btnSwitch';
//добавить import './js/btnaddtoLocalStorage' в index.js после того, как все заработает
export const btnRefs = {
  watchBtnEl: document.querySelector('.info-about__btn-watch'),
  queueBtnEl: document.querySelector('.info-about__btn-queue'),
  movies: document.querySelector('.js-gallery'), //сменить после на доступ к модалке 
};
  
let idMovie='';

// функция для получения id фильма из галерии - сменить после на id с модалки
function getMovieId(e) {
  if (e.target.nodeName === 'IMG') {
    idMovie = e.target.parentNode.attributes['data-movie'].nodeValue;
    console.log(idMovie, typeof idMovie);
    // addToLocalStorage('watchedId', idMovie);
  return idMovie;
  }
};

btnRefs.movies.addEventListener('click', getMovieId); //тест работы localStorage при нажатии физьма из галереи популярных

btnRefs.watchBtnEl.addEventListener('click', ev => {
    if (btnRefs.watchBtnEl.textContent.includes('remove')) {
        removeFromLocalStorage('watchedId', idMovie); // !!! взять id фильма с модалки
        btnSwitcher(ev, 'watched'); // чекнуть работу кнопок, после того как id будет браться с модалки
    } else {
      addToLocalStorage('watchedId', idMovie); // !!! взять id фильма с модалки
      btnSwitcher(ev, 'watched'); // чекнуть работу кнопок, после того как id будет браться с модалки
    };
});

btnRefs.queueBtnEl.addEventListener('click', ev => {
  if (btnRefs.queueBtnEl.textContent.includes('remove')) {
    removeFromLocalStorage('queueId', idMovie); // !!! взять id фильма с модалки
    btnSwitcher(ev, 'queue'); // чекнуть работу кнопок, после того как id будет браться с модалки
  } else {
    addToLocalStorage('queueId', idMovie); // !!! взять id фильма с модалки
    btnSwitcher(ev, 'queue'); // чекнуть работу кнопок, после того как id будет браться с модалки
  }
});