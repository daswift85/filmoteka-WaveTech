import { genresList } from './genresList';

export const genresListFormat = array => {
  if (!Array.isArray(array)) {
    return 'Unknown genre';
  }

  const genreResult = genresList
    .filter(({ id }) => array.includes(id))
    .map(({ name }) => name);

  if (!genreResult.length) {
    return 'Unknown genre';
  } else if (genreResult.length > 2) {
    return `${genreResult.slice(0, 2).join(', ')} and others`;
  } else {
    return genreResult.join(', ');
  }
};
