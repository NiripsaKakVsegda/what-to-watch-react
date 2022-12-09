import { Duration } from './duration';
import { UserReview } from './user-review';
import {Genre} from "./genre.enum";

export type Film = {
  id: string;
  name: string;
  genre: Genre;
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
}
