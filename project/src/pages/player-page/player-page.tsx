import { FC } from 'react';
import PlayButton from '../../components/play-button/play-button';
import { Film } from '../../types/film';

type Props = {
  movie: Film;
  playerName: string;
  isPause?: boolean;
}

const PlayerPage: FC<Props> = (props) => {
  const {movie, playerName, isPause} = props;
  const {posterPath, duration} = movie;
  return (
    <div className="player">
      <video src="#" className="player__video" poster={posterPath}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{`${duration.hours}:${duration.minutes}:${duration.seconds}`}</div>
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
