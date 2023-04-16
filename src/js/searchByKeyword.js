import Notiflix from 'notiflix';
import refs from './refs';
import { getMovieByKeyword } from './api/movieAPI';
import { createGalleryMarkup } from './render/markup-cards-main-page';
import { spinner } from './components/spinner';

refs.searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  spinner('start');

  const searchQuery = refs.searchInput.value.trim();
  if (searchQuery === '') {
    Notiflix.Notify.failure(
      'Пожалуйста, введите ключевое слово для поиска фильмов',
      {
        position: 'center-center',
        timeout: 3000,
      }
    );

    spinner('stop');
    return;
  }

  // Функция для поиска фильмов по ключевому слову и похожим названиям
  const searchMovies = async query => {
    const response = await fetch(
      `https://api.example.com/movies?query=${query}`
    );
    const movies = await response.json();

    // Создаем регулярное выражение для поиска похожих названий фильмов
    const regex = new RegExp(`.*${query.split('').join('.*')}.*`, 'i');

    // Фильтруем полученные результаты по регулярному выражению
    const similarMovies = movies.filter(movie => regex.test(movie.title));

    return similarMovies;
  };

  const searchResults = await getMovieByKeyword(searchQuery, 1);

  if (searchResults.results.length === 0) {
    Notiflix.Notify.warning(
      'Notyflix: По вашему запросу ничего не найдено. Пожалуйста, повторите поиск.',
      {
        position: 'center-center',
        timeout: 3000,
      }
    );
  } else {
    refs.gallery.innerHTML = '';
    const moviesMarkup = createGalleryMarkup(searchResults.results);
    refs.gallery.insertAdjacentHTML('beforeend', moviesMarkup);
  }

  spinner('stop');

  refs.searchInput.value = '';
});
