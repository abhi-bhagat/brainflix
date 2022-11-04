import "./Button.scss";

const Button = (props) => {
	return <button className="header__btn comments__upload-button"> {props.icon}{props.name}</button>;
};

export default Button;
