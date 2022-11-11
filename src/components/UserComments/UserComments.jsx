import "./UserComments.scss";
import HumanTime from "../Utility/HumanTime";
const UserComments = (props) => {
	const allComments = props.comments;
	allComments.reverse();

	return (
		<div className="comments__postedComments">
			{allComments.map((comment) => {
				return (
					<div key={comment.id} className="comments__card">
						<div className="comments__avatar comments__user-avatar">
							<div className="comments__avatarImg"></div>
						</div>
						<div className="comments__info">
							<div className="comments__heading">
								<h2 className="comments__uname">{comment.name}</h2>

								<p className="comments__date">
									{" "}
									{HumanTime(comment.timestamp)}
								</p>
							</div>
							<div className="comments__text">{comment.comment}</div>
							<div className="comments__delete">
								<div
									onClick={() => {
										props.deleteHandler(comment.id, props.videoId);
									}}
									className="comments__delete-icon"
								>
									❌
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default UserComments;
