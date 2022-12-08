import { Duration } from './duration';
import { UserReview } from './user-review';

export type Film = {
  id: string;
  name: string;
  genre: string;
  year: number;
  director: string;
  actors: string[];
  duration: Duration;
  description: string;
  videoPath: string;
  cardPath: string;
  posterPath: string;
  backgroundPath: string;
  reviews: UserReview[];
  similarMovies: Film[];
}
