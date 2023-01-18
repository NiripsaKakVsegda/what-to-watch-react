import { FC, memo } from 'react';
import FilmCardButtons from '../film-card-buttons/film-card-buttons';

type Props = {
  name: string;
  genre: string;
  released: number;
  addReview?: boolean;
}

const MovieInfo: FC<Props> = (props) => {
  const { name, genre, released, addReview } = props;

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{released}</span>
      </p>
      <FilmCardButtons addReview={addReview}/>
    </div>
  );
};

export default memo(MovieInfo);
