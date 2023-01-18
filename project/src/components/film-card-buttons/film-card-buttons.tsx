import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import InListButton from '../in-list-button/in-list-button';
import {useAppSelector} from '../../hooks';
import MainPlayButton from "../play-button/main-play-button";

type Props = {
  filmCardCount: number;
  isInList?: boolean;
  addReview?: boolean;
}

const FilmCardButtons: FC<Props> = (props) => {
  const { filmCardCount, addReview, isInList } = props;
  const { promoMovie, authStatus } = useAppSelector((state) => state);
  const { id } = useParams();
  const movieId = id ?? promoMovie!.id;

  return (
    <div className="film-card__buttons">
      <MainPlayButton movieId={movieId}/>
      <InListButton isInList={isInList} filmCardCount={filmCardCount}/>
      {addReview && authStatus === 'auth' && <Link to={`/films/${movieId}/review`} className="btn film-card__button">Add review</Link>}
    </div>
  );
};

export default FilmCardButtons
