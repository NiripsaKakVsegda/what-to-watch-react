import { UserReview } from '../types/user-review';

export function getRatingString(rate: number) {
  if (rate > 9.5) {
    return 'Excellent';
  } else if (rate <= 9.5 && rate > 7) {
    return 'Very good';
  } else if (rate <= 7 && rate > 5.5) {
    return 'Not good enough';
  } else if (rate <= 5.5 && rate > 2) {
    return 'Bad';
  } else {
    return 'Awful';
  }
}

export function getRating(reviews: UserReview[]) {
  return reviews
    .map((review) => review.rating)
    .reduce((prevValue, currentValue) => prevValue + currentValue) / reviews.length;
}
