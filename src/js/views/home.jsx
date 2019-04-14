import React from "react";

import Card from "../component/Card.jsx";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<Card />
			</div>
		);
	}
}
