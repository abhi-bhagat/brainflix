import "./Header.scss";
import logo from "../../assets/logo/BrainFlix-logo.svg";
import Button from "../Button/Button";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import searchIcon from "../../assets/icons/search.svg";

const Header = () => {
	const placeHolder = `Search`;
	return (
		<div className="container header">
			<div className="header__logo">
				<a href="./App.js">
					<img className="header__logoImg" src={logo} alt="site logo" />
				</a>
			</div>
			<div className="header__form">
				<div className="header__search-container">
					{" "}
					<img
						className="header__search-icon"
						src={searchIcon}
						alt="search icon"
					/>
					<input
						type="text"
						name="search"
						id="search"
						placeholder={placeHolder}
						className="header__search inputfield"
						autoComplete="off"
					/>
				</div>

				<Button
					icon={
						<img
							className="header__buttonIcon"
							src={uploadIcon}
							alt="upload icon"
						></img>
					}
					name="UPLOAD"
				/>
				<div className="header__avatar-container">
					<img className="avatar" src={avatar} alt="avatar img" />
				</div>
			</div>
		</div>
	);
};

export default Header;
