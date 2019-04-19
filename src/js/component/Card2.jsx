import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export default class Card2 extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return store.planets.map((item, index) => {
						return (
							<div className="col h-100" key={index}>
								<div className="card h-100">
									<img
										src="http://placehold.it/500x325"
										className="card-img-top"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title">
											{item.name}
										</h5>
										<p className="card-text">
											Populatuon:
											{" " + item.population}
											<br />
											<br />
											Climate:
											{" " + item.climate}
											<br />
											<br />
											Orbital Period:
											{" " + item.orbital_period}
										</p>

										<Link to={"/single2/" + index}>
											<a className="btn btn-outline-primary">
												Learn More
											</a>
										</Link>
										<button
											className="float-right"
											onClick={() =>
												actions.favorites(item.name)
											}>
											<i className="fas fa-heart" />
										</button>
									</div>
								</div>
							</div>
						);
					});
				}}
			</Context.Consumer>
		);
	}
}
