const teamModalCloseBtnEl = document.querySelector('.modal-close-btn');
const teamModalOpenLinkEl = document.querySelector('.team-modal-link');
const teamBackdropEl = document.querySelector('.team-backdrop');
const memberLinkEl = document.querySelectorAll('.member-link');

teamModalCloseBtnEl.addEventListener('click', toggleModal);
teamModalOpenLinkEl.addEventListener('click', toggleModal);
memberLinkEl.forEach(element => {
  element.addEventListener('click', function (event) {
    event.preventDefault();
  });
});

function toggleModal(event) {
  event.preventDefault();
  teamBackdropEl.classList.toggle('visually-hidden');
  document.body.classList.toggle('modal-open');
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    var teamBackdropEl = document.querySelector('.team-backdrop');
    // Check if modal is currently open by checking if it does not have the 'visually-hidden' class
    var modalIsOpen = !teamBackdropEl.classList.contains('visually-hidden');

    if (modalIsOpen) {
      // Add code to close the modal window by adding the 'visually-hidden' class to the modal element
      teamBackdropEl.classList.add('visually-hidden');
      document.body.classList.remove('modal-open');
    }
  }
});

window.addEventListener('click', function (event) {
  if (event.target == teamBackdropEl) {
    teamBackdropEl.classList.toggle('visually-hidden');
    document.body.classList.toggle('modal-open');
  }
});
