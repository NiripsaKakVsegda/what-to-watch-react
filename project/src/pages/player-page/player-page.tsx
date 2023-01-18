import {FC, useRef, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import PlayButton from '../../components/play-button/play-button';
import PageNotFound from '../page-not-found/page-not-found';
import Progress from '../../components/progress/progress';
import LoadingScreen from '../loading-screen/loading-screen';
import FullScreenButton from '../../components/full-screen-button/full-screen-button';
import { Duration } from '../../types/duration';
import { useFindMovieById, getDuration } from '../../common/common-functions';
import { APIRoute } from '../../types/api-route.enum';
import { MockFilm } from '../../common/mock';

const PlayerPage: FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { id } = useParams();
  const foundMovie = useFindMovieById(id);
  const movie = foundMovie ?? MockFilm;
  const { backgroundImage, videoLink, runTime } = movie;

  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState<Duration>(getDuration(runTime * 60));

  const {isMovieLoading} = useAppSelector((state) => state);
  if (isMovieLoading) {
    return <LoadingScreen/>;
  }
  if (!foundMovie) {
    return (<PageNotFound></PageNotFound>);
  }

  const handleProgress = () => {
    if (videoRef.current === null) {
      return;
    }

    setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    const left = Math.floor(videoRef.current.duration - videoRef.current.currentTime);
    setTimeLeft(getDuration(left));
  };

  return (
    <div className="player">
      <video onTimeUpdate={handleProgress} preload="metadata" ref={videoRef} src={videoLink}
        className="player__video" poster={backgroundImage}
      />
      <Link to={`${APIRoute.Films}/${movie.id}`}>
        <button type="button" className="player__exit">Exit</button>
      </Link>
      <div className="player__controls">
        <Progress timeLeft={timeLeft} progress={progress} style={{left: `${progress}%`}}/>
        <div className="player__controls-row">
          <PlayButton videoRef={videoRef}/>
          <div className="player__name">Transpotting</div>
          <FullScreenButton videoRef={videoRef}/>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
