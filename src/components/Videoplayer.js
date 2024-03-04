import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useTranslation } from 'react-i18next';

const Videoplayer = ({ url, audioTracks, i18n }) => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [playbackRate, setPlaybackRate] = useState(1);
  const { t } = useTranslation();

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleSkip = (seconds) => {
    const currentTime = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(currentTime + seconds);
  };

  const handlePlaybackRateChange = (rate) => {
    setPlaybackRate(rate);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={playing}
        volume={volume}
        playbackRate={playbackRate}
        controls
        width="80%"
        height="80%"
        config={{
          file: {
            attributes: {
              crossOrigin: 'true',
              crossOriginAnonymous: 'true',
            },
          },
        }}
      />
      <div>
        <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
        <button onClick={() => handleSkip(-10)}>Skip Back</button>
        <button onClick={() => handleSkip(10)}>Skip Ahead</button>
        <select onChange={(e) => handlePlaybackRateChange(parseFloat(e.target.value))}>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
        <select onChange={(e) => handleLanguageChange(e.target.value)}>
          {audioTracks.map((track, index) => (
            <option key={index} value={track.language}>
              {track.language}
            </option>
          ))}
        </select>
      </div>
      <div>
        {/* Add subtitle component here if needed */}
      </div>
    </div>
  );
};

export default Videoplayer;
