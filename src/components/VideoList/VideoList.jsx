import './VideoList.scss'

import { Link } from 'react-router-dom';

import Video from '../Video/Video'

const VideoList = (videos) => {
    return (
        <section className='videos'>
            <div className='videos__container'>
                <h3 className='videos__title'>Next Videos</h3>
                {
                    videos.list.map(video => {
                        let {id, image, title, channel} = video;
                        return (
                            <Link className='video' key={id} to={`/video/${id}`}>
                                <Video 
                                    key={id}
                                    id={id}
                                    poster={image}
                                    title={title}
                                    channel={channel}
                                    playNow={videos.playNow}
                                />
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default VideoList;