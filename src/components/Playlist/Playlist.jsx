import "./Playlist.scss";
import { Link } from "react-router-dom";

const Playlist = (props) => {
	const allVideos = props.allVideos;

	return (
		<div className="playlist">
			<h2 className="playlist__label">NEXT VIDEOS</h2>
			{allVideos.map((video) => {
				return (
					//card
					<Link to={`/video/${video.id}`} key={video.id}>
						<div
							key={video.id}
							className="playlist__card"
							// onClick={() => props.handleClick(video.id)}
						>
							{/* {console.log(video.id)} */}

							<div className="playlist__image">
								<img
									className="playlist__thumbnail-image"
									src={video.image}
									alt="video thumbnail"
								/>
							</div>
							<div className="playlist__content">
								<h2 className="playlist__title">{video.title}</h2>
								<p className="playlist__channel">{video.channel}</p>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default Playlist;
