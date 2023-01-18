import { FC, MutableRefObject } from 'react';

type Props = {
  videoRef: MutableRefObject<HTMLVideoElement | null>;
}

const FullScreenButton: FC<Props> = (props) => {
  const { videoRef } = props;

  const onClick = () => {
    if (videoRef.current !== null) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <button type="button" className="player__full-screen" onClick={onClick}>
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"></use>
      </svg>
      <span>Full screen</span>
    </button>
  );
};

export default FullScreenButton;
