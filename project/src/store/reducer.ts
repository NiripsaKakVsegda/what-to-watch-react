import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, updateMoviesByGenre} from './action';
import {FILMS} from '../mocks/films';
import {Genre} from '../types/genre.enum';

const initialState = {
  genre: Genre.ALL_GENRES,
  movies: FILMS
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
    });
});

export {reducer};
