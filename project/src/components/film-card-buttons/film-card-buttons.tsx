import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import InListButton from '../in-list-button/in-list-button';
import MainPlayButton from '../play-button/main-play-button';
import { useAppSelector } from '../../hooks';

type Props = {
  addReview?: boolean;
}

const FilmCardButtons: FC<Props> = (props) => {
  const { addReview } = props;
  const { promoMovie, authStatus } = useAppSelector((state) => state);
  const { id } = useParams();
  const movieId = id ?? promoMovie.id;

  return (
    <div className="film-card__buttons">
      <MainPlayButton movieId={movieId}/>
      <InListButton movieId={typeof movieId === 'string' ? parseInt(movieId, 10) : movieId}/>
      {addReview && authStatus === 'auth' && <Link to={`/films/${movieId}/review`} className="btn film-card__button">Add review</Link>}
    </div>
  );
};

export default FilmCardButtons;
