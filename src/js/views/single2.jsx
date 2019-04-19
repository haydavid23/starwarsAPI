import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Single2 extends React.Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store }) => {
						return (
							<div>
								<div className="row">
									<div className="col">
										<img
											className="w-75 p-3"
											src="https://vignette.wikia.nocookie.net/starwars/images/1/11/Bespin-SWCT.png/revision/latest?cb=20181010054421"
										/>
									</div>
									<div className="col">
										<h1>
											{
												store.planets[
													this.props.match.params
														.theid
												].name
											}
										</h1>
										<h5>
											{
												store.planets[
													this.props.match.params
														.theid
												].text
											}
										</h5>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>

				<Link to="/">
					<span
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Back home
					</span>
				</Link>
			</div>
		);
	}
}

Single2.propTypes = {
	match: PropTypes.object
};
