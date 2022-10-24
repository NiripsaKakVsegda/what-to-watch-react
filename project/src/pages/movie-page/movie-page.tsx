import { FC } from 'react';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import Movie from '../../components/movie/movie';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';
import Overview from '../../components/overview/overview';
import Details from '../../components/details/details';
import Reviews from '../../components/reviews/reviews';
import { ReviewInfo } from '../../types/review-info';
import { MovieInfo } from '../../types/movie-info';

export enum MoviePageType {
  OverviewPage,
  DetailsPage,
  ReviewsPage
}

export type Props = {
  backgroundPath: string;
  posterPath: string;
  name: string;
  genre: string;
  year: number;
  filmCount: number;
  similarMovies: MovieInfo[];
  isInList: boolean;
  moviePageType: MoviePageType;
  director: string;
  actors: string[];
  duration: number;
  reviewsInfo: ReviewInfo[];
  rating: number;
  ratingLevel: string;
  ratingCount: number;
  aboutFilm: string;
}

const MoviePage: FC<Props> = (props) => {
  const {backgroundPath, posterPath, name, genre, year, filmCount, similarMovies, isInList,
    moviePageType, director, actors, duration, reviewsInfo, rating, ratingLevel, ratingCount, aboutFilm} = props;
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundPath} alt={name}/>
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
                <span className="film-card__year">{year}</span>
              </p>
              <FilmCardButtons filmCardCount={filmCount} isInList={isInList} addReview/>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterPath} alt={`${name} poster`} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className={`film-nav__item${moviePageType === MoviePageType.OverviewPage ? ' film-nav__item--active' : ''}`}>
                    <a href="/" className="film-nav__link">Overview</a>
                  </li>
                  <li className={`film-nav__item${moviePageType === MoviePageType.DetailsPage ? ' film-nav__item--active' : ''}`}>
                    <a href="/" className="film-nav__link">Details</a>
                  </li>
                  <li className={`film-nav__item${moviePageType === MoviePageType.ReviewsPage ? ' film-nav__item--active' : ''}`}>
                    <a href="/" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              {moviePageType === MoviePageType.OverviewPage ?
                <Overview rating={rating} ratingLevel={ratingLevel} ratingCount={ratingCount} aboutFilm={aboutFilm}
                  director={director} actors={actors}
                /> : null}
              {moviePageType === MoviePageType.DetailsPage ?
                <Details director={director} actors={actors} duration={duration} genre={genre} year={year}/> : null}
              {moviePageType === MoviePageType.ReviewsPage ? <Reviews reviews={reviewsInfo}/> : null}

            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {similarMovies.slice(3).map((movie) => <Movie path={movie.path} name={movie.name} key={`movie-${movie.name}`}/>)}
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
};

export default MoviePage;
