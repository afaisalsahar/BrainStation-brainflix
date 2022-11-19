import "./Home.scss";

// load hook dependencies
import { useEffect, useState } from "react"; // perform side effects and preserve application state
import { useParams, useNavigate } from "react-router-dom"; // get params from URL PATH and redirection

// load axios to make API calls
import axios from "axios";

// load components required to render home page
import Main from "../../components/Main/Main";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoList from "../../components/VideoList/VideoList";
import Conversation from "../../components/Conversation/Conversation";

// define API URL fields
const API_HOST = "http://localhost";
const API_PORT = "8080";
const VID_ENDPOINT = "videos";
// const API_KEY = "removelater";

const Home = () => {
    const [featuredVideo, setFeaturedVideo] = useState(null);
    const [featuredComments, setFeaturedComments] = useState([]);
    const [videos, setVideos] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${API_HOST}:${API_PORT}/${VID_ENDPOINT}`)
            .then((res) => {
                setVideos(
                    (id && res.data.filter((video) => video.id !== id)) ||
                        res.data.splice(1)
                );

                return axios.get(
                    `${API_HOST}:${API_PORT}/${VID_ENDPOINT}/${
                        id || res.data[0].id
                    }`
                );
            })
            .then((res) => {
                document.title =
                    (id && `${res.data.title} | BrainFlix`) || "BrainFlix";
                setFeaturedVideo(res.data);
                setFeaturedComments(res.data.comments);
            })
            .catch((err) => {
                console.log("An error occured", err);
                navigate("/error404");
            });
    }, [id, navigate]);

    const addComment = (comment) => {
        const name = ["Harry Ross", "Bruce Cook", "Carolyn Morgan"];

        axios
            .post(
                `${API_HOST}:${API_PORT}/${VID_ENDPOINT}/${featuredVideo.id}/comments`,
                {
                    name: name[Math.floor(Math.random() * name.length)],
                    comment: comment,
                }
            )
            .then((res) => {
                setFeaturedComments(res.data);
            })
            .catch((err) => {
                console.log("An error occured", err);
            });
    };

    const deleteComment = (id) => {
        axios
            .delete(
                `${API_HOST}:${API_PORT}/${VID_ENDPOINT}/${featuredVideo.id}/comments/${id}`
            )
            .then((res) => {
                setFeaturedComments(res.data);
            })
            .catch((err) => {
                console.log("An error occured", err);
            });
    };

    if (featuredVideo) {
        return (
            <main className="master">
                <VideoPlayer poster={featuredVideo.image} />
                <div className="master__container">
                    <div className="master__left">
                        <Main
                            title={featuredVideo.title}
                            channel={featuredVideo.channel}
                            date={featuredVideo.timestamp}
                            views={featuredVideo.views}
                            likes={featuredVideo.likes}
                            description={featuredVideo.description}
                            comments={featuredVideo.comments.length}
                        />
                        <Conversation
                            comments={featuredComments}
                            handleAddComment={addComment}
                            handleDeleteComment={deleteComment}
                        />
                    </div>
                    <div className="master__right">
                        <VideoList list={videos} />
                    </div>
                </div>
            </main>
        );
    } else {
        return (
            <div className="loading">
                <span className="loading__circles"></span>
            </div>
        );
    }
};

export default Home;
