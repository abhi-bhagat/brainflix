import Header from "../../components/Header/Header";
import uploadThumbnail from "../../assets/images/Upload-video.jpg";
import btnIcon from "../../assets/icons/publish.svg";
import Button from "../../components/Button/Button";
import "./Upload.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Upload = () => {
	const API_KEY = "11f5f6ec-6f00-4161-a044-722d72159b2b";
	const PLAYLIST_LINK = `http://localhost:8080/videos`;

	// assigning and checking state variables
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};
	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};
	const checkLength = () => {
		const len = description.length;
		if (len > 100) {
			return true;
		} else {
			return false;
		}
	};
	const notify = () => {
		toast.success("Video uploaded successfully!", {
			position: toast.POSITION.TOP_CENTER,
		});
	};
	// const goHome = (e) => {
	// 	e.preventDefault();
	// 	console.log("hmmm");
	// 	navigate("/");
	// };
	const errMessage = () => {
		toast.error("Description should be more than 100 letters!", {
			position: toast.POSITION.TOP_CENTER,
		});
	};

	const navigate = useNavigate();
	const uploadVideo = (e) => {
		e.preventDefault();
		const videoDetails = {
			title: title,
			description: description,
		};

		if (checkLength()) {
			axios
				.post(PLAYLIST_LINK, videoDetails)
				.then((res) => {
					notify();
					setTimeout(() => {
						navigate("/");
					}, 2500);
				})
				.catch((error) => console.log(`Error uploading video`, error));
		} else {
			errMessage();
		}
	};
	return (
		<>
			<Header />
			<div className="container upload">
				<h1 className="upload__title">Upload Video</h1>
				<div className="upload__disp">
					<div className="upload__image">
						<label htmlFor="">VIDEO THUMBNAIL</label>
						<img src={uploadThumbnail} alt="thumbnail" />
					</div>
					<div className="upload__form">
						<form action="" onSubmit={uploadVideo}>
							<label className="upload__label" htmlFor="video-title">
								TITLE YOUR VIDEO
							</label>
							<input
								type="text"
								name="video-title"
								id="video-title"
								className="upload__videoTitle"
								placeholder="Add title to you video"
								required
								onChange={handleTitleChange}
								value={title}
							/>
							<label className="upload__label" htmlFor="video-desc">
								ADD A VIDEO DESCRIPTION
							</label>
							<textarea
								name="video-desc"
								id="video-desc"
								cols="30"
								rows="10"
								className="upload__videoDesc"
								placeholder="Add description to your video"
								required
								onChange={handleDescriptionChange}
								value={description}
							></textarea>
							<div className="upload__cta">
								{/* // TODO : change it to button */}

								<Button
									name="CANCEL"
									className=" upload__cancel comments__comment-button"
								/>
								<Button
									type="submit"
									icon={
										<img
											className="header__buttonIcon upload__button"
											src={btnIcon}
											alt="upload icon"
										></img>
									}
									name="PUBLISH"
								/>
								<ToastContainer autoClose={1000} />
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Upload;
