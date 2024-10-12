import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPauseCircle,
  faPlayCircle,
} from '@fortawesome/free-regular-svg-icons';

export type AudioPlayerWidgetProps = {
  src: string;
};

export default function AudioPlayerWidget({ src }: AudioPlayerWidgetProps) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const icon = playing ? faPauseCircle : faPlayCircle;

  useEffect(() => {
    const handleAudioEnd = () => setPlaying(false);

    audioRef.current = new Audio(src);
    audioRef.current.addEventListener('ended', handleAudioEnd);

    return () => {
      audioRef.current?.removeEventListener('ended', handleAudioEnd);
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [src]);

  function togglePlay() {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  }

  return (
    <button
      onClick={togglePlay}
      className="px-3 opacity-60 hover:opacity-80 print:hidden"
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
