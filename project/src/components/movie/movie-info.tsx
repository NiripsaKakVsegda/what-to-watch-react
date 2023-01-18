import {FC, memo} from "react";
import FilmCardButtons from "../film-card-buttons/film-card-buttons";

type Props = {
  name: string;
  genre: string;
  released: number;
  filmCount: number;
  isInList: boolean | undefined;
  addReview?: boolean;
}

const MovieInfo: FC<Props> = (props) => {
  const {name, genre, released, filmCount, isInList, addReview} = props;
  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{released}</span>
      </p>
      <FilmCardButtons filmCardCount={filmCount} isInList={isInList} addReview={addReview}/>
    </div>
  );
};

export default memo(MovieInfo);
