import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import Movie from '../../components/movie/movie';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';
import Overview from '../../components/overview/overview';
import Details from '../../components/details/details';
import Reviews from '../../components/reviews/reviews';
import { MoviePageType } from '../../types/movie-page.enum';
import { FindMovieById } from '../../common/find-movie-by-id';

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
  const { name, year, backgroundPath, posterPath, reviews, similarMovies, genre } = movie;

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
                  <li className={`film-nav__item${pageType === MoviePageType.OverviewPage ? ' film-nav__item--active' : ''}`}>
                    <div style={{cursor: 'pointer'}} onClick={() => setPageType(MoviePageType.OverviewPage)} className="film-nav__link">Overview</div>
                  </li>
                  <li className={`film-nav__item${pageType === MoviePageType.DetailsPage ? ' film-nav__item--active' : ''}`}>
                    <div style={{cursor: 'pointer'}} onClick={() => setPageType(MoviePageType.DetailsPage)} className="film-nav__link">Details</div>
                  </li>
                  <li className={`film-nav__item${pageType === MoviePageType.ReviewsPage ? ' film-nav__item--active' : ''}`}>
                    <div style={{cursor: 'pointer'}} onClick={() => setPageType(MoviePageType.ReviewsPage)} className="film-nav__link">Reviews</div>
                  </li>
                </ul>
              </nav>
              {pageType === MoviePageType.OverviewPage ? <Overview movie={movie} /> : null}
              {pageType === MoviePageType.DetailsPage ? <Details movie={movie}/> : null}
              {pageType === MoviePageType.ReviewsPage ? <Reviews reviews={reviews}/> : null}
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            {similarMovies.slice(3).map((currentMovie) => <Movie movie={currentMovie} key={currentMovie.id}/>)}
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};

export default MoviePage;
