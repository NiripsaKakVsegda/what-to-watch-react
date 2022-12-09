import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import {changeGenre, updateMoviesByGenre} from '../../store/action';
import { Genre } from '../../types/genre.enum';

type Props = {
  genre: Genre;
}

const GenreLink: FC<Props> = (props) => {
  const { genre } = props;
  const dispatch = useAppDispatch();

  return (
    <li className="catalog__genres-item">
      <Link onClick={() => {
        dispatch(changeGenre(genre));
        dispatch(updateMoviesByGenre());
      }} to={'/'} className="catalog__genres-link">{genre}</Link>
    </li>
  );
};

export default GenreLink;
