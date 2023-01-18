import {FC, useEffect, useState} from 'react';
import Footer from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetMoviePage } from '../../store/action';
import Header from "../../components/header/header";
import MovieInfo from "../../components/movie/movie-info";
import Genres from "../../components/catalog/genres";
import Movies from "../../components/catalog/movies";

type Props = {
  filmCount: number;
  isInList?: boolean;
}

const MainPage: FC<Props> = (props) => {
  const { filmCount, isInList } = props;
  const [, setActiveMovie] = useState<number | null>(null);

  const { currentMovies, moviesCount, promoMovie, allGenres } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetMoviePage());
  }, [dispatch]);

  const {backgroundImage, name, genre, posterImage, released} = promoMovie;

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header/>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
            </div>
            <MovieInfo name={name} genre={genre} released={released} filmCount={filmCount} isInList={isInList}/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <Genres allGenres={allGenres}/>
          <Movies currentMovies={currentMovies} moviesCount={moviesCount} setActiveMovie={setActiveMovie}/>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default MainPage;
