import "./Video.scss";

const Video = ({ whichVideo }) => {
	const posterImage = whichVideo.image;
	const videoLink = whichVideo.video;

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
					<source src="" />
				</video>
			</div>
		</div>
	);
};

export default Video;
