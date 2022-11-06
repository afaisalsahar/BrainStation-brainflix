import './Video.scss'

const Video = ({id, poster, title, channel, playNow}) => {
    return (
        <>
        <div className="video" onClick={() => playNow(id)}>
            <div className="video__thumbnail">
                <img className="video__image" src={poster} />
            </div>
            <div className="video__details">
                <p className="video__title">{title}</p>
                <span className="video__channel">{channel}</span>
            </div>
        </div>
        <hr className='video__divider' />
        </>
    );
};

export default Video;