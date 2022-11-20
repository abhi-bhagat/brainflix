import "./BelowVideo.scss";
import VideoDetails from "../VideoDetails/VideoDetails";
import Comments from "../Comments/Comments";
import Playlist from "../Playlist/Playlist";
const BelowVideo = ({
	video,
	deleteHandler,
	commentHandler,
	videoArray,
	likesHandler,
}) => {
	return (
		<div className="container below-video">
			<div className="below-video__disc">
				<VideoDetails allDetails={video} likesHandler={likesHandler} />

				{
					<Comments
						video={video}
						deleteHandler={deleteHandler}
						commentHandler={commentHandler}
					/>
				}
			</div>

			<Playlist allVideos={videoArray} />
		</div>
	);
};

export default BelowVideo;
