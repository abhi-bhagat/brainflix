import "./Comments.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import Button from "../Button/Button";
import commentIcon from "../../assets/icons/add_comment.svg";

import UserComments from "../UserComments/UserComments";
const Comments = (props) => {
	// console.log("comments props ", props.video.comments);
	const comments = props.video.comments;
	const commentLength = comments.length;
	return (
		<div className="comments">
			<h2 className="comments__count">{commentLength} Comments</h2>

			<div className="comments__new-comment">
				<div className="comments__avatar ">
					<img className="avatar" src={avatar} alt="avatar img" />
				</div>
				<form className="comments__form" action="#">
					<label htmlFor="comment" className="comments__input-label">
						JOIN THE CONVERSATION
					</label>

					<div className="comments__input-container">
						<textarea
							name="comment"
							id="comment"
							className="comments__input"
							cols="50"
							rows="5"
							placeholder="Add a new comment"
						></textarea>
						<Button
							icon={
								<img
									className="header__buttonIcon "
									src={commentIcon}
									alt="abc"
								></img>
							}
							name="COMMENT"
						/>
					</div>
				</form>
			</div>

			<UserComments comments={comments} />
		</div>
	);
};

export default Comments;
