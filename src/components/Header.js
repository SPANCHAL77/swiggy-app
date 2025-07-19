import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
	const [isLogin,setIsLogin]=useState(true);
	const handleLogin = ()=>{
		setIsLogin(!isLogin)
	}
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
				<li><button className="login-btn" onClick={handleLogin}>{isLogin ? "Login": "Logout"}</button></li>
			</ul>
		</div>
	);
};

export default Header;
