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
							<div className="container" key={index}>
								<div className="row">
									<div className="card">
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
												{item.gender}
												<br />
												{item.hairColor}
												<br />
												{item.eyeColor}
											</p>

											<Link to="/learnmore">
												<a className="btn btn-primary">
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
							</div>
						);
					});
				}}
			</Context.Consumer>
		);
	}
}
