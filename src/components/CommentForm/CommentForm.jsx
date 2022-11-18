import './CommentForm.scss';
import Avatar from '../Avatar/Avatar';

const CommentForm = ({handleNewComment}) => {
    return (
        <div className="converse"> 
            <div className="converse__container">
                <Avatar showImage={true} defaultAvatar={true} avatarAlt="User posting a comment" />
                <form className="converse__form">
                    <label className="converse__label" htmlFor="converse-box">Join The Conversation</label>
                    <textarea className="converse__box" name="converse-box" id="converse-box" placeholder="Add a new comment"></textarea>
                    <button className="call-to-action call-to-action--comment" onClick={handleNewComment}>Comment</button> 
                </form>
            </div>
            <div className="converse__container">
                <hr className="converse__divider" />
            </div>
        </div>
    );
};

export default CommentForm;