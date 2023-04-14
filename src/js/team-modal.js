const teamModalCloseBtnEl = document.querySelector('.modal-close-btn');
const teamModalOpenLinkEl = document.querySelector('.team-modal-link');
const teamBackdropEl = document.querySelector('.team-backdrop');

teamModalCloseBtnEl.addEventListener('click', toggleModal);
teamModalOpenLinkEl.addEventListener('click', toggleModal);

function toggleModal(event) {
  event.preventDefault();
  teamBackdropEl.classList.toggle('visually-hidden');
}
