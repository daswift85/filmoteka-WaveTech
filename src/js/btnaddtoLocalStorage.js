import {addToLocalStorage} from './setLocalStorage';
import {removeFromLocalStorage } from './removeLocalStorage';
import { btnSwitcher } from './btnSwitch';

export const modal=document.querySelector('.modal');

let idMovie = '';

modal.addEventListener('click', ev => {
  getMovieId(ev);
  if (ev.target.dataset.btn === "addToWatched") {
    if (ev.target.textContent.includes('remove')) {
      removeFromLocalStorage('watchedId', idMovie);
      btnSwitcher(ev, 'watched');
    } else {
      addToLocalStorage('watchedId', idMovie);
      btnSwitcher(ev, 'watched');
    };
  } else if (ev.target.dataset.btn === 'addToQueue') {
    if (ev.target.textContent.includes('remove')) {
      removeFromLocalStorage('queueId', idMovie);
      btnSwitcher(ev, 'queue');
  } else {
      addToLocalStorage('queueId', idMovie);
      btnSwitcher(ev, 'queue');
    };
  } else {
    return;
  }
});

function getMovieId(e) {
    idMovie = e.target.parentElement.parentElement.dataset.id;
  return idMovie;
};