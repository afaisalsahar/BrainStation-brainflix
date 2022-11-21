// load video player
import "./VideoPlayer.scss";

// render vide player to display featured video
const VideoPlayer = ({ poster }) => {
    return (
        <div className="player__stage">
            <div className="player__container">
                <div className="player__video">
                    <video
                        className="player__media"
                        poster={poster}
                        controls
                    ></video>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
