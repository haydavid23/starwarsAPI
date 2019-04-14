import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img
							src="https://cdn.iconscout.com/icon/free/png-256/starwars-5-555964.png"
							style={{ width: "60px" }}
						/>
					</span>
				</Link>
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Dropdown button
					</button>
					<div
						className="dropdown-menu"
						aria-labelledby="dropdownMenuButton">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.favoritesArray.map(
									(item, index) => {
										return (
											<a
												key={index}
												className="dropdown-item"
												href="#">
												{item}
											</a>
										);
									}
								);
							}}
						</Context.Consumer>
					</div>
				</div>
			</nav>
		);
	}
}
