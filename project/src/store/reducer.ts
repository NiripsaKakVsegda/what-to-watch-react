import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  loadComments,
  loadMovie,
  loadMovies, loadPromoMovie,
  loadSimilarMovies,
  requireAuthorization,
  resetMoviePage,
  resetShowMore,
  setDataLoadedStatus,
  showMore,
  updateMoviesByGenre
} from './action';
import {Film} from '../types/film';
import {AuthStatus} from '../types/auth-status.enum';
import {UserReview} from '../types/user-review';
import {Loading} from '../types/loading.enum';
import {MockFilm} from '../common/mock';

const MOVIE_COUNT_STEP = 8;

type InitialState = {
  genre: string;
  allGenres: string[];
  movies: Film[];
  currentMovies: Film[];
  similarMovies: Film[];
  currentMovie: Film;
  promoMovie: Film;
  moviesCount: number;
  isMoviesLoading: boolean;
  isMovieLoading: boolean;
  isCommentsLoading: boolean;
  isSimilarMoviesLoading: boolean;
  isPromoMovieLoading: boolean;
  authStatus: AuthStatus;
  comments: UserReview[];
}

const initialState: InitialState = {
  genre: 'All genres',
  allGenres: ['All genres'],
  similarMovies: [],
  currentMovie: MockFilm,
  movies: [],
  currentMovies: [],
  promoMovie: MockFilm,
  moviesCount: MOVIE_COUNT_STEP,
  isMoviesLoading: false,
  isMovieLoading: false,
  isCommentsLoading: false,
  isSimilarMoviesLoading: false,
  isPromoMovieLoading: false,
  authStatus: AuthStatus.UNKNOWN,
  comments: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(updateMoviesByGenre, (state) => {
      if (state.genre === 'All genres') {
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
      state.genre = initialState.genre;
      state.similarMovies = initialState.similarMovies;
      state.currentMovie = initialState.currentMovie;
      state.currentMovies = state.movies;
      state.moviesCount = initialState.moviesCount;
      state.comments = initialState.comments;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      const { loadType, isLoading } = action.payload;
      switch (loadType){
        case Loading.MOVIES:
          state.isMoviesLoading = isLoading;
          return;
        case Loading.MOVIE:
          state.isMovieLoading = isLoading;
          return;
        case Loading.COMMENTS:
          state.isCommentsLoading = isLoading;
          return;
        case Loading.SIMILAR:
          state.isSimilarMoviesLoading = isLoading;
          return;
        case Loading.PROMO:
          state.isPromoMovieLoading = isLoading;
          return;
      }
    })
    .addCase(loadMovies, (state, action) => {
      state.movies = action.payload;
      state.currentMovies = action.payload;
      const genresSet = new Set(action.payload.map((movie) => movie.genre));
      state.allGenres = [...initialState.allGenres, ...genresSet];
    })
    .addCase(loadMovie, (state, action) => {
      state.currentMovie = action.payload;
    })
    .addCase(loadPromoMovie, (state, action) => {
      state.promoMovie = action.payload;
    })
    .addCase(loadSimilarMovies, (state, action) => {
      state.similarMovies = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    });
});

export {reducer};
