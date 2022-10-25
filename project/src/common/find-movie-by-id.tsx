import { Film } from '../types/film';
import { Films } from '../mocks/films';

export function FindMovieById(id: string | undefined): Film {
  if (!id) {
    throw new Error('Invalid id.');
  }
  const movie = Films.find((currentMovie) => currentMovie.id === id);
  if (!movie) {
    throw new Error('There is no such movie');
  }

  return movie;
}
