import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import Videoplayer from './components/Videoplayer';

const App = () => {
  const { i18n } = useTranslation(); // Obtain the i18n instance

  const url = '/video/test-multi-lang-subs.mp4'; // Direct link to the video file
  const subtitles = [
    { start: 0, end: 5, text: 'Subtitle 1' },
    { start: 5, end: 10, text: 'Subtitle 2' },
    // Add more subtitles as needed
  ];

  // Where is the audio track located? (i.e. /audio/english.mp3)
  const audioTracks = [
    { language: 'English', src: '' },
    { language: 'Spanish', src: '' },
    // Add more audio tracks as needed
  ];

  return (
    <div>
      {/* Pass the i18n instance to the Videoplayer component */}
      <Videoplayer url={url} subtitles={subtitles} audioTracks={audioTracks} i18n={i18n} />
    </div>
  );
};

export default App;
