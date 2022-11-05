import { useState } from 'react';

import './App.scss';

import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

import videoDetails from './data/video-details.json';
import videos from './data/videos.json';

function App() {
  
  const [playingNow, setPlayingNow] = useState(
    videoDetails[
      Math.floor(
        Math.random() * ((videos.length-1) - 0 + 1) + 0
      )
    ]
  );


  return (
    <>
      <Header />
      <VideoPlayer poster={playingNow.image} />
    </>
  );
}

export default App;
