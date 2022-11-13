import './Upload.scss'

import thumbnail from '../../assets/images/Upload-video-preview.jpg';
import Button from '../../components/CallToAction/CallToAction';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Upload = () => {
    const [videoPublished, setVideoPublished] = useState(null);
    const navigate = useNavigate();

    videoPublished && setTimeout(() => {navigate("/")}, 5000);

    return (
        <main className="master">
            <div className="master__container">
                <div className="upload">
                    <h1 className="upload__title">Upload Video</h1>
                </div>
                <hr className='upload__divider upload__divider--tablet' />
                <form className='upload__form'>
                    <div className='upload__thumbnail'>
                        <span className='upload__label'>Video Thumbnail</span>
                        <img className='upload__image' src={thumbnail} alt="Person riding a bike with blue handles and frame" />
                    </div>
                    <div className='upload__content'>
                        <div className='upload__video-title'>
                            <label className='upload__label' htmlFor="upload-title">Title your video</label>
                            <input type="text" className='upload__input' name="upload-title" id="upload-title" placeholder='Add a title to your video' />
                        </div>
                        <div className='upload__description'>
                            <label className='upload__label' htmlFor="upload-body">Add a video description</label>
                            <textarea className='upload__body' name='upload-body' id='upload-body' placeholder='Add a description to your video'></textarea>
                        </div>
                    </div>
                    <hr className='upload__divider upload__divider--tablet' />
                    <div className='upload__actions'>
                        <Link className='upload__publish'>
                            <Button modifier="upload" text="Publish" handleClick={() => setVideoPublished(true)} />
                        </Link>
                        <Link to="/" className='upload__cancel'>
                            <Button text="Cancel" />
                        </Link>
                        {
                            videoPublished && 
                            <div className='upload__success'>
                                <span className='upload__message'>The video uploaded sucessfully</span>
                                <span className='upload__alert'>Taking you back home in</span>
                                <span className='upload__counter'></span>
                            </div>
                        }
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Upload;