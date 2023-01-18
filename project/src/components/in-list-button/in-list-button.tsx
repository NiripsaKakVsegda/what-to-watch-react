import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFavoriteAction, updateMovieInMyList } from '../../store/api-actions';

const inList = {
  href: '#in-list',
  width: 18,
  height: 14
};

const add = {
  href: '#add',
  width: 19,
  height: 20
};

type Props = {
  movieId: number;
}

const InListButton: FC<Props> = (props) => {
  const { movieId } = props;
  const { favorite } = useAppSelector((state) => state);

  const isInList = favorite.findIndex((x) => x.id === movieId) !== -1;
  const [buttonType, setButtonType] = useState(isInList ? inList : add);

  const dispatch = useAppDispatch();

  const onButtonClick = () => {
    const status = buttonType === add ? 1 : 0;
    dispatch(updateMovieInMyList({movieId: movieId, status: status }))
      .then(() => dispatch(fetchFavoriteAction()))
      .then(() => setButtonType(buttonType === add ? inList : add));
  };

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={onButtonClick}>
      <svg viewBox={`0 0 ${buttonType.width} ${buttonType.height}`} width={buttonType.width} height={buttonType.height}>
        <use xlinkHref={buttonType.href}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favorite.length}</span>
    </button>
  );
};

export default InListButton;
