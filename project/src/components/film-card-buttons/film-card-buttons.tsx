import { FC } from 'react';
import InListButton from '../in-list-button/in-list-button';

type Props = {
  filmCardCount: number;
  isInList?: boolean;
  addReview?: boolean;
}

const FilmCardButtons: FC<Props> = (props) => {
  const {filmCardCount, addReview, isInList} = props;
  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button">
        <InListButton isInList={isInList}/>
        <span>My list</span>
        <span className="film-card__count">{filmCardCount}</span>
      </button>
      {addReview ? <a href="add-review.html" className="btn film-card__button">Add review</a> : null}
    </div>
  );
};

export default FilmCardButtons;
