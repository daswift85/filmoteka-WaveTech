import refs from "../refs";
import {loadIntoModal} from '../render/movie-modal';

refs.gallery.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.divBackdrop.addEventListener('click', onBackDropClick);

function openModal(event){
    const getParentEl = event.target.closest('.gallery__item');
    if(!getParentEl){
        return;
    }

    const movieId = getParentEl.dataset.movie;
console.log(movieId);
    loadIntoModal(movieId);

    document.body.classList.add('show-modal');  
    window.addEventListener('keydown', onEscKeyPress);
}
function onCloseModal(){
    document.body.classList.remove('show-modal');
    refs.modalRef.innerHTML = "";
    refs.teamRef.innerHTML = "";
}

function onBackDropClick(event) {
    if(event.currentTarget === event.target){
        onCloseModal();
    }
}

function onEscKeyPress(event){
    if(event.code !== 'Escape'){
        return;
    }
    window.removeEventListener('keydown', onEscKeyPress);
    onCloseModal();
}


