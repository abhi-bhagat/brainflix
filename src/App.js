import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import videoData from "./data/video-details.json";
import BelowVideo from "./components/BelowVideo/BelowVideo";
import { useState } from "react";

function App() {
	console.log("full", videoData);

	/* ************************************************
	 * Note :writing this here so that  the values fetched by the videoData can be accessed and then pass it to the child components
	 * all the values they need.
	 ****************************************** */

	const [video, setVideo] = useState(videoData[0]);
	// console.log("okok", video);

	return (
		<div className="App">
			<Header />
			<Video whichVideo={video} />
			<BelowVideo video={video} videoArray={videoData} />
		</div>
	);
}

export default App;
