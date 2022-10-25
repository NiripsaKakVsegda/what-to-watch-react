import { Film } from './film';
import { Comment } from './comment';
import { Duration } from './duration';

const actors = [
  'Jhun Li',
  'Samanta Klee',
  'Zhin Xiao'
];
const reviewsForFilm: Comment[] = [
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
const genre = 'Comedy';
const year = 2022;
const director = 'Lorem Ipsum';
const duration: Duration = {
  hours: 1,
  minutes: 17,
  seconds: 24
};
const description = 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum';
const posterPath = 'img/the-grand-budapest-hotel-poster.jpg';
const backgroundPath = 'img/bg-the-grand-budapest-hotel.jpg';

export const Films: Film[] = [
  {
    name: 'Bohemian Rhapsody',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/bohemian-rhapsody.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  },
  {
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  },
  {
    name: 'Macbeth',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/macbeth.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  },
  {
    name: 'Aviator',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/aviator.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  },
  {
    name: 'We need to talk about Kevin',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/we-need-to-talk-about-kevin.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  },
  {
    name: 'What We Do in the Shadows',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/what-we-do-in-the-shadows.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  },
  {
    name: 'Revenant',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/revenant.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  },
  {
    name:'Johnny English',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/johnny-english.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  },
  {
    name: 'Shutter Island',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/shutter-island.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  },
  {
    name: 'Pulp Fiction',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/pulp-fiction.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  },
  {
    name: 'No Country for Old Men',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/no-country-for-old-men.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  },
  {
    name: 'Snatch',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/snatch.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  },
  {
    name: 'Moonrise Kingdom',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/moonrise-kingdom.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  },
  {
    name: 'Seven Years in Tibet',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/seven-years-in-tibet.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  },
  {
    name: 'Midnight Special',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/midnight-special.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  },
  {
    name: 'War of the Worlds',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/war-of-the-worlds.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  },
  {
    name: 'Dardjeeling Limited',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/dardjeeling-limited.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  },
  {
    name: 'Orlando',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/orlando.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  },
  {
    name: 'Mindhunter',
    genre: genre,
    year: year,
    director: director,
    actors: actors,
    duration: duration,
    description: description,
    path: 'img/mindhunter.jpg',
    posterPath: posterPath,
    backgroundPath: backgroundPath,
    reviews: reviewsForFilm,
    similarMovies: []
  }
];

