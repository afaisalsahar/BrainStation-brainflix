// load SASS - Avatar component - TimeAgo and Link hooks
import "./Comments.scss";
import Avatar from "../Avatar/Avatar";
import TimeAgo from "timeago-react"; // to display YT like timestamp
import { Link } from "react-router-dom";

// renders a single comment with a DELETE click handler

const Comments = ({ id, name, date, comment, handleDeleteComment }) => {
    return (
        <>
            <article className="comments__comment">
                <Avatar showImage={false} />
                <div className="comments__item">
                    <p className="comments__name">{name}</p>
                    <span className="comments__date">
                        <TimeAgo datetime={date} />
                    </span>
                    <p className="comments__body">{comment}</p>
                    <Link
                        className="comments__delete"
                        onClick={() => handleDeleteComment(id)} // fire comment delete method and pass comment ID
                    >
                        Delete
                    </Link>
                </div>
            </article>
        </>
    );
};

export default Comments;
