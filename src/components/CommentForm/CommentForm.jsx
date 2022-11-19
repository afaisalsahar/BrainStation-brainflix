import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import { useState } from "react";

const CommentForm = ({handleAddComment}) => {
    const [comment, setComment] = useState("");

    const isCommentValid = () => {
        return comment.trim() !== "";
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleNewComment = (event) => {
        event.preventDefault();

        if (!isCommentValid()) return false;

        handleAddComment(event.target.childNodes[1].value);
        setComment("");
    };

    return (
        <div className="converse">
            <div className="converse__container">
                <Avatar
                    showImage={true}
                    defaultAvatar={true}
                    avatarAlt="User posting a comment"
                />
                <form className="converse__form" onSubmit={handleNewComment}>
                    <label className="converse__label" htmlFor="converse-box">
                        Join The Conversation
                    </label>
                    <textarea
                        className="converse__box"
                        name="converse-box"
                        id="converse-box"
                        placeholder="Add a new comment"
                        value={comment}
                        onChange={handleCommentChange}
                    ></textarea>
                    <button className="call-to-action call-to-action--comment">
                        Comment
                    </button>
                </form>
            </div>
            <div className="converse__container">
                <hr className="converse__divider" />
            </div>
        </div>
    );
};

export default CommentForm;
