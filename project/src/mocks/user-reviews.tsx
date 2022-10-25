import { UserReview } from '../types/user-review';

export const ReviewsForFilm: UserReview[] = [
  {
    text: 'Awesome film!',
    author: 'niripsa',
    date: new Date(2020, 10, 10),
    rating: 9.8,
  },
  {
    text: 'Awful film!',
    author: 'gongon',
    date: new Date(2021, 10, 11),
    rating: 2.1,
  },
  {
    text: 'Bruh...',
    author: 'notahuman',
    date: new Date(2022, 10, 12),
    rating: 4.7,
  }
];
