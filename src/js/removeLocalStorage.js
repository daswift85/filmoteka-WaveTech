// // функция для удаления id фильма с LocalStorage при нажатии на кнопку

// export function removeFromLocalStorage(key, id) {
//     const existingMv = JSON.parse(localStorage.getItem(key));
//     for (const movie of existingMv) {
//         if (movie === id) {
//             existingMv.splice(existingMv.indexOf(movie), 1);
//             localStorage.setItem(key, JSON.stringify(existingMv))
//             break;
//         };
//     };
// }
