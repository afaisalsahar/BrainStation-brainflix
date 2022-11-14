import './Comments.scss';
import Avatar from "../Avatar/Avatar";
import TimeAgo from 'timeago-react';

const Comments = ({name, date, comment}) => {
    return (
        <>
            <article className="comments__comment">
                <Avatar showImage={false}/>
                <div className="comments__item">
                    <p className="comments__name">{name}</p>
                    <span className="comments__date">
                        <TimeAgo datetime={date}/>
                    </span>
                    <p className="comments__body">{comment}</p>
                </div>
            </article>
            <hr className="comments__divider" />        
        </>
    );
};

export default Comments;