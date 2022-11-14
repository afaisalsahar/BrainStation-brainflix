import './Comments.scss';
import Avatar from "../Avatar/Avatar";
import TimeAgo from 'timeago-react';

const Comments = ({id, name, date, comment, handleDeleteComment}) => {
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
                    <a className='comments__delete' onClick={() => handleDeleteComment(id)}>Delete</a>
                </div>
            </article>
            <hr className="comments__divider" />        
        </>
    );
};

export default Comments;