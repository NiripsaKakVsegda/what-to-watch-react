type PlayerPageProps = {
  posterPath: string;
  playerName: string;
  duration: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const play = {
  name: 'Play',
  href: '#play-s',
  width: 19,
  height: 19
};

const pause = {
  name: 'Pause',
  href: '#pause',
  width: 14,
  height: 21
};

function PlayerPage(props: PlayerPageProps, isPause = false): JSX.Element {
  const buttonInfo = isPause ? pause : play;
  return (
    <div className="player">
      <video src="#" className="player__video" poster={props.posterPath}></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{`${props.duration.hours}:${props.duration.minutes}:${props.duration.seconds}`}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox={`0 0 ${buttonInfo.width} ${buttonInfo.height}`} width={buttonInfo.width} height={buttonInfo.height}>
              <use xlinkHref={buttonInfo.href}></use>
            </svg>
            <span>{buttonInfo.name}</span>
          </button>
          <div className="player__name">{props.playerName}</div>

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
}

export default PlayerPage;
