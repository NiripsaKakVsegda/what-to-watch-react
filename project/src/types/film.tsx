import { Duration } from './duration';
import { Comment } from './comment';

export type Film = {
  name: string;
  genre: string;
  year: number;
  director: string;
  actors: string[];
  duration: Duration;
  description: string;
  path: string;
  posterPath: string;
  backgroundPath: string;
  reviews: Comment[];
  similarMovies: Film[];
}
