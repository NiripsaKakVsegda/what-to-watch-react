import { AnyAction } from '@reduxjs/toolkit';
import { To } from 'history';
import { Middleware } from 'redux';
import { reducer } from '../reducer';
import browserHistory from '../../browser-history';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> = (_store) => (next) => (action: AnyAction) => {
  if (action.type === 'movies/redirectToRoute') {
    browserHistory.push(action.payload as To);
  }
  return next(action);
};
