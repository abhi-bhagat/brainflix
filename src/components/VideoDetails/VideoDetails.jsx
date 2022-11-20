import "./VideoDetails.scss";
import HumanTime from "../Utility/HumanTime";
import viewIcon from "../../assets/icons/views.svg";
import likesIcon from "../../assets/icons/likes.svg";
import { useRef } from "react";

const VideoDetails = ({ allDetails, likesHandler }) => {
	const ref = useRef();

	const myData = allDetails;

	const day = HumanTime(myData.timestamp);

	return (
		<div className=" video-details">
			<h1 className="video-details__title">{myData.title}</h1>
			<div className="video-details__subTitle">
				<div className="video-details__subTitle--left">
					<h2 className="video-details__channel">By {myData.channel}</h2>
					<p className="video-details__date">{day}</p>
				</div>
				<div className="video-details__subTitle--right">
					<p className="video-details__views">
						<img
							className="video-details__spanImg"
							src={viewIcon}
							alt="views icon"
						/>

						{myData.views}
					</p>
					<p
						ref={ref}
						className="video-details__likes"
						onClick={() => {
							const classThere = ref.current.classList.contains("likes");
							ref.current.classList.toggle("likes");

							likesHandler(myData.id, classThere);
						}}
					>
						<img
							className="video-details__spanImg"
							src={likesIcon}
							alt="likes icon"
						/>

						{myData.likes}
					</p>
				</div>
			</div>
			<p className="video-details__description">{myData.description}</p>
		</div>
	);
};

export default VideoDetails;
