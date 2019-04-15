import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import "../../styles/Card.css";

export default class Card extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="container">
				<h1>Characters</h1>
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.characters.map((item, index) => {
								return (
									<div className="col-4 pb-4" key={index}>
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

												<Link
													onClick={() => item.name}
													to="/learnmore"
													className="btn btn-primary">
													Learn More
												</Link>
												<button
													className="float-right btn btn-warning"
													onClick={() =>
														actions.favorites(
															item.name,
															index
														)
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
				</div>
			</div>
		);
	}
}
