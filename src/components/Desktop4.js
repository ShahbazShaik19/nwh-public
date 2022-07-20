import React from "react";
import "./Desktop4.css";
import circles from "./circles.svg";
import img from "./images/avtar.png";
// import img from './images/img.png'
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import img6 from "./images/img6.png";
import mask from "./images/mask.png";

function Desktop4() {
	return (
		<div id="desktop4">
			<h3 id="ourteam">OUR TEAM</h3>
			<div id="img_container">
				<div className="img_plus_text">
					<img src={img} className="team_imgs" />
					<div className="description">
						<h3>Dr.D.Manivannan</h3>
						<p>FOUNDER AND CEO</p>
					</div>
				</div>
				<div className="img_plus_text">
					<img src={img} className="team_imgs" />
					<div className="description">
						<h3>Dr.R.John Bosco Balaguru</h3>
						<p>CO-FOUNDER</p>
					</div>
				</div>
				<div className="img_plus_text">
					<img src={img} className="team_imgs" />
					<div className="description">
						<h3>Dr.N.S.Manigandan</h3>
						<p>TECHNICAL ADVISOR</p>
					</div>
				</div>
				<div className="img_plus_text">
					<img src={img} className="team_imgs" />
					<div className="description">
						<h3>S.Mahaarunachalam</h3>
						<p>TECHNICAL ADVISOR</p>
					</div>
				</div>
				<div className="img_plus_text">
					<img src={img} className="team_imgs" />
					<div className="description">
						<h3>Rajkanna</h3>
						<p>TECHNICAL ADVISOR</p>
					</div>
				</div>
				<div className="img_plus_text">
					<img src={img} className="team_imgs" />
					<div className="description">
						<h3>Sriramasubramaniam</h3>
						<p>TECHNICAL ADVISOR</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Desktop4;
