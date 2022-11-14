import './Video.scss'

const Video = ({poster, title, channel}) => {
    return (
        <div className="video__container">
            <div className="video__thumbnail">
                <img className="video__image" src={poster} alt={title} />
            </div>
            <div className="video__details">
                <p className="video__title">{title}</p>
                <span className="video__channel">{channel}</span>
            </div>
        </div>
    );
};

export default Video;