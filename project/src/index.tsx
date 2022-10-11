import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const name = 'В саду, где сверкают светлячки';
const genre = 'Аниме';
const year = 2019;
const genres = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers'
];
export type MovieCardInfo = {
  path: string;
  name: string;
}
const movies: MovieCardInfo[] = [
  {
    path: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    name: 'Fantastic Beasts: The Crimes of Grindelwald'
  },
  {
    path: 'img/bohemian-rhapsody.jpg',
    name: 'Bohemian Rhapsody'
  },
  {
    path: 'img/macbeth.jpg',
    name: 'Macbeth'
  },
  {
    path: 'img/aviator.jpg',
    name: 'Aviator'
  },
  {
    path: 'img/we-need-to-talk-about-kevin.jpg',
    name: 'We need to talk about Kevin'
  },
  {
    path: 'img/what-we-do-in-the-shadows.jpg',
    name: 'What We Do in the Shadows'
  },
  {
    path: 'img/revenant.jpg',
    name: 'Revenant'
  },
  {
    path: 'img/johnny-english.jpg',
    name:'Johnny English'
  },
  {
    path: 'img/shutter-island.jpg',
    name: 'Shutter Island'
  },
  {
    path: 'img/pulp-fiction.jpg',
    name: 'Pulp Fiction'
  },
  {
    path: 'img/no-country-for-old-men.jpg',
    name: 'No Country for Old Men'
  },
  {
    path: 'img/snatch.jpg',
    name: 'Snatch'
  },
  {
    path: 'img/moonrise-kingdom.jpg',
    name: 'Moonrise Kingdom'
  },
  {
    path: 'img/seven-years-in-tibet.jpg',
    name: 'Seven Years in Tibet'
  },
  {
    path: 'img/midnight-special.jpg',
    name: 'Midnight Special'
  },
  {
    path: 'img/war-of-the-worlds.jpg',
    name: 'War of the Worlds'
  },
  {
    path: 'img/dardjeeling-limited.jpg',
    name: 'Dardjeeling Limited'
  },
  {
    path: 'img/orlando.jpg',
    name: 'Orlando'
  },
  {
    path: 'img/mindhunter.jpg',
    name: 'Mindhunter'
  },
  {
    path: 'img/midnight-special.jpg',
    name: 'Midnight Special'
  }
];

const posterPath = 'img/the-grand-budapest-hotel-poster.jpg';
const backgroundPath = 'img/bg-the-grand-budapest-hotel.jpg';
const filmCount = 9;
const isInList = false;

root.render(
  <React.StrictMode>
    <App name={name} genre={genre} year={year} allGenres={genres} movies={movies} backgroundPath={backgroundPath} posterPath={posterPath} filmCount={filmCount} isInList={isInList}/>
  </React.StrictMode>,
);

