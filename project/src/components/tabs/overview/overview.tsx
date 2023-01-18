import { FC } from 'react';
import { Film } from '../../../types/film';
import { getRatingString } from '../../../common/common-functions';

type Props = {
  movie: Film;
}

const Overview: FC<Props> = (props) => {
  const { movie } = props;
  const { description, director, starring, rating, scoresCount } = movie;
  const ratingLevel = getRatingString(rating);

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating.toFixed(1)}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingLevel}</span>
          <span className="film-rating__count">{`${scoresCount} ratings`}</span>
        </p>
      </div>
      <div className="film-card__text">
        {<p>{description}</p>}
        <p className="film-card__director"><strong>{`Director: ${director}`}</strong></p>
        <p className="film-card__starring"><strong>{`Starring: ${starring.join(', ')}`}</strong></p>
      </div>
    </>
  );
};

export default Overview;
