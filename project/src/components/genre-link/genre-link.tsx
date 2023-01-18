import { FC, memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre, resetShowMore, updateMoviesByGenre } from '../../store/action';

type Props = {
  currentGenre: string;
}

const GenreLink: FC<Props> = (props) => {
  const { currentGenre } = props;
  const { genre } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();
  const onLinkClick = () => {
    dispatch(changeGenre(currentGenre));
    dispatch(updateMoviesByGenre());
    dispatch(resetShowMore());
  };

  let className;
  if (currentGenre === genre) {
    className = 'catalog__genres-item catalog__genres-item--active';
  } else {
    className = 'catalog__genres-item';
  }

  return (
    <li className={className}>
      <p onClick={onLinkClick} className="catalog__genres-link">{currentGenre}</p>
    </li>
  );
};

export default memo(GenreLink);
