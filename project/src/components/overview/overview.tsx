import { FC } from 'react';
import { Film } from '../../types/film';
import { getRating, getRatingString } from '../../common/rating-functions';

type Props = {
  movie: Film;
}

const Overview: FC<Props> = (props) => {
  const {description, director, actors, reviews} = props.movie;
  const rating = getRating(reviews);
  const ratingLevel = getRatingString(rating);
  const ratingCount = reviews.length;
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingLevel}</span>
          <span className="film-rating__count">{`${ratingCount} ratings`}</span>
        </p>
      </div>
      <div className="film-card__text">
        {<p>{description}</p>}

        <p className="film-card__director"><strong>{`Director: ${director}`}</strong></p>

        <p className="film-card__starring"><strong>{`Starring: ${actors.join(', ')}`}</strong></p>
      </div>
    </>
  );
};

export default Overview;
