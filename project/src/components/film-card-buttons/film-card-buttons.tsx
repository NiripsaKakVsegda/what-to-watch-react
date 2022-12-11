import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import InListButton from '../in-list-button/in-list-button';
import {useAppSelector} from '../../hooks';

type Props = {
  filmCardCount: number;
  isInList?: boolean;
  addReview?: boolean;
}

const FilmCardButtons: FC<Props> = (props) => {
  const { filmCardCount, addReview, isInList } = props;
  const { mainMovieId } = useAppSelector((state) => state);
  const { id } = useParams();
  const movieId = id ?? mainMovieId;

  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <Link to={`/player/${movieId}`} style={{textDecoration: 'none', color: 'inherit'}}>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </Link>
      </button>
      <button className="btn btn--list film-card__button" type="button">
        <InListButton isInList={isInList}/>
        <span>My list</span>
        <span className="film-card__count">{filmCardCount}</span>
      </button>
      {addReview ? <Link to={`/films/${movieId}/review`} className="btn film-card__button">Add review</Link> : null}
    </div>
  );
};

export default FilmCardButtons;
