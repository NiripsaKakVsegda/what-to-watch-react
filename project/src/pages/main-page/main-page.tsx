import { FC } from 'react';
import Movie from '../../components/movie/movie';
import GenreLink from '../../components/genre-link/genre-link';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';
import { Genre } from '../../types/genres';
import { Consts } from '../../types/consts';

const MainPage: FC = () => {
  const {name, genre, year, backgroundPath, posterPath, movies, filmCount, isInList} = Consts;
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
            {Object.keys(Genre).map((g) => <GenreLink genre={g} key={`genre-${g.replace(/\s/g, '')}`}/>)}
          </ul>

          <div className="catalog__films-list">
            {movies.map((movie) => <Movie path={movie.path} name={movie.name} key={`movie-${movie.name}`}/>)}
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
