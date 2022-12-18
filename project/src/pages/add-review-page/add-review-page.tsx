import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import UserBlock from '../../components/user-block/user-block';
import Form from '../../components/form/form';
import PageNotFound from '../page-not-found/page-not-found';
import { FindMovieById } from '../../common/common-functions';

const AddReviewPage: FC = () => {
  const { id } = useParams();
  const movie = FindMovieById(id);

  if (!movie || !id) {
    return (<PageNotFound></PageNotFound>);
  }
  const { backgroundImage, name, posterImage } = movie;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${movie.id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`/films/${movie.id}/review`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
          <UserBlock/>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
        </div>
      </div>
      <div className="add-review">
        <Form movieId={id}/>
      </div>
    </section>
  );
};

export default AddReviewPage;
