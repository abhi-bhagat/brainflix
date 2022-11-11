import "./Button.scss";
import { Link } from "react-router-dom";

const Button = (props) => {
	if (props.name === "UPLOAD") {
		return (
			<Link to="/upload" className="header__btn comments__comment-button">
				{props.icon}
				{props.name}
			</Link>
		);
	} else {
		return (
			<button type="submit" className="header__btn comments__comment-button">
				{props.icon}
				{props.name}
			</button>
		);
	}
};

export default Button;
