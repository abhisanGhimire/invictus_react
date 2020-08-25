import React from "react";
import "tachyons";

const Avatar_list = (props) => {
	return (
		<div className="avatar_style ma4 bg-light-purple dib pa3 tc grow shadow-5">
			<img
				src={`https://joeschmoe.io/api/v1/${props.name}`}
				alt="Avatar-Image"
			></img>
			<h1>{props.name}</h1>
			<p>{props.work}</p>
		</div>
	);
};

export default Avatar_list;
