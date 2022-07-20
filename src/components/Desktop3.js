import React from "react";
import "./Desktop3.css";
import circles from "./circles.svg";
import about_us from "./images/about_us.png";

function Desktop3() {
	return (
		<div id="desktop3">
			<img id="circles" src={circles} />
			<div id="aboutus">
				<h3>ABOUT US</h3>
				<p>
					NWarehouse is a tech start-up that focuses on quality assessment of
					food grains and system development for prediction of its shelf-life.
					Due to food grain wastage in the storage structures of dynamic
					warehouses, the unique solution proposed by NWarehouse aims to fill up
					the gap of identifying food grains damage at the storage space itself
					particularly focussing on paddy and other food grains etc.It
					facilitates in reducing wastage through early annunciations for
					channelized distribution of food grains, thus developing sustainable
					business models for its customers using current loT technologies.
				</p>
			</div>
			<a href="#">
				<button id="our_products_btn">Our Products →</button>
			</a>
			<img src={about_us} id="about_us_img" />
		</div>
	);
}
export default Desktop3;
