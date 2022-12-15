import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import {
  loadComments,
  loadMovie,
  loadMovies,
  loadSimilarMovies,
  redirectToRoute,
  requireAuthorization,
  setDataLoadedStatus
} from './action';
import { dropToken, saveToken } from '../services/token';
import { AuthStatus } from '../types/auth-status.enum';
import { APIRoute } from '../types/api-route.enum';
import { Film } from '../types/film';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { MovieData } from '../types/movie-data';
import { UserReview } from '../types/user-review';
import { CommentData } from '../types/comment-data';
import { Loading } from '../types/loading.enum';

export const fetchMoviesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchMovies',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>('/films');
    dispatch(setDataLoadedStatus({loadType: Loading.MOVIES, isLoading: true}));
    dispatch(loadMovies(data));
    dispatch(setDataLoadedStatus({loadType: Loading.MOVIES, isLoading: false}));
  },
);

export const fetchSimilarMoviesAction = createAsyncThunk<void, {movieId: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchMovies',
  async ({movieId}, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus({loadType: Loading.SIMILAR, isLoading: true}));
    const {data} = await api.get<Film[]>(`films/${movieId}/similar`);

    console.log('fetch: is loading similar true');
    dispatch(loadSimilarMovies(data));
    dispatch(setDataLoadedStatus({loadType: Loading.SIMILAR, isLoading: false}));
    console.log('fetch: is loading similar false');
  },
);

export const fetchMovieAction = createAsyncThunk<void, {movieId: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchMovie',
  async ({movieId}, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus({loadType: Loading.MOVIE, isLoading: true}));
    const {data} = await api.get<Film>(`films/${movieId}`);

    console.log('fetch: is loading movie true');
    dispatch(loadMovie(data));
    dispatch(setDataLoadedStatus({loadType: Loading.MOVIE, isLoading: false}));
    console.log('fetch: is loading movie false');
  },
);

export const fetchMovieCommentsAction = createAsyncThunk<void, MovieData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchMovieComments',
  async ({movieId}, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus({loadType: Loading.COMMENTS, isLoading: true}));
    const {data} = await api.get<UserReview[]>(`comments/${movieId}`);

    console.log('fetch: is loading comments true');
    dispatch(loadComments(data));
    dispatch(setDataLoadedStatus({loadType: Loading.COMMENTS, isLoading: false}));
    console.log('fetch: is loading comments false');
  },
);

export const addCommentAction = createAsyncThunk<void, CommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/addComment',
  async ({comment, rating, movieId}, {dispatch, extra: api}) => {
    await api.post<{comment: string; rating: number}[]>(`comments/${movieId}`, {comment, rating});
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get('/login');
      dispatch(requireAuthorization(AuthStatus.AUTH));
    } catch {
      dispatch(requireAuthorization(AuthStatus.NO_AUTH));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>('/login', {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthStatus.AUTH));
    dispatch(redirectToRoute('/'));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthStatus.NO_AUTH));
  },
);
