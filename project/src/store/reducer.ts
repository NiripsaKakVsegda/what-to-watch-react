import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  loadComments,
  loadMovie,
  loadMovies,
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

const MOVIE_COUNT_STEP = 8;
const MOVIES_COUNT = 25;
const getRandomMovieId = () => Math.floor(Math.random() * MOVIES_COUNT) + 1;

type InitialState = {
  genre: string;
  allGenres: string[];
  movies: Film[];
  currentMovies: Film[];
  similarMovies: Film[];
  currentMovie: Film | null;
  moviesCount: number;
  isMoviesLoading: boolean;
  isMovieLoading: boolean;
  isCommentsLoading: boolean;
  isSimilarMoviesLoading: boolean;
  authStatus: AuthStatus;
  mainMovieId: number;
  comments: UserReview[];
}

const initialState: InitialState = {
  genre: 'All genres',
  allGenres: ['All genres'],
  similarMovies: [],
  currentMovie: null,
  movies: [],
  currentMovies: [],
  moviesCount: MOVIE_COUNT_STEP,
  isMoviesLoading: false,
  isMovieLoading: false,
  isCommentsLoading: false,
  isSimilarMoviesLoading: false,
  authStatus: AuthStatus.UNKNOWN,
  mainMovieId: getRandomMovieId(),
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
      state.mainMovieId = getRandomMovieId();
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
      console.log('loaded movie');
    })
    .addCase(loadSimilarMovies, (state, action) => {
      state.similarMovies = action.payload;
      console.log('loaded similar');
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
      console.log('loaded comments');
    });
});

export {reducer};
