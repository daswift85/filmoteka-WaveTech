// Функция, которая возвращает рейтинг фильма
export function voteAverage(movieRank) {
    const movieVote = movieRank.vote_average;
    if (movieVote) {
      return movieVote.toFixed(1);
    }
    return 'Unknown';
  }