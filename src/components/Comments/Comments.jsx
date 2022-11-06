import './Comments.scss';
import Avatar from "../Avatar/Avatar";

const Comments = ({name, date, comment}) => {
    return (
        <>
            <article className="comments__comment">        
                <Avatar showImage={false}/>
                <div className="comments__item">
                    <h3 className="comments__name">{name}</h3>
                    <span className="comments__date">{date}</span>
                    <p className="comments__body">{comment}</p>
                </div>
            </article>
            <hr className="comments__divider" />        
        </>
    );
};

export default Comments;