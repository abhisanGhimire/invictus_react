import React, { Component } from "react";
import "./Avatar.css";
import Avatar_list from "./Avatar_list";
import "tachyons";

class Avatar extends Component {
	constructor() {
		super();
		this.state = {
			name: "React App using Tachyons and Google Fonts",
		};
	}
	namechange() {
		this.setState({
			name:
				"React App with state change example and api usage for profile image",
		});
	}
	render() {
		const infoArray = [
			{
				id: 1,
				name: "Abhisan",
				work: "Software Engineer",
			},
			{
				id: 2,
				name: "Aston",
				work: "Frontend Developer",
			},
			{
				id: 3,
				name: "Angel",
				work: "Database Expert",
			},
			{
				id: 4,
				name: "Revert",
				work: "Backend Developer",
			},
		];

		const avatarCardArray = infoArray.map((avatarcard, i) => {
			return (
				<Avatar_list
					key={i}
					id={infoArray[i].id}
					name={infoArray[i].name}
					work={infoArray[i].work}
				/>
			);
		});
		return (
			<div className="mainpage justify-center">
				<h1>{this.state.name} </h1>
				<center>{avatarCardArray}</center>
				<center>
					<button
						className="f6 link dim ba bw0.5 ph3 pv2 mb2 dib black grow"
						onClick={() => this.namechange()}
					>
						Oh! I can show you state usage in React, CLICK ME !
					</button>
				</center>
			</div>
		);
	}
}

export default Avatar;
