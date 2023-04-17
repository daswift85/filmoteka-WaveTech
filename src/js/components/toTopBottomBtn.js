import refs from '../refs';

window.addEventListener('scroll', showArrows);

refs.scrollTop.addEventListener('click', function () {
  scrollTo(refs.heder);
});

refs.scrollDown.addEventListener('click', function () {
  scrollTo(refs.footer);
});

export function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth',
  });
}

export function showArrows() {
  let viewportHeight = document.documentElement.clientHeight;
  let htmlHeight = document.documentElement.scrollHeight;
  let heightLimiter = htmlHeight - 2 * viewportHeight;

  if (window.scrollY >= heightLimiter) {
    refs.scrollDown.classList.remove('scroll--show');
  } else {
    refs.scrollDown.classList.add('scroll--show');
  }

  if (window.scrollY <= viewportHeight) {
    refs.scrollTop.classList.remove('scroll--show');
  } else {
    refs.scrollTop.classList.add('scroll--show');
  }
}
