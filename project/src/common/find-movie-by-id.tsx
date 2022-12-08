import { Film } from '../types/film';
import { FILMS } from '../mocks/films';

export function findMovieById(id: string | undefined): Film | undefined {
  if (!id) {
    throw new Error('Invalid id.');
  }
  const movie = FILMS.find((currentMovie) => currentMovie.id === id);
  return movie ?? undefined;
}
