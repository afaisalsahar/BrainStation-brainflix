import './CommentForm.scss';
import CallToAction from '../CallToAction/CallToAction';
import Avatar from '../Avatar/Avatar';

const CommentForm = () => {
    return (
        <div className="converse"> 
            <div className="converse__container">
                <Avatar showImage={true} defaultAvatar={true} avatarAlt="User posting a comment" />
                <form className="converse__form">
                    <label className="converse__label" htmlFor="converse-box">Join The Conversation</label>
                    <textarea className="converse__box" name="converse-box" id="converse-box" placeholder="Add a new comment"></textarea>
                    <CallToAction modifier="comment" text="Comment"/>
                </form>
            </div>
            <div className="converse__container">
                <hr className="converse__divider" />
            </div>
        </div>
    );
};

export default CommentForm;