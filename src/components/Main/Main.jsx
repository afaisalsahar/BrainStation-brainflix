import './Main.scss';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const Main = ({title, channel, date, views, likes, description, comments, poster}) => {
    return (
        <main className="main">
            <VideoPlayer poster={poster} />
            <div className="main__container">
                <h1 className="main__title">{title}</h1>
                <hr className="main__divider main__divider--mobile" />
                <div className="main__details">
                    <div className="main__creator">
                        <span className="main__channel">By {channel}</span>
                        <span className="main__date">{date}</span>
                    </div>
                    <div className="main__stats">
                        <span className="main__views">{views}</span>
                        <span className="main__likes">{likes}</span>
                    </div>
                </div>
                <hr className="main__divider" />
                <div className="main__description">
                    <p className="main__body">{description}</p>
                    <span className="main__comments">{comments} Comments</span>
                </div>
            </div>
        </main>
    );
};

export default Main;