import { genresList } from './genresList';

export function formatGenres(array) {
  const genreResult = array.map(genreId => {
    const { name } = genresList.find(genre => genre.id === genreId);
    return name;
  });

  if (!genreResult.length) {
    return 'Unknown genre';
  } else if (genreResult.length > 2) {
    return `${genreResult[0]}, ${genreResult[1]}...`;
  } else {
    return genreResult.join(', ');
  }
}
export {formatGenres};
