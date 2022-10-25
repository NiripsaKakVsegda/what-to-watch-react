import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  genre: string;
}

const GenreLink: FC<Props> = (props) => {
  const { genre } = props;

  return (
    <li className="catalog__genres-item">
      <Link to={'/'} className="catalog__genres-link">{genre}</Link>
    </li>
  );
};

export default GenreLink;
