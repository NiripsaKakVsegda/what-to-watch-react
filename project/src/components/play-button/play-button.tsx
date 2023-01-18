import { FC, MutableRefObject, useState } from 'react';

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
  videoRef: MutableRefObject<HTMLVideoElement | null>;
}

const PlayButton: FC<Props> = (props) => {
  const { videoRef } = props;
  const [buttonInfo, setButtonInfo] = useState(play);

  if (videoRef.current !== null) {
    videoRef.current.onended = () => setButtonInfo(play);
  }

  const onClick = () => {
    if (videoRef.current !== null) {
      if (buttonInfo.name === 'Pause') {
        videoRef.current.pause();
        setButtonInfo(play);
      } else {
        videoRef.current.play();
        setButtonInfo(pause);
      }
    }
  };

  return (
    <button type="button" className="player__play" onClick={onClick}>
      <svg viewBox={`0 0 ${buttonInfo.width} ${buttonInfo.height}`} width={buttonInfo.width} height={buttonInfo.height}>
        <use xlinkHref={buttonInfo.href}></use>
      </svg>
      <span>{buttonInfo.name}</span>
    </button>
  );
};

export default PlayButton;
