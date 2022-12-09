import { FC, useState } from 'react';
import Movie from '../../components/movie/movie';
import GenreLink from '../../components/genre-link/genre-link';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';
import { Genre } from '../../types/genre.enum';
import { findMovieById } from '../../common/find-movie-by-id';
import PageNotFound from '../page-not-found/page-not-found';
import {useAppSelector} from '../../hooks';

type Props = {
  movieId: string;
  filmCount: number;
  isInList?: boolean;
}

const MainPage: FC<Props> = (props) => {
  const [, setActiveMovie] = useState(''); //activeMovie is here
  const { movieId, filmCount, isInList } = props;
  const { movies } = useAppSelector((state) => state);

  const movie = findMovieById(movieId);
  if (!movie) {
    return (<PageNotFound></PageNotFound>);
  }
  const { name, backgroundPath, posterPath, genre, year } = movie;
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundPath} alt={name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo/>
          <UserBlock/>
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterPath} alt={`${name} poster`} width="218" height="327"/>
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{year}</span>
              </p>
              <FilmCardButtons filmCardCount={filmCount} isInList={isInList}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            {Object.values(Genre).map((g) => <GenreLink genre={g} key={`genre-${g.replace(/\s/g, '')}`}/>)}
          </ul>
          <div className="catalog__films-list">
            {movies.map((currentMovie) =>
              (
                <Movie key={currentMovie.id} setActiveMovie={setActiveMovie} movie={currentMovie}/>
              ))}
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default MainPage;
