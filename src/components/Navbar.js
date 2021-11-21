import React from "react";
import style from "./style.css";
import logo from "../images/react-logo.png";
export default function Navbar() {
	return (
		<header className="container">
			<nav className="container">
				<img src={logo} className="logo" alt="react logo" />
				<h4>React Facts</h4>
			</nav>
			<div>
				<h3 className="text-white">React Course - Project 1</h3>
			</div>
		</header>
	);
}
