import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, resetMoviePage, resetShowMore, showMore, updateMoviesByGenre} from './action';
import {FILMS} from '../mocks/films';
import {Genre} from '../types/genre.enum';

const initialState = {
  genre: Genre.ALL_GENRES,
  movies: FILMS,
  moviesCount: 8
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(updateMoviesByGenre, (state) => {
      if (state.genre === Genre.ALL_GENRES) {
        state.movies = FILMS;
      } else {
        state.movies = FILMS.filter((film) => film.genre === state.genre);
      }
    })
    .addCase(showMore, (state) => {
      state.moviesCount += 8;
    })
    .addCase(resetShowMore, (state) => {
      state.moviesCount = initialState.moviesCount;
    })
    .addCase(resetMoviePage, (state) => {
      state.movies = initialState.movies;
      state.moviesCount = initialState.moviesCount;
      state.genre = initialState.genre;
    });
});

export {reducer};
