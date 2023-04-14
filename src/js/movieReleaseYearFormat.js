// Функция, которая возвращает год выпуска фильма
export function movieReleaseYearFormat(movieData) {
  const releaseDate = movieData.release_date;
  if (releaseDate) {
    return releaseDate.slice(0, 4);
  }
  return 'Unknown';
}
