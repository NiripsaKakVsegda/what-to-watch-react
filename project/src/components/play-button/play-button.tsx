import { FC } from 'react';

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

type Props = {
  isPause?: boolean;
}

const PlayButton: FC<Props> = (props) => {
  const {isPause} = props;
  const buttonInfo = isPause ? pause : play;
  return (
    <button type="button" className="player__play">
      <svg viewBox={`0 0 ${buttonInfo.width} ${buttonInfo.height}`} width={buttonInfo.width} height={buttonInfo.height}>
        <use xlinkHref={buttonInfo.href}></use>
      </svg>
      <span>{buttonInfo.name}</span>
    </button>
  );
};

export default PlayButton;
