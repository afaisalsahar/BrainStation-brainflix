import './Avatar.scss';
import avatarDefaultImage from '../../assets/images/Mohan-muruge.jpg';

const Avatar = ({showImage, defaultAvatar, customAvatar, avatarAlt}) => {
    return (
        <div className="avatar">
            <div className="avatar__circle">
                {
                    (showImage) ?
                        <img className="avatar__image"
                        src={(defaultAvatar) ? avatarDefaultImage : customAvatar}
                        alt={avatarAlt}
                        /> : null
                }
            </div>
        </div>
    );
};

export default Avatar;