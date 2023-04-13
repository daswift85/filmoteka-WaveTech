import settings from './varsAPI';

const { API_KEY, BASE_URL } = settings;

const SEARCH_VIDEO_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&include_adult=false`;

export default class MovieApiService {
  constructor() {
    this.searchQuery = '';
    this.currentPage = 1;
    this.language = 'en-US';
    this.genres = '';
    this.movieId = 0;
  }

  async fetchMoviesBySearch() {
    const response = await fetch(
      `${SEARCH_VIDEO_URL}&query=${this.searchQuery}&language=${this.language}&page=${this.currentPage}`
    );
    return await response.json();
  }

  async fetchPopularMovies() {
    const popularMoviesURL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${this.currentPage}`;
    const response = await fetch(popularMoviesURL);
    return await response.json();
  }

  async getMovieDetailsById(id) {
    const movieDetailsURL = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
    const response = await fetch(movieDetailsURL);
    return await response.json();
  }

  async fetchMovieById() {
    const response = await fetch(
      `${BASE_URL}/movie/${this.movieId}?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  }

  async fetchMovieTrailerById(id) {
    const response = await fetch(
      `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  }

  setMovieId(newId) {
    this.movieId = newId;
  }

  incrementPage() {
    this.currentPage += 1;
  }

  resetPage() {
    this.currentPage = 1;
  }

  get searchQuery() {
    return this.searchQuery;
  }
  set searchQuery(newQuery) {
    this.searchQuery = newQuery;
  }

  get currentPage() {
    return this.currentPage;
  }

  set currentPage(page) {
    this.currentPage = page;
  }
}
