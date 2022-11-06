import './Comments.scss';
import Avatar from "../Avatar/Avatar";

const Comments = () => {
    return (
        <div className="comments">
            <div className='comments__container'>
                <article className="comments__comment">        
                    <Avatar showImage={false}/>
                    <div className="comments__item">
                        <h3 className="comments__name">Name</h3>
                        <span className="comments__date">Date</span>
                        <p className="comments__body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur sunt quae repellendus perspiciatis fuga debitis amet id, earum iure ab, omnis odio unde quibusdam fugiat exercitationem. Sunt quibusdam alias labore.</p>
                    </div>
                </article>
                <hr className="comments__divider" />
            </div>
        </div>
    );
};

export default Comments;