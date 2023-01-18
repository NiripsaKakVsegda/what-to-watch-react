import { FC, useEffect, useState } from 'react';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import Movie from '../../components/movie/movie';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';
import Overview from '../../components/tabs/overview/overview';
import Details from '../../components/tabs/details/details';
import Reviews from '../../components/tabs/reviews/reviews';
import { MoviePageType } from '../../types/movie-page.enum';
import PageNotFound from '../page-not-found/page-not-found';
import { useAppDispatch, useAppSelector } from '../../hooks';
import LoadingScreen from '../loading-screen/loading-screen';
import { useParams } from 'react-router-dom';
import { fetchMovieAction, fetchMovieCommentsAction, fetchSimilarMoviesAction } from '../../store/api-actions';
import { redirectToRoute } from '../../store/action';
import Header from "../../components/header/header";
import MovieInfo from "../../components/movie/movie-info";
import Navigation from "../../components/tabs/navigation";

export type Props = {
  filmCount: number;
  moviePageType: MoviePageType;
  isInList?: boolean;
}

const MoviePage: FC<Props> = (props) => {
  const { filmCount, moviePageType, isInList } = props;
  const { id } = useParams();
  const dispatch = useAppDispatch();
  if (!id || !parseInt(id, 10)) {
    dispatch(redirectToRoute('/error404'));
  }

  useEffect(() => {
    if (id === undefined) {
      return;
    }
    const movieId = parseInt(id!, 10);
    dispatch(fetchMovieAction({movieId: movieId}));
    dispatch(fetchMovieCommentsAction({movieId: movieId}));
    dispatch(fetchSimilarMoviesAction({movieId: movieId}));
  }, [id, dispatch]);

  const { currentMovie, similarMovies, isMovieLoading, isCommentsLoading, isSimilarMoviesLoading } = useAppSelector((state) => state);

  if (isMovieLoading || isCommentsLoading || isSimilarMoviesLoading) {
    return <LoadingScreen/>;
  }

  if (!currentMovie) {
    return (<PageNotFound></PageNotFound>);
  }
  const { name, released, backgroundImage, posterImage, genre } = currentMovie;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header/>
          <div className="film-card__wrap">
            <MovieInfo name={name} genre={genre} released={released} filmCount={filmCount} isInList={isInList} addReview/>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
            </div>
            <Navigation moviePageType={moviePageType} currentMovie={currentMovie}/>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            {
              similarMovies
                .slice(0, 4)
                .map((m) => <Movie movie={m} key={m.id}/>)
            }
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default MoviePage;
