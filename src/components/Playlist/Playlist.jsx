import "./Playlist.scss";

const Playlist = (props) => {
	// console.log("playlist", props.allVideos);
	const allVideos = props.allVideos;

	// * below is the function that was passed from the parent container that will take the id so that we can work on it
	// props.handleClick();

	// *in order to make above function work we have to first get the id of clicked card. in order to do that we will add click listener to cards and then pass the id of the div as we are already getting that id from the video that we have passed
	
	return (
		<div className="playlist">
			<h2 className="playlist__label">NEXT VIDEOS</h2>
			{allVideos.map((video) => {
				return (
					//card
					<div
						key={video.id}
						className="playlist__card"
						onClick={() => props.handleClick(video.id)}
					>
						{/* {console.log(video.id)} */}
						<div className="playlist__image">
							<img src={video.image} alt="video thumbnail" />
						</div>
						<div className="playlist__content">
							<h2 className="playlist__title">{video.title}</h2>
							<p className="playlist__channel">{video.channel}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Playlist;
