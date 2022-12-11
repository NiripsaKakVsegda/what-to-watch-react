import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  loadMovies, requireAuthorization,
  resetMoviePage,
  resetShowMore,
  setDataLoadedStatus, setError,
  showMore,
  updateMoviesByGenre
} from './action';
import {Genre} from '../types/genre.enum';
import {Film} from '../types/film';
import {AuthStatus} from '../types/auth-status.enum';

const MOVIE_COUNT_STEP = 8;
const MOVIES_COUNT = 25;

type InitialState = {
  genre: Genre;
  movies: Film[];
  currentMovies: Film[];
  moviesCount: number;
  isDataLoaded: boolean;
  authStatus: AuthStatus;
  error: string | null;
  mainMovieId: number;
}

const initialState: InitialState = {
  genre: Genre.ALL_GENRES,
  movies: [],
  currentMovies: [],
  moviesCount: MOVIE_COUNT_STEP,
  isDataLoaded: false,
  authStatus: AuthStatus.UNKNOWN,
  error: null,
  mainMovieId: Math.floor(Math.random() * MOVIES_COUNT) + 1
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(updateMoviesByGenre, (state) => {
      if (state.genre === Genre.ALL_GENRES) {
        state.currentMovies = state.movies;
      } else {
        state.currentMovies = state.movies.filter((film) => film.genre === state.genre);
      }
    })
    .addCase(showMore, (state) => {
      state.moviesCount += MOVIE_COUNT_STEP;
    })
    .addCase(resetShowMore, (state) => {
      state.moviesCount = initialState.moviesCount;
    })
    .addCase(resetMoviePage, (state) => {
      state.currentMovies = state.movies;
      state.moviesCount = initialState.moviesCount;
      state.genre = initialState.genre;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(loadMovies, (state, action) => {
      state.movies = action.payload;
      state.currentMovies = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
