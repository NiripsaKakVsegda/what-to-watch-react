import {Dispatch, FC, SetStateAction} from 'react';
import Movie from '../movie/movie';
import ShowMore from '../show-more/show-more';
import { Film } from '../../types/film';

type Props = {
  currentMovies: Film[];
  moviesCount: number;
  setActiveMovie: Dispatch<SetStateAction<number | null>>;
}

const Movies: FC<Props> = (props) => {
  const { currentMovies, moviesCount, setActiveMovie } = props;

  return (
    <>
      <div className="catalog__films-list">
        {currentMovies.slice(0, moviesCount).map((currentMovie) =>
          (
            <Movie key={currentMovie.id} setActiveMovie={setActiveMovie} movie={currentMovie}/>
          ))}
      </div>
      {currentMovies.length > moviesCount && <ShowMore/>}
    </>
  );
};

export default Movies;
