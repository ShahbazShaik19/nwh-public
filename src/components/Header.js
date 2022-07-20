import React from "react";
import logo from "./images/nwh_bg.svg";
import { slide as Menu } from "react-burger-menu";
import "./Menu.css";
import "./Header.css";
import "../responsive.css";

function Header() {
	return (
		<>
			<Menu right>
				<a id="home" className="menu-item" href="/">
					Home
				</a>
				<a id="about" className="menu-item" href="/about">
					About
				</a>
				<a id="contact" className="menu-item" href="/contact">
					Contact
				</a>
				{/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
			</Menu>
			<div className="header">
				<div>
					<img src={logo} />
					<div>NWarehouse Pvt. Ltd.</div>
					{/* <img src={nwh_bg} id="blurry" /> */}
				</div>
				<ul id="top_list">
					<li>GALLERY</li>
					<li>CONTACT</li>
					<li>PRODUCTS</li>
					<li>ABOUT US</li>
				</ul>
			</div>
		</>
	);
}
export default Header;
