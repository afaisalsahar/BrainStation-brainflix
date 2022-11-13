import './Home.scss'

import { useState } from 'react';
import { useParams } from 'react-router-dom';

import Main from '../../components/Main/Main';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoList from '../../components/VideoList/VideoList';
import Conversation from '../../components/Conversation/Conversation';

const Home = () => {
    const [playingNow, setPlayingNow] = useState(null);
    const [videoList, setVideoList] = useState(null);
    
    const {id} = useParams();

    if(playingNow) {
        return (
            <main className="master">
                <VideoPlayer poster={playingNow.image} />
                <div className="master__container">
                    <div className='master__left'>
                        <Main
                            title={playingNow.title}
                            channel={playingNow.channel}
                            date={playingNow.timestamp}
                            views={playingNow.views}
                            likes={playingNow.likes}
                            description={playingNow.description}
                            comments={playingNow.comments.length}
                        />
                        <Conversation comments={playingNow.comments} />
                    </div>
                    <div className='master__right'>
                        <VideoList list={videoList}/>
                    </div>
                </div>
            </main>
        );
    }
};

export default Home;