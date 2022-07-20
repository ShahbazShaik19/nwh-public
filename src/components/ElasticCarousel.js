import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./ElasticCarousel.css";
import img from "./images/DSC00377 1.png";
import img2 from "./images/grains.png";
import img3 from "./images/G8.png";
import img4 from "./images/IMG-20211007-WA0007.jpg";

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 1 },
	{ width: 768, itemsToShow: 1 },
	{ width: 1200, itemsToShow: 1 },
];

function ElasticCarousel() {
	return (
		<>
			<div
				style={{ width: "100%", textAlign: "center", marginTop: "4vw" }}
				id="elastic_carousel"
			>
				<Carousel
					breakPoints={breakPoints}
					style={{ width: "100%", padding: "0", marginTop: "-4vw" }}
					enableAutoPlay
					loop
				>
					<Item style={{ width: "auto", height: "auto" }}>
						<img src={img2} style={{ borderRadius: "15px" }} />
					</Item>
					<Item style={{ width: "auto", height: "auto" }}>
						<img src={img} style={{ borderRadius: "15px" }} />
					</Item>
					<Item style={{ width: "auto", height: "auto" }}>
						<img src={img3} style={{ borderRadius: "15px" }} />
					</Item>
					<Item style={{ width: "auto", height: "auto" }}>
						<img src={img4} style={{ borderRadius: "15px" }} />
					</Item>
					<Item style={{ width: "auto", height: "auto" }}>
						<img src={img2} style={{ borderRadius: "15px" }} />
					</Item>
					<Item style={{ width: "auto", height: "auto" }}>
						<img src={img4} style={{ borderRadius: "15px" }} />
					</Item>
				</Carousel>
			</div>
		</>
	);
}

export default ElasticCarousel;
