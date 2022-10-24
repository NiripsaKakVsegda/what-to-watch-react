import { FC } from 'react';

type Props = {
  rating: number;
  ratingLevel: string;
  ratingCount: number;
  aboutFilm: string;
  director: string;
  actors: string[];
}

const Overview: FC<Props> = (props) => {
  const {rating, ratingLevel, ratingCount, aboutFilm, director, actors} = props;
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
        {<p>{aboutFilm}</p>}

        <p className="film-card__director"><strong>{`Director: ${director}`}</strong></p>

        <p className="film-card__starring"><strong>{`Starring: ${actors.join(', ')}`}</strong></p>
      </div>
    </>
  );
};

export default Overview;
