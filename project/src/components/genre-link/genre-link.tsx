import { FC } from 'react';

type Props = {
  genre: string;
}

const GenreLink: FC<Props> = (props) => {
  const {genre} = props;
  return (
    <li className="catalog__genres-item">
      <a href="/" className="catalog__genres-link">{genre}</a>
    </li>
  );
};

export default GenreLink;
