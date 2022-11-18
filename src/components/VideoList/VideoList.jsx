import './VideoList.scss'

import { Link } from 'react-router-dom';
import Video from '../Video/Video'

const VideoList = (videos) => {

    console.log(videos);
    
    const scrollToFeaturedVid = () => {
        window.scrollTo(
            {
                top: 0,
                left: 0,
                behavior: 'smooth'
            }
        );
    }
    
    return (
        <section className='videos'>
            <div className='videos__container'>
                <h3 className='videos__title'>Next Videos</h3>
                {
                    videos.list.map(video => {
                        let {id, image, title, channel} = video;
                        return (
                            <Link 
                                className='video'
                                key={id}
                                to={`/video/${id}`}
                                onClick={scrollToFeaturedVid}>
                                <Video poster={image} title={title} channel={channel} />
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default VideoList;