import {createAction} from '@reduxjs/toolkit';
import {Genre} from '../types/genre.enum';

export const changeGenre = createAction(
  'movies/changeGenre',
  (genre: Genre) => ({payload: genre})
);

export const updateMoviesByGenre = createAction('movies/updateMovies');
