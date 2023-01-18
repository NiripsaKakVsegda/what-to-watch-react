import { AuthStatus } from '../types/auth-status.enum';
import { Film } from '../types/film';
import { useAppSelector } from '../hooks';
import { UserReview } from '../types/user-review';
import { Duration } from '../types/duration';

export const isCheckedAuth = (authStatus: AuthStatus): boolean =>
  authStatus === AuthStatus.UNKNOWN;

export const FindMovieById = (id: string | undefined): Film | undefined => {
  const { movies } = useAppSelector((state) => state);
  if (!id || !parseInt(id, 10)) {
    return undefined;
  }
  const parsedId = parseInt(id, 10);
  const movie = movies.find((currentMovie) => currentMovie.id === parsedId);

  return movie ?? undefined;
};

export const getRating = (reviews: UserReview[]): number =>
  reviews
    .map((review) => review.rating)
    .reduce((prevValue, currentValue) =>
      prevValue + currentValue) / reviews.length;

export const getRatingString = (rate: number): string => {
  switch (true) {
    case rate === 10:
      return 'Awesome';
    case rate < 10 && rate >= 8:
      return 'Very good';
    case rate < 8 && rate >= 5:
      return 'Good';
    case rate < 5 && rate >= 3:
      return 'Normal';
    default:
      return 'Bad';
  }
};

export const getDuration = (duration: number): Duration => {
  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;
  return {
    hours: hours,
    minutes: minutes
  };
};

export const getDate = (date: string): string => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
