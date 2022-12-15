import { FC, useEffect, useState } from 'react';
import Movie from '../../components/movie/movie';
import GenreLink from '../../components/genre-link/genre-link';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ShowMore from '../../components/show-more/show-more';
import {resetMoviePage} from '../../store/action';

type Props = {
  filmCount: number;
  isInList?: boolean;
}

const MainPage: FC<Props> = (props) => {
  const [, setActiveMovie] = useState<number | null>(null);
  const { filmCount, isInList } = props;

  const { currentMovies, moviesCount, movies, mainMovieId, allGenres } = useAppSelector((state) => state);
  const movie = movies[mainMovieId - 1];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetMoviePage());
  }, [dispatch]);

  const { name, backgroundImage, posterImage, genre, released } = movie;
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo/>
          <UserBlock/>
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
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
            {allGenres.map((g) => <GenreLink genre={g} key={`genre-${g.replace(/\s/g, '')}`}/>)}
          </ul>
          <div className="catalog__films-list">
            {currentMovies.slice(0, moviesCount).map((currentMovie) =>
              (
                <Movie key={currentMovie.id} setActiveMovie={setActiveMovie} movie={currentMovie}/>
              ))}
          </div>
          {currentMovies.length > moviesCount && <ShowMore/>}
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default MainPage;
