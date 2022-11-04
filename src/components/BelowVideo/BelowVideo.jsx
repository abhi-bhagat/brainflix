import "./BelowVideo.scss";
import VideoDetails from "../VideoDetails/VideoDetails";
import Comments from "../Comments/Comments";
import Playlist from "../Playlist/Playlist";
const BelowVideo = (props) => {
	return (
		<div className="container below-video">
            <div className="below-video__disc">
            <VideoDetails allDetails={props.video} />
			<Comments video={props.video} />
            </div>
			
			<Playlist allVideos={props.videoArray} handleClick={props.handleClick}/>
		</div>
	);
};

export default BelowVideo;
