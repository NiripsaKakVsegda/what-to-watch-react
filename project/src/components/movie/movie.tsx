import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Film } from '../../types/film';
import VideoPlayer from '../video-player/video-player';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { redirectToRoute } from '../../store/action';

type Props = {
  movie: Film;
  setActiveMovie?: Dispatch<SetStateAction<number | null>>;
}

const Movie: FC<Props> = (props) => {
  const { movie, setActiveMovie } = props;
  const { name, id } = movie;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReadyToPlay, setIsReadyToPlay] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    let startPlaying = true;

    if (isReadyToPlay) {
      setTimeout(() => startPlaying && setIsPlaying(true), 1000);
    }

    return(() => {
      startPlaying = false;
    });
  }, [isReadyToPlay]);

  const handleMouseOver = () => {
    setActiveMovie?.((_) => movie.id);
    setIsReadyToPlay(true);
  };

  const handleMouseOut = () => {
    setActiveMovie?.((_) => null);
    setIsReadyToPlay(false);
    setIsPlaying(false);
  };

  const handleOnClick = () => dispatch(redirectToRoute(`/films/${id}`));

  return (
    <article style={{cursor: 'pointer'}} className="small-film-card catalog__films-card" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleOnClick}>
      <div className="small-film-card__image">
        <VideoPlayer movie={movie} muted width={280} height={175} isPlaying={isPlaying}/>
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
};

export default Movie;
