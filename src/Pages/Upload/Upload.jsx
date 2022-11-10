import Header from "../../components/Header/Header";
import uploadThumbnail from "../../assets/images/Upload-video.jpg";
import btnIcon from "../../assets/icons/publish.svg";
import Button from "../../components/Button/Button";
import "./Upload.scss";
import { Link } from "react-router-dom";
const Upload = () => {
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
						<form action="">
							<label className="upload__label" htmlFor="video-title">
								TITLE YOUR VIDEO
							</label>
							<input
								type="text"
								name="video-title"
								id="video-title"
								className="upload__videoTitle"
								placeholder="Add title to you video"
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
							></textarea>
							<div className="upload__cta">
                            <Link to="/" className=" upload__cancel comments__comment-button">
								CANCEL
							</Link>
							<Button
								icon={
									<img
										className="header__buttonIcon upload__button"
										src={btnIcon}
										alt="upload icon"
									></img>
								}
								name="PUBLISH"
							/>
                            </div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Upload;
