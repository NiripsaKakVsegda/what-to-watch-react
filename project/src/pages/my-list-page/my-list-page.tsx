import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import {MovieCardInfo} from '../../index';
import FilmCard from '../../components/film-card/film-card';

type MyListProps = {
  myMovies: MovieCardInfo[];
}

function MyListPage(props: MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        {Logo()}

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{props.myMovies.length}</span></h1>
        {UserBlock()}
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {props.myMovies.map((movie) => FilmCard(movie))}
        </div>
      </section>

      {Footer()}
    </div>
  );
}

export default MyListPage;
