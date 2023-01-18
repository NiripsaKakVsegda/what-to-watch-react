import { FC } from 'react';
import { Duration } from '../../types/duration';

type Props = {
  progress: number;
  timeLeft: Duration;
  style: {left: string};
};

const Progress: FC<Props> = (props) => {
  const { progress, timeLeft, style } = props;
  const hours = timeLeft.hours === 0 ? '' : timeLeft.hours;
  const minutes = timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes;
  const seconds = timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds;

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value={progress} max="100"></progress>
        <div className="player__toggler" style={style}>Toggler</div>
      </div>
      <div className="player__time-value">
        {`${hours}${minutes}:${seconds}`}
      </div>
    </div>
  );
};

export default Progress;
