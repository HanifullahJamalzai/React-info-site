import React from "react";
import logo from "../images/react-logo.png";

function Header() {
	return (
		<header>
			<nav>
				{/* <img src="./react-logo.png" alt="React logo" width="40px" /> */}
				<img src="logo192.png" className="nav-logo" alt="React logo" />
				<ul className="nav-items">
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
			<hr />
		</header>
	);
}

export default Header;
