import './App.scss';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/Header/Header';

import Main from './components/Main/Main';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoList from './components/VideoList/VideoList';
import Conversation from './components/Conversation/Conversation';

import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
import NotFound from './pages/404/404';

function App() {
    
  const [playingNow, setPlayingNow] = useState(
    videoDetails[
      Math.floor(
        Math.random() * ((videos.length-1) - 0 + 1) + 0
      )
    ]
  );

  const [videoList, setVideoList] = useState(
    videos.filter(video => video.id !== playingNow.id)
  );

  const handleVideoList = id => {
    setVideoList(
      [...videos].filter(video => video.id !== id)
    );
  }

  const handlePlayNow = id => {
    handleVideoList(id);
    setPlayingNow(
      [...videoDetails].find(video => video.id === id)
    );
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video/:id' element={<Home />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    // <>
    //   <Header />
    //   <main className="master">
    //     <VideoPlayer poster={playingNow.image} />
    //     <div className="master__container">
    //       <div className='master__left'>
    //         <Main
    //           title={playingNow.title}
    //           channel={playingNow.channel}
    //           date={playingNow.timestamp}
    //           views={playingNow.views}
    //           likes={playingNow.likes}
    //           description={playingNow.description}
    //           comments={playingNow.comments.length}
    //         />
    //         <Conversation comments={playingNow.comments} />
    //       </div>
    //       <div className='master__right'>
    //         <VideoList list={videoList} playNow={handlePlayNow} />
    //       </div>
    //     </div>
    //   </main>
    // </>
  );
}

export default App;
