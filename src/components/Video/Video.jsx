import "./Video.scss";

const Video = (props) => {
	const posterImage = props.whichVideo.image;
	const videoLink = props.whichVideo.video;

	return (
		<div className="video-container">
			<div className="container">
				<video
					className="videoFrame"
					poster={posterImage}
					width="100%"
					height="700px"
					controls
				>
					<source src={videoLink} />
				</video>
			</div>
		</div>
	);
};

export default Video;
