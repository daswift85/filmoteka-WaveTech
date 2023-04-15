import {addToLocalStorage} from './setLocalStorage';
import {removeFromLocalStorage } from './removeLocalStorage';
import { btnSwitcher } from './btnSwitch';

export const btnRefs = {
  watchBtnEl: document.querySelector('.info-about__btn-watch'),
  queueBtnEl: document.querySelector('.info-about__btn-queue'),
};

btnRefs.watchBtnEl.addEventListener('click', ev => {
    if (btnRefs.watchBtnEl.textContent.includes('remove')) {
      // removeId("watchedId", movie.id); // !!! взять id фильма с модалки
      btnSwitcher(ev, 'watched');
    } else {
        // addToLocalStorage("watchedId", movie.id); // !!! взять id фильма с модалки
        btnSwitcher(ev, 'watched');
    };
});

btnRefs.queueBtnEl.addEventListener('click', ev => {
  if (btnRefs.queueBtnEl.textContent.includes('remove')) {
    //   removeId("queueId", movie.id) // !!! взять id фильма с модалки
    btnSwitcher(ev, 'queue');
  } else {
    //   addToLocalStorage("queueId", movie.id); // !!! взять id фильма с модалки
        btnSwitcher(ev, 'queue');  
    }
});