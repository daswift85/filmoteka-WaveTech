import { getMovieInfo } from "./api/movieAPI";
import refs from "./refs";
import { createGalleryMarkup } from "./render/markup-cards-main-page";


export function takeFromLocal(key) {
    const existingMv = JSON.parse(localStorage.getItem(key));
    console.log(existingMv);
    let movies = [];
    for (const movie of existingMv) {
        getMovieInfo(movie).then(data => {
            return movies.push(data)
        })
    }
    return movies;
};

const watchedArray = takeFromLocal('watchedId');

console.log(watchedArray);