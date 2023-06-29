import React from "react";
import Label from "./Label";

type Props = {};

export default function Items({}: Props) {
	return (
		<div className="px-3 py-2 ring grid grid-cols-1 gap-2">
			<Label data={{label: "XS", chest: 32, length: 25, amont: 12}} />
			<Label data={{label: "S", chest: 36, length: 27, amont: 12}} />
			<Label data={{amont: 300, chest: 38, length: 32, label: "M"}} />
			<Label data={{amont: 10, chest: 60, length: 32, label: "L"}} />
		</div>
	);
}
