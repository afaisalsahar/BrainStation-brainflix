// Load SASS - Avatar Component - and useState hook
import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import { useState } from "react";

const CommentForm = ({ handleAddComment }) => {
    // state variables that keeps track of comment
    const [comment, setComment] = useState(""); // default vaule empty string
    const [commentError, setCommentError] = useState(false); // handle empty comment submission

    // utility function to check if the user submitted an empty comment
    const isCommentValid = () => {
        // remove trailing and leading spaces and check if input is empty
        return comment.trim() !== "";
    };

    // as user interacts with comment input, update state
    const handleCommentChange = (event) => {
        setComment(event.target.value); // update comment value
        setCommentError(false); // reset error state to false
    };

    // triggers as the comment submits to vlaidate and reset state
    const handleNewComment = (event) => {
        event.preventDefault(); // prevent page refresh

        // check if an empty comment box is submitted and return false
        if (!isCommentValid()) {
            setCommentError(true); // update error state to show a message
            return false;
        }

        // lift state to POST comment and update page
        handleAddComment(event.target.childNodes[1].value);

        // reset comment state
        setComment("");
        
        setCommentError(false); // reset error state to false
    };

    return (
        <div className="converse">
            <div className="converse__container">
                {/* render avatar component */}
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
                        value={comment} // set input value from state
                        onChange={handleCommentChange} // as the user interacts update state
                    ></textarea>
                    <button className="converse__submit">Comment</button>
                </form>
            </div>
            {/* conditional error message rendering when user tries to submit empty comment */}
            {commentError &&
                <span className="upload__error">
                    ** Error, comment box cannot be empty
                </span>
            }
            <div className="converse__container"></div>
        </div>
    );
};

export default CommentForm;
