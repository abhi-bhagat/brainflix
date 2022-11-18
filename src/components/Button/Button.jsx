import "./Button.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Button = ({ name, icon }) => {
	const navigate = useNavigate();
	const goHome = (e) => {
		navigate("/");
	};

	if (name === "UPLOAD") {
		return (
			<Link to="/upload" className="header__btn comments__comment-button">
				{icon}
				{name}
			</Link>
		);
	} else if (name === "CANCEL") {
		return (
			<button
				onClick={(e) => {
					goHome(e);
				}}
				className="upload__cancel-button header__btn comments__comment-button"
			>
				{name}
			</button>
		);
	} else {
		return (
			<button type="submit" className="header__btn comments__comment-button">
				{icon}
				{name}
			</button>
		);
	}
};

export default Button;
