import Pagination from 'tui-pagination';
import { getTopRatedMovie } from '../api/movieAPI';
import { getMovieByTrend } from '../api/movieAPI';
import { getMovieByKeyword } from '../api/movieAPI';
import refs from '../refs';
import { createGalleryMarkup } from '../render/markup-cards-main-page';
import { spinner } from '../components/spinner';
import Notiflix from 'notiflix';

// Define a function to initialize the pagination
function initPagination(totalPages, currentPage, onPageChange) {
    // Create a new instance of the Pagination module
    const pagination = new Pagination(refs.pagination, {
      totalItems: 10000, // Assuming 10 items per page
      itemsPerPage: 20, // Number of items per page
      visiblePages: 5, // Number of visible page numbers
      page: currentPage, // Current page number
      centerAlign: true, // Center align the pagination
      template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}"></span>' +
          '</a>',
        disableMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}"></span>' +
          '</span>',
      },
    });

    // Add an event listener for the 'change' event to handle page changes
    pagination.on('beforeMove', event => {
      const newPage = event.page;

      // Call the onPageChange function with the new page number
      onPageChange(newPage);
    });

    return pagination;
  }

// Function to load movies by trend
async function loadMoviesByTrend(page) {
    // Clear the current movies displayed on the page
    refs.gallery.innerHTML = '';
  
    // Call getTopRatedMovie() function with the current page
    const data = await getMovieByTrend(type = 'day', page);
  
    // Render the movies on the page using createGalleryMarkup() function
    refs.gallery.insertAdjacentHTML(
      'beforeend',
      createGalleryMarkup(data.results)
    );
  }

  // Usage example
  let currentPage = 1; // Initial page number

  // Call the initPagination function to initialize the pagination
  const pagination = initPagination(100, currentPage, onPageChange);

  // Function to handle page changes
  function onPageChange(newPage) {
    // Update the current page
    currentPage = newPage;

    // Call the loadMoviesByTrend() function with the updated page
    loadMoviesByTrend(currentPage);
  }

  ///event listeners for buttons/////

//// 1 listener
refs.nowPlayingBtn.addEventListener('click', async (event) => {
    async function loadMoviesByTrend1(page) {
      refs.gallery.innerHTML = '';
      const data = await getTopRatedMovie('now_playing', page);
      refs.gallery.insertAdjacentHTML(
        'beforeend',
        createGalleryMarkup(data.results)
      );
    }
    let currentPage = 1; // Initial page number
    const pagination = initPagination(100, currentPage, onPageChange);
    function onPageChange(newPage) {
      currentPage = newPage;
      loadMoviesByTrend1(currentPage);
    }
    loadMoviesByTrend1(currentPage);
  });

//// 2 listener
refs.topRatedBtn.addEventListener('click', async (event) => {
    async function loadMoviesByTrend2(page) {
      refs.gallery.innerHTML = '';
      const data = await getTopRatedMovie('top_rated', page);
      refs.gallery.insertAdjacentHTML(
        'beforeend',
        createGalleryMarkup(data.results)
      );
    }
    let currentPage = 1; // Initial page number
    const pagination = initPagination(100, currentPage, onPageChange);
    function onPageChange(newPage) {
      currentPage = newPage;
      loadMoviesByTrend2(currentPage);
    }
    loadMoviesByTrend2(currentPage);
  });
  
  ////3 listener
  refs.weeklyTrendBtn.addEventListener('click', async (event) => {
    async function loadMoviesByTrend3(page) {
      refs.gallery.innerHTML = '';
      const data = await getMovieByTrend('week', page);
      refs.gallery.insertAdjacentHTML(
        'beforeend',
        createGalleryMarkup(data.results)
      );
    }
    let currentPage = 1; // Initial page number
    const pagination = initPagination(100, currentPage, onPageChange);
    function onPageChange(newPage) {
      currentPage = newPage;
      loadMoviesByTrend3(currentPage);
    }
    loadMoviesByTrend3(currentPage);
  });
  //// 4 listener
  refs.upcomingBtn.addEventListener('click', async (event) => {
    async function loadMoviesByTrend4(page) {
      refs.gallery.innerHTML = '';
      const data = await getTopRatedMovie('upcoming', page);
      refs.gallery.insertAdjacentHTML(
        'beforeend',
        createGalleryMarkup(data.results)
      );
    }
    let currentPage = 1; // Initial page number
    const pagination = initPagination(100, currentPage, onPageChange);
    function onPageChange(newPage) {
      currentPage = newPage;
      loadMoviesByTrend4(currentPage);
    }
    loadMoviesByTrend4(currentPage);
  });
  
//// 5 listener
refs.popularBtn.addEventListener('click', async (event) => {
    async function loadMoviesByTrend5(page) {
      refs.gallery.innerHTML = '';
      const data = await getTopRatedMovie('popular', page);
      refs.gallery.insertAdjacentHTML(
        'beforeend',
        createGalleryMarkup(data.results)
      );
    }
    let currentPage = 1; // Initial page number
    const pagination = initPagination(100, currentPage, onPageChange);
    function onPageChange(newPage) {
      currentPage = newPage;
      loadMoviesByTrend5(currentPage);
    }
    loadMoviesByTrend5(currentPage);
  });

  //// 6 listener
  const searchQuery = refs.searchInput.value.trim();
  refs.searchForm.addEventListener('submit', async event => {
    async function loadMoviesByTrend6(page) {
      refs.gallery.innerHTML = '';
      const data = await getMovieByKeyword(searchQuery, page);
      refs.gallery.insertAdjacentHTML(
        'beforeend',
        createGalleryMarkup(data.results)
      );
    }
    let currentPage = 1; // Initial page number
    const pagination = initPagination(100, currentPage, onPageChange);
  
    async function onPageChange(newPage) { // Update to use async function
      currentPage = newPage;
      await loadMoviesByTrend6(currentPage); // Use await when calling loadMoviesByTrend6
    }
  
    await loadMoviesByTrend6(currentPage); // Use await to ensure data is fetched before updating DOM
  });
  
  export async function getMovieByKeyword(query, page) {
    const url = `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}`;
    try { // Implement error handling with try-catch
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error); // Update with appropriate error handling logic
      throw error; // Rethrow the error or handle it as needed
    }
  }

//   const searchQuery = refs.searchInput.value.trim();
//   refs.searchForm.addEventListener('submit', async event => {
//     async function loadMoviesByTrend6(page) {
//         refs.gallery.innerHTML = '';
//         const data = await getMovieByKeyword(searchQuery, page);
//         refs.gallery.insertAdjacentHTML(
//           'beforeend',
//           createGalleryMarkup(data.results)
//         );
//       }
//       let currentPage = 1; // Initial page number
//       const pagination = initPagination(100, currentPage, onPageChange);
//       function onPageChange(newPage) {
//         currentPage = newPage;
//         loadMoviesByTrend6(currentPage);
//       }
//       loadMoviesByTrend6(currentPage);
//     });
  
    // spinner('start');
  
    // const searchQuery = refs.searchInput.value.trim();
    // if (searchQuery === '') {
    //   Notiflix.Notify.failure(
    //     'Пожалуйста, введите ключевое слово для поиска фильмов',
    //     {
    //       position: 'center-center',
    //       timeout: 3000,
    //     }
    //   );
  
    //   spinner('stop');
    //   return;
    // }
  
//     // Функция для поиска фильмов по ключевому слову и похожим названиям
//   const searchMovies = async query => {
//     const response = await fetch(
//       `https://api.example.com/movies?query=${query}`
//     );
//     const movies = await response.json();

//     // Создаем регулярное выражение для поиска похожих названий фильмов
//     const regex = new RegExp(`.*${query.split('').join('.*')}.*`, 'i');

//     // Фильтруем полученные результаты по регулярному выражению
//     const similarMovies = movies.filter(movie => regex.test(movie.title));

//     return similarMovies;
//   };

//   const searchResults = await getMovieByKeyword(searchQuery, page);

//   if (searchResults.results.length === 0) {
//     Notiflix.Notify.warning(
//       'Notyflix: По вашему запросу ничего не найдено. Пожалуйста, повторите поиск.',
//       {
//         position: 'center-center',
//         timeout: 3000,
//       }
//     );
//   } else {
//     refs.gallery.innerHTML = '';
//     const moviesMarkup = createGalleryMarkup(searchResults.results);
//     refs.gallery.insertAdjacentHTML('beforeend', moviesMarkup);
//   }

//   spinner('stop');

//   refs.searchInput.value = '';
// });

//////////////////////////////////////////////

  // // Set initial page to 1
// let currentPage = 1;

// // Function to load movies by trend
// async function loadMoviesByTrend(page) {
//   // Call getTopRatedMovie() function with the current page
//   const data = await getTopRatedMovie(page);

//   // Render the movies on the page using createGalleryMarkup() function
//   refs.gallery.insertAdjacentHTML(
//     'beforeend',
//     createGalleryMarkup(data.results)
//   );
// }

// // Call the loadMoviesByTrend() function with the initial page
// loadMoviesByTrend(currentPage);

// // Function to handle next button click
// function handleNextButtonClick() {
//     // Increment the current page
//     currentPage++;
  
//     // Clear the current gallery
//     refs.gallery.innerHTML = '';
  
//     // Call the loadMoviesByTrend() function with the updated page
//     loadMoviesByTrend(currentPage);
//   }
  
//   // Function to handle previous button click
//   function handlePrevButtonClick() {
//     // Decrement the current page
//     if (currentPage > 1) {
//       currentPage--;
//     }
  
//     // Clear the current gallery
//     refs.gallery.innerHTML = '';
  
//     // Call the loadMoviesByTrend() function with the updated page
//     loadMoviesByTrend(currentPage);
//   }
  
//   // Add event listeners to previous and next buttons
//   refs.prevBtn.addEventListener('click', handlePrevButtonClick);
//   refs.nextBtn.addEventListener('click', handleNextButtonClick);


//////////////////////////////////////

// // Load movies by trend
// async function loadMoviesByTrend(type, page) {
//     // Clear the current movies displayed on the page
//     refs.gallery.innerHTML = '';
  
//     // Call getMovieByTrend() function with the type and current page
//     const data = await getMovieByTrend(type, page);
  
//     // Render the movies on the page using createGalleryMarkup() function
//     refs.gallery.insertAdjacentHTML(
//       'beforeend',
//       createGalleryMarkup(data.results)
//     );
//   }
  
//   // Usage example
//   let currentPage = 1; // Initial page number
//   let currentType = 'day'; // Initial type for trending movies
  
//   // Call the initPagination function to initialize the pagination
//   const pagination = initPagination(100, currentPage, onPageChange);
  
//   // Function to handle page changes
//   function onPageChange(newPage) {
//     // Update the current page
//     currentPage = newPage;
  
//     // Call the loadMoviesByTrend() function with the updated type and page
//     loadMoviesByTrend(currentType, currentPage);
//   }
  
//   // Event listener for weekly trending movies filter
//   refs.weeklyTrendBtn.addEventListener('click', async function (event) {
//     try {
//       spinner('start');
//       currentType = 'week'; // Update the current type
//       // Call the loadMoviesByTrend() function with the updated type and page
//       loadMoviesByTrend(currentType, currentPage);
//       spinner('stop');
//     } catch (error) {
//       console.log(error);
//     }
//   });
  
//   // Event listener for upcoming movies filter
//   refs.upcomingBtn.addEventListener('click', async function (event) {
//     try {
//       spinner('start');
//       // Call getTopRatedMovie() function with the 'upcoming' type
//       const upcomingMovies = await getTopRatedMovie('upcoming');
//       refs.gallery.innerHTML = '';
//       refs.gallery.insertAdjacentHTML(
//         'beforeend',
//         createGalleryMarkup(upcomingMovies.results)
//       );
//       spinner('stop');
//     } catch (error) {
//       console.log(error);
//     }
//   });
  
//   // Event listener for top-rated movies filter
//   refs.topRatedBtn.addEventListener('click', async function (event) {
//     try {
//       spinner('start');
//       // Call getTopRatedMovie() function with the default parameters (no type)
//       const topRatedMovies = await getTopRatedMovie();
//       refs.gallery.innerHTML = '';
//       refs.gallery.insertAdjacentHTML(
//         'beforeend',
//         createGalleryMarkup(topRatedMovies.results)
//       );
//       spinner('stop');
//     } catch (error) {
//       console.log(error);
//     }
//   });

///////////////////////234

// import Pagination from 'tui-pagination';
// import { getTopRatedMovie } from '../api/movieAPI';
// import { getMovieByTrend } from '../api/movieAPI';
// import refs from '../refs';
// import { createGalleryMarkup } from '../render/markup-cards-main-page';
// import { spinner } from '../components/spinner';

// // let currentPage = 1; // Initial page number

// // Define a function to initialize the pagination
// function initPagination(totalPages, onPageChange) {
//     // Create a new instance of the Pagination module
//     const pagination = new Pagination(refs.pagination, {
//       totalItems: totalPages * 20, // Assuming 10 items per page
//       itemsPerPage: 20, // Number of items per page
//       visiblePages: 5, // Number of visible page numbers
//       page: currentPage, // Current page number
//       centerAlign: true, // Center align the pagination
//       template: {
//         page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//         currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//         moveButton:
//           '<a href="#" class="tui-page-btn tui-{{type}}">' +
//           '<span class="tui-ico-{{type}}"></span>' +
//           '</a>',
//         disableMoveButton:
//           '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//           '<span class="tui-ico-{{type}}"></span>' +
//           '</span>',
//       },
//     });
  
//     // Add an event listener for the 'change' event to handle page changes
//     pagination.on('beforeMove', event => {
//       const newPage = event.page;
  
//       // Call the onPageChange function with the new page number
//       onPageChange(newPage);
//     });
  
//     // Implement the setCurrentPage function
//     pagination.setCurrentPage = function(page) {
//       // Update the current page number
//       pagination.setActivePage(page);
//       currentPage = page;
//     };
  
//     return pagination;
//   }

// // Function to load movies by trend
// async function loadMoviesByTrend(type, page) {
//   // Clear the current movies displayed on the page
//   refs.gallery.innerHTML = '';

//   // Call getTopRatedMovie() function with the current page
//   const data = await getMovieByTrend(type, page);

//   // Render the movies on the page using createGalleryMarkup() function
//   refs.gallery.insertAdjacentHTML(
//     'beforeend',
//     createGalleryMarkup(data.results)
//   );
// }

// // Usage example
// // Call the initPagination function to initialize the pagination
// const pagination = initPagination(100, onPageChange);

// // Function to handle page changes
// function onPageChange(newPage) {
//   // Update the current page
//   currentPage = newPage;

//   // Determine the active button and call the corresponding loadMoviesByTrend function
//   const activeBtn = document.querySelector('.active');
//   if (activeBtn) {
//     const btnId = activeBtn.id;
//     switch (btnId) {
//       case 'nowPlayingBtn':
//         loadMoviesByTrend('now_playing', currentPage);
//         break;
//       case 'topRatedBtn':
//         loadMoviesByTrend('top_rated', currentPage);
//         break;
//       case 'weeklyTrendBtn':
//         loadMoviesByTrend('week', currentPage);
//         break;
//       case 'upcomingBtn':
//         loadMoviesByTrend('upcoming', currentPage);
//         break;
//       case 'popularBtn':
//         loadMoviesByTrend('popular', currentPage);
//         break;
//       default:
//         break;
//     }
//   }
// }

// // Add event listeners to buttons
// refs.nowPlayingBtn.addEventListener('click', () => onPageChangeBtn('now_playing'));
// refs.topRatedBtn.addEventListener('click', () => onPageChangeBtn('top_rated'));
// refs.weeklyTrendBtn.addEventListener('click', () => onPageChangeBtn('week'));
// refs.upcomingBtn.addEventListener('click', () => onPageChangeBtn('upcoming'));
// refs.popularBtn.addEventListener('click', () => onPageChangeBtn('popular'));

// // let currentMovieType = ''; // Declare the currentMovieType variable

// // Function to handle page changes
// async function onPageChangeBtn(type) {
//     // Update the movie type
//     currentMovieType = type;
  
//     // Update the current page to 1
//     currentPage = 1; // Update currentPage to 1
  
//     // Reset the pagination to the first page
//     pagination.setCurrentPage(1);

//   // Show spinner while loading data
//   spinner.show();

//   // Call getMoviesByTrend() function with the current page and movie type
//   await loadMoviesByTrend(currentMovieType, currentPage);

//   // Hide spinner after data is loaded
//   spinner.hide();
// }

// // Function to load movies by trend
// async function loadMoviesByTrend(type, page) {
//   // Clear the current movies displayed on the page
//   refs.gallery.innerHTML = '';

//   // Call getMoviesByTrend() function with the current page and movie type
//   const data = await getMoviesByTrend(type, page);

//   // Render the movies on the page using createGalleryMarkup() function
//   refs.gallery.insertAdjacentHTML(
//     'beforeend',
//     createGalleryMarkup(data.results)
//   );

//   // Update the pagination with the total number of pages
//   pagination.setTotalItems(data.total_pages * 20);
// }