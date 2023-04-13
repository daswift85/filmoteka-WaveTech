import { IMAGE_BASE_URL } from './api-vars';

const gallery = document.querySelector('.gallery');


function renderTrend(data) {
    const markup = createListMarkup(data);


    gallery.insertAdjacentHTML('beforeend', markup);
}


export function createListMarkup(data) {
    if (data) {
        return data.map(({
            original_title, poster_path, id, genre_names,
            release_date, }) => {
            let posterPath = ``;
            if (poster_path) {
                posterPath =
                    `${IMAGE_BASE_URL}${poster_path}`
            } else {
                posterPath =
                    'https://ih1.redbubble.net/image.1027712254.9762/fposter,small,wall_texture,product,750x1000.u2.jpg'
            } return `
<li class="poster-list__item" key="${id}">
  <img
    class="poster-list__img"
    src="${posterPath}"
    alt="${original_title}"
    width
    loading="lazy"
  />
  <div class="poster-list__wrap">
    <h2 class="poster-list__title">${original_title}</h2>
    <div class="poster-list__info">
      <p class="poster-list__text">${genre_names}</p>
      <p class="poster-list__age">| ${release_date}</p>
    </div>
  </div>
</li>
`}).join('');
    };
};