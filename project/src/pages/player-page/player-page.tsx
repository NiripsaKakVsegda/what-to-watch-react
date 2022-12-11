import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import PlayButton from '../../components/play-button/play-button';
import {FindMovieById, getDuration} from '../../common/common-functions';
import PageNotFound from '../page-not-found/page-not-found';

type Props = {
  playerName: string;
  isPause?: boolean;
}

const PlayerPage: FC<Props> = (props) => {
  const { playerName, isPause } = props;
  const { id } = useParams();
  const movie = FindMovieById(id);
  if (!movie) {
    return (<PageNotFound></PageNotFound>);
  }
  const { runTime } = movie;
  const duration = getDuration(runTime);

  return (
    <div className="player">
      <video src="#" className="player__video" poster="img/player-poster.jpg"></video>
      <Link to={`/films/${movie.id}`}>
        <button type="button" className="player__exit">Exit</button>
      </Link>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{`${duration.hours}:${duration.minutes}`}</div>
        </div>
        <div className="player__controls-row">
          <PlayButton isPause={isPause}/>
          <div className="player__name">{playerName}</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
