import './Video.scss'


const Video = (props) => {


    const posterImage=props.whichVideo.image;
    const videoLink = props.whichVideo.video;
    console.log('my poster' ,videoLink)
	return (
		<div className="video-container">
			<div className="container">
            <video className="videoFrame" poster = {posterImage} width="100%" controls>
                <source src={videoLink} />
            </video>
            </div>
		</div>
	);
};

export default Video;

