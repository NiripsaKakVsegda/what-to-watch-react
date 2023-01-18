import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre, resetShowMore, updateMoviesByGenre } from '../../store/action';
import { APIRoute } from '../../types/api-route.enum';

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
      <Link onClick={onLinkClick} to={APIRoute.Main} className="catalog__genres-link">{currentGenre}</Link>
    </li>
  );
};

export default memo(GenreLink);
