import {createAction} from '@reduxjs/toolkit';
import {Genre} from '../types/genre.enum';

export const changeGenre = createAction(
  'movies/changeGenre',
  (genre: Genre) => ({payload: genre})
);
export const updateMoviesByGenre = createAction('movies/updateMovies');
export const showMore = createAction('movies/showMore');
export const resetShowMore = createAction('movies/resetShowMore');
export const resetMoviePage = createAction('movies/resetPage');
