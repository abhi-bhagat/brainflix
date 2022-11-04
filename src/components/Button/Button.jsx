import "./Button.scss";

const Button = (props) => {
	return <button className="header__btn comments__comment-button"> {props.icon}{props.name}</button>;
};

export default Button;
