import Header from "../../components/Header/Header";
import Video from "../../components/Video/Video";
import BelowVideo from "../../components/BelowVideo/BelowVideo";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Home = () => {
	const API_KEY = "11f5f6ec-6f00-4161-a044-722d72159b2b";
	const PLAYLIST_LINK = `https://project-2-api.herokuapp.com/videos?api_key=${API_KEY}`;

	const params = useParams();

	const [video, setVideo] = useState(null);

	// getting video details --> comments, description and thumbnail
	const getVideoDetails = (id) => {
		axios
			.get(
				`https://project-2-api.herokuapp.com/videos/${id}?api_key=${API_KEY}`
			)
			.then((res) => {
				setVideo(res.data);
			})
			.catch((error) => console.log("Error retriving Video Details", error));
	};

	// * FOR GETTING LIST OF ALL VIDEOS !!!!
	// making axios request to get playlist
	// also in this request we are watching params.id and see if there is any id
	// if there is then we display that video
	// if there isn't then we display the default video

	const [videoPlaylist, setVideoPlaylist] = useState(null);
	useEffect(() => {
		axios
			.get(PLAYLIST_LINK)
			.then((res) => {
				if (params.id) {
					getVideoDetails(params.id);
				} else {
					getVideoDetails(res.data[0].id);
				}
				setVideoPlaylist(res.data);
			})
			.catch((error) => console.log(error));
	}, [params.id]);

	return (
		<>
			<Header />

			{video && <Video whichVideo={video} />}

			{video && videoPlaylist && (
				<BelowVideo
					video={video}
					videoArray={videoPlaylist.filter(
						(myVideo) => myVideo.id !== video.id
					)}
				/>
			)}
		</>
	);
};

export default Home;
