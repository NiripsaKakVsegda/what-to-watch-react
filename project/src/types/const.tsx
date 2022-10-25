import { MovieInfo } from './movie-info';
import { ReviewInfo } from './review-info';

const movies: MovieInfo[] = [
  {
    path: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    name: 'Fantastic Beasts: The Crimes of Grindelwald'
  },
  {
    path: 'img/bohemian-rhapsody.jpg',
    name: 'Bohemian Rhapsody'
  },
  {
    path: 'img/macbeth.jpg',
    name: 'Macbeth'
  },
  {
    path: 'img/aviator.jpg',
    name: 'Aviator'
  },
  {
    path: 'img/we-need-to-talk-about-kevin.jpg',
    name: 'We need to talk about Kevin'
  },
  {
    path: 'img/what-we-do-in-the-shadows.jpg',
    name: 'What We Do in the Shadows'
  },
  {
    path: 'img/revenant.jpg',
    name: 'Revenant'
  },
  {
    path: 'img/johnny-english.jpg',
    name:'Johnny English'
  },
  {
    path: 'img/shutter-island.jpg',
    name: 'Shutter Island'
  },
  {
    path: 'img/pulp-fiction.jpg',
    name: 'Pulp Fiction'
  },
  {
    path: 'img/no-country-for-old-men.jpg',
    name: 'No Country for Old Men'
  },
  {
    path: 'img/snatch.jpg',
    name: 'Snatch'
  },
  {
    path: 'img/moonrise-kingdom.jpg',
    name: 'Moonrise Kingdom'
  },
  {
    path: 'img/seven-years-in-tibet.jpg',
    name: 'Seven Years in Tibet'
  },
  {
    path: 'img/midnight-special.jpg',
    name: 'Midnight Special'
  },
  {
    path: 'img/war-of-the-worlds.jpg',
    name: 'War of the Worlds'
  },
  {
    path: 'img/dardjeeling-limited.jpg',
    name: 'Dardjeeling Limited'
  },
  {
    path: 'img/orlando.jpg',
    name: 'Orlando'
  },
  {
    path: 'img/mindhunter.jpg',
    name: 'Mindhunter'
  }
];

const actors = [
  'Jhun Li',
  'Samanta Klee',
  'Zhin Xiao'
];

const reviewsForFilm: ReviewInfo[] = [
  {
    text: 'Awesome film!',
    author: 'niripsa',
    date: new Date(2022, 10, 10),
    rating: 9.8,
  },
  {
    text: 'Awful film!',
    author: 'gongon',
    date: new Date(2022, 10, 11),
    rating: 2.1,
  },
  {
    text: 'Bruh...',
    author: 'notahuman',
    date: new Date(2022, 10, 12),
    rating: 4.7,
  }
];

export const Const = {
  name: 'В саду, где сверкают светлячки',
  genre: 'Аниме',
  year: 2019,
  director: 'Brian Adama',
  actors: actors,
  posterPath: 'img/the-grand-budapest-hotel-poster.jpg',
  backgroundPath: 'img/bg-the-grand-budapest-hotel.jpg',
  filmCount: 5,
  isInList: false,
  movies: movies,
  myMovies: movies.slice(0, 5),
  similarMovies: movies.slice(5),
  duration: {
    hours: 2,
    minutes: 7,
    seconds: 24
  },
  reviewsInfo: reviewsForFilm,
  aboutFilm: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
  playerName: 'Transpotting'
};
