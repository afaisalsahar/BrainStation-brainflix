// load SASS - Comment Form and Comments components
import "./Conversation.scss";

import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";

// renders the dialogue section of the page with a form and all comments posted
const Conversation = ({ comments, handleAddComment, handleDeleteComment }) => {
    return (
        <div className="conversation">
            <CommentForm handleAddComment={handleAddComment} />
            <div className="comments">
                <div className="comments__container">
                    {comments.map((content) => {
                        let { id, name, comment, timestamp } = content;
                        return (
                            <Comments
                                key={id}
                                id={id}
                                name={name}
                                date={timestamp}
                                comment={comment}
                                handleDeleteComment={handleDeleteComment}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Conversation;
