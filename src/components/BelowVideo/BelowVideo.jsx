import "./BelowVideo.scss";
import VideoDetails from "../VideoDetails/VideoDetails";
import Comments from "../Comments/Comments";
import Playlist from "../Playlist/Playlist";
const BelowVideo = (props) => {
	return (
		<div className="container below-video">
			<div className="below-video__disc">
				{/* {console.log("In below video( pass to details)", props.video)} */}
				<VideoDetails allDetails={props.video} />
				{/* props.video &&  */}
				{<Comments video={props.video} />}
			</div>

			<Playlist allVideos={props.videoArray} />
		</div>
	);
};

export default BelowVideo;
