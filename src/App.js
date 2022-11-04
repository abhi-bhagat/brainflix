import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import videoData from "./data/video-details.json";
import BelowVideo from "./components/BelowVideo/BelowVideo";
import { useState } from "react";

function App() {
	/* ************************************************
	 * Note :writing this here so that  the values fetched by the videoData can be accessed and then pass it to the child components
	 * all the values they need.
	 ****************************************** */

	const [video, setVideo] = useState(videoData[0]);
	//click handler grabbing id from clicked card( in PLaylist )
	const handleClick = (id) => {
		//*after this has returned some id will we check it with the given array

		const found = videoData.find((video) => video.id === id);
		console.log("Video found", found);
		console.log("Initial video", video);

		//setVideo in this function
		// * Will get ID of clicked card and then fetch it from array here and then set it using setVideo
		setVideo(found);
	};

	return (
		<div className="App">
			<Header />
			<Video whichVideo={video} />
			<BelowVideo
				video={video}
				videoArray={videoData.filter((myVideo) => myVideo.id !== video.id)}
				handleClick={handleClick}
			/>
		</div>
	);
}

export default App;
