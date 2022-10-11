import FilmCard from '../../components/film-card/film-card';
import GenreLink from '../../components/genre-link/genre-link';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import {MovieCardInfo} from '../../index';
import FilmCardButtons from '../../components/film-card-buttons/film-card-buttons';

type MainPageProps = {
  name: string;
  genre: string;
  year: number;
  backgroundPath: string;
  posterPath: string;
  allGenres: string[];
  movies: MovieCardInfo[];
  filmCount: number;
  isInList: boolean;
}

function MainPage(props: MainPageProps): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={props.backgroundPath} alt={props.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          {Logo()}

          {UserBlock()}
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={props.posterPath} alt={`${props.name} poster`} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{props.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.genre}</span>
                <span className="film-card__year">{props.year}</span>
              </p>

              {FilmCardButtons(props.filmCount, props.isInList)}
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {props.allGenres.map((g) => GenreLink(g))}
          </ul>

          <div className="catalog__films-list">
            {props.movies.map((movie) => FilmCard(movie))}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        {Footer()}
      </div>
    </>
  );
}

export default MainPage;
