

// жду модалку с кнопками, пока проверить код не могу... ушел в запой, если скоро не вернусь - допишите код)



// export function addToLocalStorage(key, id) {
//     console.log(`Adding ${id} to ${key}`);
//     const existingMv = JSON.parse(localStorage.getItem(key));
//     if (existingMv === null) {
//       existingMv = [];
//     }
//     if (!existingMv.includes(id)) {
//       existingMv.push(id);
//     }
//     localStorage.setItem(key, JSON.stringify(existingMv));
//   }

//   export function removeFromLocalStorage(key, id) {
//     console.log(`Removing ${id} from ${key}`);
//     const existingMv = JSON.parse(localStorage.getItem(key));
//     for (const movie of existingMv) {
//         if (movie === id) {
//             existingMv.splice(existingMv.indexOf(movie), 1);
//             localStorage.setItem(key, JSON.stringify(existingMv))
//             break;
//         };
//     };
// }

// const LoadFromLocalStorage = key => {
//     try {
//       const serializedState = localStorage.getItem(key);
//       return serializedState === null ? undefined : JSON.parse(serializedState);
//     } catch (error) {
//       console.error('Get state error: ', error.message);
//     };
//   };

//   export function addToListLibrary(id, select) {
   
//     const sel = select + 'Data';
//     const moviesData = LoadFromLocalStorage('moviesData');
//     const movieData = moviesData.find(movie => movie.id === id);
//     const libArr = LoadFromLocalStorage(select) || [];
//     const libData = LoadFromLocalStorage(sel) || [];

//     if (!movieData) {
//         console.error(`Movie with id ${id} was not found.`);
//         return;
//       }
    
//     const index = libArr.indexOf(id);
  
//     if (index < 0) {
//       libArr.push(id);
//       libData.push(movieData);
//     } else {
//       libArr.splice(index, 1);
//       libData.splice(index, 1);
//     }
  
//     addToLocalStorage(select, libArr);
//     addToLocalStorage(sel, libData);
//   }


// // const selectCard = document.querySelector('.gallery__item');
// // selectCard.addEventListener('click', console.log('acrvve'));


// const selectCard = document.querySelector('.gallery__item');
// selectCard.addEventListener('click', () => {
//     const movieId = selectCard.dataset.id;
//     addToListLibrary(movieId, 'myLibrary');
// });

// const selectCards = document.querySelectorAll('.gallery__item');
// selectCards.forEach(selectCard => {
//   selectCard.addEventListener('click', () => {
//     const movieId = selectCard.dataset.id;
//     addToListLibrary(movieId, 'myLibrary')
//   });
// });
