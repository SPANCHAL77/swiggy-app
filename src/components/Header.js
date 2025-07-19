import { LOGO_URL } from "../utils/constants";

const Header = () => {
	return (
		<div className="header">
			<img
				className="logo-img"
				src={LOGO_URL}
				alt="header-logo"
			/>
			<ul>
				<li>Home</li>
				<li>About Us</li>
				<li>Contact</li>
				<li>Cart</li>
			</ul>
		</div>
	);
};

export default Header;
