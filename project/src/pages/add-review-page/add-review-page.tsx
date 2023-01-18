import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReviewForm from '../../components/review/review-form';
import PageNotFound from '../page-not-found/page-not-found';
import { FindMovieById } from '../../common/common-functions';
import Header from "../../components/header/header";

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
        <Header id={id} name={name}/>
        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
        </div>
      </div>
      <div className="add-review">
        <ReviewForm movieId={id}/>
      </div>
    </section>
  );
};

export default AddReviewPage;
