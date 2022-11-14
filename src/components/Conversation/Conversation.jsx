import './Conversation.scss';

import CommentForm from '../CommentForm/CommentForm';
import Comments from '../Comments/Comments';

const Conversation = ({comments, handleNewComment}) => {
    return (
        <div className="conversation">
            <CommentForm handleNewComment={handleNewComment}/>
            <div className="comments">
                <div className='comments__container'>
                    {comments.map(content => {
                        let {id, name, comment, timestamp} = content;
                        return <Comments key={id} name={name} date={timestamp} comment={comment} />
                    })}
                </div>
            </div>
        </div>
    );
};

export default Conversation;