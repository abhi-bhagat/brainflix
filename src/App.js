import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import videoData from "./data/video-details.json";
import { useState } from "react";

function App() {
	console.log("full", videoData);

	/* ************************************************

* Note : I am writing this here so that I can access the values fetched by the videoData and then pass it to the components
* all the values they need.

****************************************** */

	const [video, setVideo] = useState(videoData[0]);
	console.log("okok", video);

	return (
		<div className="App">
			<Header />
			<Video whichVideo={video}/>
		</div>
	);
}

export default App;
