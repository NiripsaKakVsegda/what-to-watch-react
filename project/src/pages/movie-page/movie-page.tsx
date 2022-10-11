import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import {MovieCardInfo} from '../../index';
import FilmCard from '../../components/film-card/film-card';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';
import Overview, {OverviewProps} from '../../components/overview/overview';
import Details, {DetailsProps} from '../../components/details/details';
import {ReviewInfo} from '../../components/review/review';
import Reviews from '../../components/reviews/reviews';

export enum MoviePageType {
  OverviewPage,
  DetailsPage,
  ReviewsPage
}

export type MoviePageProps = {
  backgroundPath: string;
  posterPath: string;
  name: string;
  genre: string;
  year: number;
  filmCount: number;
  similarMovies: MovieCardInfo[];
  isInList: boolean;
  moviePageType: MoviePageType;
  detailsProps: DetailsProps;
  reviewsInfo: ReviewInfo[];
  overviewProps: OverviewProps;
}

function MoviePage(props: MoviePageProps): JSX.Element {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={props.backgroundPath} alt={props.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            {Logo()}

            {UserBlock()}
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{props.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.genre}</span>
                <span className="film-card__year">{props.year}</span>
              </p>

              {FilmCardButtons(props.filmCount, props.isInList, true)}
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={props.posterPath} alt={`${props.name} poster`} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className={`film-nav__item${props.moviePageType === MoviePageType.OverviewPage ? ' film-nav__item--active' : ''}`}>
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className={`film-nav__item${props.moviePageType === MoviePageType.DetailsPage ? ' film-nav__item--active' : ''}`}>
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className={`film-nav__item${props.moviePageType === MoviePageType.ReviewsPage ? ' film-nav__item--active' : ''}`}>
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              {props.moviePageType === MoviePageType.OverviewPage ? Overview(props.overviewProps) : null}
              {props.moviePageType === MoviePageType.DetailsPage ? Details(props.detailsProps) : null}
              {props.moviePageType === MoviePageType.ReviewsPage ? Reviews(props.reviewsInfo) : null}

            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            {props.similarMovies.slice(3).map((movie) => FilmCard(movie))}
          </div>
        </section>

        {Footer()}
      </div>
    </>
  );
}

export default MoviePage;
