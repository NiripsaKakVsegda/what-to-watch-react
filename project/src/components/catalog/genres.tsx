import { FC } from 'react';
import GenreLink from '../genre-link/genre-link';

type Props = {
  allGenres: string[];
}

const Genres: FC<Props> = (props) => {
  const { allGenres } = props;
  return (
    <ul className="catalog__genres-list">
      {allGenres.slice(0, 10).map((g) => <GenreLink currentGenre={g} key={`genre-${g.replace(/\s/g, '')}`}/>)}
    </ul>
  );
};

export default Genres;
