import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../types/genre.enum';
import { Film } from '../types/film';
import { AuthStatus } from '../types/auth-status.enum';

export const changeGenre = createAction<Genre>('movies/changeGenre');

export const updateMoviesByGenre = createAction('movies/updateMovies');

export const showMore = createAction('movies/showMore');

export const resetShowMore = createAction('movies/resetShowMore');

export const resetMoviePage = createAction('movies/resetPage');

export const loadMovies = createAction<Film[]>('data/loadMovies');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('movies/setError');
