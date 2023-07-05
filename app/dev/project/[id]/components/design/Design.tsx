import React from "react";
import DesignItems from "./Items";
import Create from "./Create";

type Props = {};

export default function Design({}: Props) {
	return (
		<div className="grid grid-cols-1">
			<Create />
			<DesignItems />
		</div>
	);
}
