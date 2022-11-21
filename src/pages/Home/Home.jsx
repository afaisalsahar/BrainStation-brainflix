// load SASS
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
    // state variables to keep track of various parts of app
    const [featuredVideo, setFeaturedVideo] = useState(null); // keeps track of featured video
    const [featuredComments, setFeaturedComments] = useState([]); // keeps track of comments
    const [videos, setVideos] = useState([]); // keeps track of list of videos

    const { id } = useParams(); // takes the ID paramater from URL path
    const navigate = useNavigate(); // helps redirect users to other pages

    // makes GET API calls to server - when page loads - when ID updates
    useEffect(() => {
        // GET all the the videos from SERVER
        axios
            .get(`${API_HOST}:${API_PORT}/${VID_ENDPOINT}`)
            .then((res) => {
                // filter featured video from the list
                setVideos(
                    // if ID is there? filter the specific one, if not? first one on the list
                    (id && res.data.filter((video) => video.id !== id)) ||
                        res.data.splice(1)
                );

                // GET featured video with all its details and comments
                return axios.get(
                    `${API_HOST}:${API_PORT}/${VID_ENDPOINT}/${
                        id || res.data[0].id
                    }`
                );
            })
            .then((res) => {
                // GET videos success!! change document title when another video is clicked
                document.title =
                    (id && `${res.data.title} | BrainFlix`) || "BrainFlix";

                // update featured video
                setFeaturedVideo(res.data);
                // update comments reflecting featured video
                setFeaturedComments(res.data.comments);
            })
            .catch((err) => {
                // GET videos erorr!! display error to console and redirect to error page
                console.log("An error occured", err);
                navigate("/error404"); // redirect to error 404 page
            });
    }, [id, navigate]);

    // make POST call to API to add a new comment
    const addComment = (comment) => {
        // dummy user names for comemnts
        const name = ["Harry Ross", "Bruce Cook", "Carolyn Morgan"];

        // POST a comment - a random dummy name - and comment typed by the user
        axios
            .post(
                `${API_HOST}:${API_PORT}/${VID_ENDPOINT}/${featuredVideo.id}/comments`,
                {
                    name: name[Math.floor(Math.random() * name.length)], // Math.random() to get a random user name
                    comment: comment,
                }
            )
            .then((res) => {
                // POST comment success!! update state
                setFeaturedComments(res.data);
            })
            .catch((err) => {
                // POST comment error!! display erorr to the console
                console.log("An error occured", err);
            });
    };

    // make DELETE call to API to remove a comment
    const deleteComment = (id) => {
        // DELETE a comment with the given ID
        axios
            .delete(
                `${API_HOST}:${API_PORT}/${VID_ENDPOINT}/${featuredVideo.id}/comments/${id}`
            )
            .then((res) => {
                // DELETE comment sucess!! update state
                setFeaturedComments(res.data);
            })
            .catch((err) => {
                // DELETE comment error, display error to the console
                console.log("An error occured", err);
            });
    };

    // Featuerd video set sucessfully!! display the page
    if (featuredVideo) {
        return (
            <main className="master">
                {/* This component renders featured video */}
                <VideoPlayer poster={featuredVideo.image} />
                <div className="master__container">
                    <div className="master__left">
                        {/* This component renders all details about featured video */}
                        <Main
                            title={featuredVideo.title}
                            channel={featuredVideo.channel}
                            date={featuredVideo.timestamp}
                            views={featuredVideo.views}
                            likes={featuredVideo.likes}
                            description={featuredVideo.description}
                            comments={featuredVideo.comments.length}
                        />
                        {/* This component renders the dialogue section for featured video */}
                        <Conversation
                            comments={featuredComments}
                            handleAddComment={addComment}
                            handleDeleteComment={deleteComment}
                        />
                    </div>
                    <div className="master__right">
                        {/* This component renders all other videos ready to be featured */}
                        <VideoList list={videos} />
                    </div>
                </div>
            </main>
        );
    } else {
        // Not Yet? display a loading screen as featured video is being fetched
        return (
            <div className="loading">
                <span className="loading__circles"></span>
            </div>
        );
    }
};

export default Home;
