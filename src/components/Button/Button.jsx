import "./Button.scss";
import { Link } from "react-router-dom";

const Button = ({ name, icon, goHome }) => {
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
				onClick={goHome}
				className="upload__cancel-button header__btn comments__comment-button"
			>
				{" "}
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
