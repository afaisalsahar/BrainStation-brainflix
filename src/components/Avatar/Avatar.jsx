// load SASS and default AVATAR image
import "./Avatar.scss";
import avatarDefaultImage from "../../assets/images/Mohan-muruge.jpg";

// Avatar component renders a circle for users logged into the app
const Avatar = ({ showImage, defaultAvatar, customAvatar, avatarAlt }) => {
    return (
        <div className="avatar">
            <div className="avatar__circle">
                {
                    showImage ? ( // check if the image should be rendered?
                        /* Yes, check if an image is given or just render the default image*/
                        <img
                            className="avatar__image"
                            src={
                                defaultAvatar
                                    ? avatarDefaultImage
                                    : customAvatar
                            }
                            alt={avatarAlt}
                        />
                    ) : null // No, display a circle shape with filled with murcury color
                }
            </div>
        </div>
    );
};

export default Avatar;
