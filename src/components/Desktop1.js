import React from "react";

import "./Desktop1.css";
import svgg from "./svgfile.svg";

function Desktop1() {
	return (
		<div id="desktop1">
			<img id="rectangles" src={svgg} />
			<div id="container">
				<div id="title">Bring out the best quality food products</div>
				<div id="content">
					<p>
						NWarehouse designs and develops such loT devices for rapid quality
						assessment of food grains in the warehouses. The device provides has
						an early-stage warning system on quality assessing which improves
						overall productivity of a warehouse. An another major focus of
						NWarehouse is on enabling the food storage facilities across the
						globe in maintaining quality of the food grains through remote
						sensor based monitoring system over IoT.
					</p>
				</div>
				<a href="#">
					<button id="explore_btn">Explore</button>
				</a>
			</div>
		</div>
	);
}
export default Desktop1;
