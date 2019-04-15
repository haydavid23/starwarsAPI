import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export default class InsideCard extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="card mb-3" style={{ width: "auto" }}>
							<div className="row no-gutters">
								<div className="col-md-4">
									<img
										src="https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"
										className="card-img"
										alt="..."
									/>
								</div>
								<div className="col-md-8">
									<div className="card-body">
										<h5 className="card-title">Title</h5>
										<p className="card-text">
											This is a wider card with supporting
											text below as a natural lead-in to
											additional content. This content is
											a little bit longer.
										</p>
										<p className="card-text">
											<small className="text-muted">
												Last updated 3 mins ago
											</small>
										</p>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
