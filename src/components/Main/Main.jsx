// load SASS - timeago hook
import "./Main.scss";
import TimeAgo from "timeago-react";

// main renders all the details for featured videos
const Main = ({
    title,
    channel,
    date,
    views,
    likes,
    description,
    comments,
}) => {
    return (
        <div className="main">
            <h1 className="main__title">{title}</h1>
            <div className="main__details">
                <div className="main__creator">
                    <span className="main__channel">By {channel}</span>
                    <span className="main__date">
                        <TimeAgo datetime={date} />
                    </span>
                </div>
                <div className="main__stats">
                    <span className="main__views">{views}</span>
                    <span className="main__likes">{likes}</span>
                </div>
            </div>
            <div className="main__description">
                <p className="main__body">{description}</p>
                <span className="main__comments">{comments} Comments</span>
            </div>
        </div>
    );
};

export default Main;
