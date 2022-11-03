import "./Button.scss";

const Button = (props) => {
	return <button className="header__btn"> {props.icon}{props.name}</button>;
};

export default Button;
