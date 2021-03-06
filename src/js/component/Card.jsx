import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export default class Card extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return store.characters.map((item, index) => {
						return (
							<div className="col h-100 p-3" key={index}>
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
											Gender:
											{" " + item.gender}
											<br />
											<br />
											Hair Color:
											{" " + item.hairColor}
											<br />
											<br />
											Eye Color:
											{" " + item.eyeColor}
										</p>

										<Link to={"/single/" + index}>
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
