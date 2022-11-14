import './Home.scss'

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

import Main from '../../components/Main/Main';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoList from '../../components/VideoList/VideoList';
import Conversation from '../../components/Conversation/Conversation';

const URL = 'https://project-2-api.herokuapp.com';
const VID_ENDPOINT = 'videos';
const API_KEY = 'bc3e6a76-4848-4adf-bdae-03dfc0597ac6';

const Home = () => {
    const [playingNow, setPlayingNow] = useState(null);
    const [videoList, setVideoList] = useState(null);
    
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${URL}/${VID_ENDPOINT}?api_key=${API_KEY}`)
        .then(response => {
            setVideoList(
                ((id && response.data.filter(video => video.id !== id)) || response.data.splice(1))
            );

            return axios.get(`${URL}/${VID_ENDPOINT}/${(id || response.data[0].id)}?api_key=${API_KEY}`)
            .then(response => {
                setPlayingNow(response.data);
            })
            
            .catch(error => {
                navigate("/error404");
            })
        })
    }, [id, navigate]);
    

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