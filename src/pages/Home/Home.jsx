import './Home.scss'

// load hook dependencies 
import { useEffect, useState } from 'react'; // perform side effects and preserve application state
import { useParams, useNavigate } from 'react-router-dom'; // get params from URL PATH and redirection

// load axios to make API calls
import axios from 'axios';

// load components required to render home page
import Main from '../../components/Main/Main';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoList from '../../components/VideoList/VideoList';
import Conversation from '../../components/Conversation/Conversation';

// define API URL fields
const URL = 'http://localhost';
const PORT = '8080';
const VID_ENDPOINT = 'videos';
const API_KEY = 'removelater';

const Home = () => {
    const [featuredVideo, setFeaturedVideo] = useState(null);
    const [featuredComments, setFeaturedComments] = useState([]);
    const [videos, setVideos] = useState([]);
    
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${URL}:${PORT}/${VID_ENDPOINT}`)
        .then(response => {
            setVideos(
                ((id && response.data.filter(video => video.id !== id)) || response.data.splice(1))
            )
            
            return axios.get(`${URL}:${PORT}/${VID_ENDPOINT}/${(id || response.data[0].id)}`);
        })
        .then(response => {
            document.title = (id && `${response.data.title} | BrainFlix`) || 'BrainFlix';
            setFeaturedVideo(response.data);
            setFeaturedComments(response.data.comments)
        })
        .catch(err => {
            navigate("/error404");
        })
    }, [id, navigate]);
    
    const addNewComment = (event) => {
        event.preventDefault();

        const name = [
            'Harry Ross',
            'Bruce Cook',
            'Carolyn Morgan',
            'Albert Walker',
            'Randy Reed',
            'Larry Barnes',
            'Lois Wilson',
            'Jesse Campbell',
            'Ernest Rogers',
            'Theresa Patterson',
            'Henry Simmons',
            'Michelle Perry',
            'Frank Butler'
        ];
        const comment = event.target.form[0].value;

        if(comment.length > 0) {
            axios.post(`${URL}/${VID_ENDPOINT}/${featuredVideo.id}/comments?api_key=${API_KEY}`,
            {
                'name': name[Math.floor(Math.random() * name.length)],
                'comment': comment
            })
            .then(response => {
                axios.get(`${URL}/${VID_ENDPOINT}/${featuredVideo.id}?api_key=${API_KEY}`)
                .then(response => {
                    setFeaturedComments(response.data.comments)
                });
            })
            event.target.form.reset();
        }
    }

    const deleteComment = (id) => {
        axios.delete(`${URL}/${VID_ENDPOINT}/${featuredVideo.id}/comments/${id}?api_key=${API_KEY}`)
        .then(response => {
            axios.get(`${URL}/${VID_ENDPOINT}/${featuredVideo.id}?api_key=${API_KEY}`)
            .then(response => {
                setFeaturedComments(response.data.comments)
            });
        });
    }
    
    if(featuredVideo) {
        return (
            <main className="master">
                <VideoPlayer poster={featuredVideo.image} />
                <div className="master__container">
                    <div className='master__left'>
                        <Main
                            title={featuredVideo.title}
                            channel={featuredVideo.channel}
                            date={featuredVideo.timestamp}
                            views={featuredVideo.views}
                            likes={featuredVideo.likes}
                            description={featuredVideo.description}
                            comments={featuredVideo.comments.length}
                        />
                        <Conversation comments={featuredComments} handleNewComment={addNewComment} handleDeleteComment={deleteComment}/>
                    </div>
                    <div className='master__right'>
                        <VideoList list={videos}/>
                    </div>
                </div>
            </main>
    );
    } else {
        return (
            <div className='loading'>
                <span className='loading__circles'></span>
            </div>
        )
    }    
};

export default Home;