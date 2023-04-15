import noPoster from '../images/noPoster.png';
const apiKey = '492f9e953404699f8c7d096022fa41fa'; // Replace with your TMDB API key
const apiUrl = 'https://api.themoviedb.org/3/search/movie';
const galleryContainer = document.querySelector('.js-gallery'); // Replace with the ID of your gallery container element
const searchForm = document.querySelector('.search__form'); // Replace with the class name of your search form
const searchInput = document.querySelector('.search__input'); // Replace with the class name of your search input
const searchSubmitButton = document.querySelector('.search__submit-button'); // Replace with the class name of your search submit button

let currentPage = 1;

// Function to fetch movie data from TMDB API
const fetchMovies = async (query, page) => {
  try {
    const response = await fetch(`${apiUrl}?api_key=${apiKey}&query=${query}&page=${page}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

// Function to render movies in the gallery
const renderMovies = (movies) => {
  galleryContainer.innerHTML = ''; // Clear gallery container
  movies.forEach((movie) => {
    const genres = movie.genre_ids.map((genreId) => genreId.name).join(', ');
    const movieYear = movie.release_date ? movie.release_date.split('-')[0] : '';
    const movieRate = movie.vote_average ? movie.vote_average.toFixed(1) : '';
    const poster = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : noPoster;
    const movieMarkup = `
      <li class="gallery__item" data-movie="${movie.id}">
        <img
          class="gallery__img"
          src="${'https://image.tmdb.org/t/p/w500' + poster}"
          alt="${movie.title || movie.name}"
          width
          loading="lazy"
        />
        <div class="gallery__wrap">
          <h2 class="gallery__title">${movie.title || movie.name}</h2>
          <div class="gallery__info">
            <p class="gallery__genre-text">${genres}</p>
            <span class="gallery__date"> | </span>
            <p class="gallery__date">${movieYear}</p>
            <p class="gallery__rank">${movieRate}</p>
          </div>
        </div>
      </li>
    `;
    galleryContainer.innerHTML += movieMarkup; // Append movie markup to gallery container
  });
};

// Function to handle form submission
const handleFormSubmit = async (event) => {
  event.preventDefault();
  const query = searchInput.value;
  if (query) {
    galleryContainer.innerHTML = ''; // Clear gallery container
    const movies = await fetchMovies(query, currentPage);
    renderMovies(movies);
  }
};

// Add event listener to form submit button
searchSubmitButton.addEventListener('click', handleFormSubmit);
