import './Playlist.scss'    

const Playlist =(props)=>{
    console.log("playlist",props.allVideos);
    const allVideos = props.allVideos;
return(
    <div className=" playlist">
        {
            allVideos.map((video)=>{

                return(

                    <div key = {video.id} className="playlist__card">
                        {console.log(video.id)}
                        <div className="playlist__image">
                            <img src={video.image} alt="video thumbnail" />
                        </div>
                        <div className="playlist__content">
                            <h2 className="playlist__title">{video.title}</h2>
                            <p className="playlist__channel">{video.channel}</p>
                        </div>
                    </div>
                );
            })
        }
    </div>
)
}

export default Playlist;