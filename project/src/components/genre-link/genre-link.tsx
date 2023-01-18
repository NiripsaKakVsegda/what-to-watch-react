import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import { changeGenre, resetShowMore, updateMoviesByGenre } from '../../store/action';

type Props = {
  currentGenre: string;
}

const GenreLink: FC<Props> = (props) => {
  const { currentGenre } = props;
  const dispatch = useAppDispatch();
  const { genre } = useAppSelector((state) => state);
  let className;
  if (currentGenre === genre) {
    className = 'catalog__genres-item catalog__genres-item--active';
  } else {
    className = 'catalog__genres-item';
  }
  return (
    <li className={className}>
      <Link onClick={
        () => {
          dispatch(changeGenre(currentGenre));
          dispatch(updateMoviesByGenre());
          dispatch(resetShowMore());
        }
      } to={'/'} className="catalog__genres-link"
      >{currentGenre}
      </Link>
    </li>
  );
};

export default memo(GenreLink);
