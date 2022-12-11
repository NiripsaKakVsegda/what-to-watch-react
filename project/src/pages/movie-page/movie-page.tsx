import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import Movie from '../../components/movie/movie';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';
import Overview from '../../components/tabs/overview/overview';
import Details from '../../components/tabs/details/details';
import Reviews from '../../components/tabs/reviews/reviews';
import { MoviePageType } from '../../types/movie-page.enum';
import { FindMovieById } from '../../common/common-functions';
import PageNotFound from '../page-not-found/page-not-found';
import {useAppSelector} from "../../hooks";

export type Props = {
  filmCount: number;
  moviePageType: MoviePageType;
  isInList?: boolean;
}

const MoviePage: FC<Props> = (props) => {
  const { filmCount, moviePageType, isInList } = props;
  const { id } = useParams();
  const [pageType, setPageType] = useState(moviePageType);
  const movie = FindMovieById(id);
  if (!movie) {
    return (<PageNotFound></PageNotFound>);
  }
  const { name, released, backgroundImage, posterImage, genre } = movie;
  const movieId = movie.id;

  const { movies } = useAppSelector((state) => state);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo/>
            <UserBlock/>
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>
              <FilmCardButtons filmCardCount={filmCount} isInList={isInList} addReview/>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218"
                height="327"
              />
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  {
                    Object.values(MoviePageType).map((currentPageType) =>
                      (
                        <li key={currentPageType} className={`film-nav__item${pageType === currentPageType ? ' film-nav__item--active' : ''}`}>
                          <div style={{cursor: 'pointer'}} onClick={() => setPageType(currentPageType)} className="film-nav__link">{currentPageType}</div>
                        </li>
                      )
                    )
                  }
                </ul>
              </nav>
              {pageType === MoviePageType.OverviewPage && <Overview movie={movie} />}
              {pageType === MoviePageType.DetailsPage && <Details movie={movie}/>}
              {pageType === MoviePageType.ReviewsPage && <Reviews movieId={movie.id}/>}
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            {
              movies
                .filter((film) => film.genre === genre && film.id !== movieId)
                .slice(0, 4)
                .map((currentMovie) => <Movie movie={currentMovie} key={currentMovie.id}/>)
            }
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default MoviePage;
