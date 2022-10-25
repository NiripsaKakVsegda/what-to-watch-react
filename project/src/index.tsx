import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Films } from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App movieId={Films[0].id} allMovies={Films.slice(1)} myMovies={[]}/>
  </React.StrictMode>,
);
