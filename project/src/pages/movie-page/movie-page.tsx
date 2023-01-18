import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { redirectToRoute } from '../../store/action';
import { fetchMovieAction, fetchMovieCommentsAction, fetchSimilarMoviesAction } from '../../store/api-actions';
import Footer from '../../components/footer/footer';
import Movie from '../../components/movie/movie';
import PageNotFound from '../page-not-found/page-not-found';
import LoadingScreen from '../loading-screen/loading-screen';
import Header from '../../components/header/header';
import MovieInfo from '../../components/movie/movie-info';
import Navigation from '../../components/tabs/navigation';

const MoviePage: FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  if (!id || !parseInt(id, 10)) {
    dispatch(redirectToRoute('/error404'));
  }

  useEffect(() => {
    if (id === undefined) {
      return;
    }

    const movieId = parseInt(id, 10);
    dispatch(fetchMovieAction({movieId: movieId}));
    dispatch(fetchMovieCommentsAction({movieId: movieId}));
    dispatch(fetchSimilarMoviesAction({movieId: movieId}));
  }, [id, dispatch]);

  const {
    currentMovie,
    similarMovies,
    isMovieLoading,
    isCommentsLoading,
    isSimilarMoviesLoading
  } = useAppSelector((state) => state);

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
            <MovieInfo name={name} genre={genre} released={released} addReview/>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
            </div>
            <Navigation currentMovie={currentMovie}/>
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
