// Функция, которая возвращает год выпуска фильма
export function movieReleaseYearFormat(movieData) {
  const releaseDate = movieData.release_date || movieData.first_air_date;
  if (releaseDate) {
    return releaseDate.slice(0, 4);
  }
  return 'Unknown';
}
