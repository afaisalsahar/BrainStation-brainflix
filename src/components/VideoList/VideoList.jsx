// load SASS - Video component - link hook
import "./VideoList.scss";

import Video from "../Video/Video";

import { Link } from "react-router-dom";

// renders all videos in a list ready to be displayed excluding featured
const VideoList = (videos) => {
    // scroll to top of page as featured video updates
    const scrollToFeaturedVid = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <section className="videos">
            <div className="videos__container">
                <h3 className="videos__title">Next Videos</h3>
                {videos.list.map((video) => {
                    let { id, image, title, channel } = video;
                    return (
                        <Link
                            className="video"
                            key={id}
                            to={`/video/${id}`}
                            onClick={scrollToFeaturedVid}
                        >
                            <Video
                                poster={image}
                                title={title}
                                channel={channel}
                            />
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default VideoList;
