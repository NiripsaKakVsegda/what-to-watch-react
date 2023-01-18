import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { AuthStatus } from '../types/auth-status.enum';
import { UserReview } from '../types/user-review';
import { DataLoadType } from '../types/data-load';

export const changeGenre = createAction<string>('movies/changeGenre');

export const updateMoviesByGenre = createAction('movies/updateMovies');

export const showMore = createAction('movies/showMore');

export const resetShowMore = createAction('movies/resetShowMore');

export const resetMoviePage = createAction('movies/resetPage');

export const loadMovies = createAction<Film[]>('data/loadMovies');
export const loadMovie = createAction<Film>('data/loadMovie');
export const loadPromoMovie = createAction<Film>('data/loadPromoMovie');
export const loadSimilarMovies = createAction<Film[]>('data/loadSimilarMovies');
export const loadComments = createAction<UserReview[]>('data/loadComments');
export const setDataLoadedStatus = createAction<DataLoadType>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<string>('movies/redirectToRoute');

export const getMyMovies = createAction<Film[]>('user/favorite');

export const userLogout = createAction('user/logout');
