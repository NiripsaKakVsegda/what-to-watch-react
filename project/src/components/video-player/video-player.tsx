import {FC, useEffect, useRef} from 'react';
import { Film } from '../../types/film';

type Props = {
  movie: Film;
  muted: boolean;
  width: number;
  height: number;
  isPlaying: boolean;
}

const VideoPlayer: FC<Props> = (props) => {
  const { muted, movie, width, height, isPlaying } = props;
  const { previewVideoLink, previewImage } = movie;

  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.load();
  }, [isPlaying]);

  return (
    <video ref={videoRef} width={width} height={height} src={previewVideoLink} poster={previewImage} muted={muted} ></video>
  );
};

export default VideoPlayer;
