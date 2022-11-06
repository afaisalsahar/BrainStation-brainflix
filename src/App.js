import { useState } from 'react';

import './App.scss';
import Conversation from './components/Conversation/Conversation';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

import videoDetails from './data/video-details.json';
import videos from './data/videos.json';

function App() {
  
  const readableDate = (epochMS) => {
    return new Date(epochMS)
    .toLocaleDateString()
    .split('/')
    .map(dmy => dmy.length === 1 && `0${dmy}` || dmy)
    .join('/');
  }
  
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
      <Main 
        poster={playingNow.image}
        title={playingNow.title}
        channel={playingNow.channel}
        date={readableDate(playingNow.timestamp)}
        views={playingNow.views}
        likes={playingNow.likes}
        description={playingNow.description}
        comments={playingNow.comments.length}
      />
      <Conversation comments={playingNow.comments} readableDate={readableDate} />
    </>
  );
}

export default App;
