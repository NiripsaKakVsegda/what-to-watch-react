import { FC } from 'react';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import Footer from '../../components/footer/footer';
import Movie from '../../components/movie/movie';
import { Film } from '../../types/film';

type Props = {
  myMovies: Film[];
}

const MyListPage: FC<Props> = (props) => {
  const {myMovies} = props;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{myMovies.length}</span></h1>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {myMovies.map((movie) => <Movie movie={movie} key={`movie-${movie.name.replace(/\s/g, '')}`}/>)}
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default MyListPage;
