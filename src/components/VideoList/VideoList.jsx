import './VideoList.scss'
import Video from '../Video/Video';

const VideoList = (videos) => {
    return (
        <section className='videos'>
            <div className='videos__container'>
                <h3 className='videos__title'>Next Videos</h3>
                {
                    videos.list.map(video => {
                        let {id, image, title, channel} = video;
                        return (
                            <Video 
                                key={id}
                                id={id}
                                poster={image}
                                title={title}
                                channel={channel}
                                playNow={videos.playNow}
                            />
                        )
                    })
                }
            </div>
        </section>
    );
};

export default VideoList;