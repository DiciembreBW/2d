import React from "react";

type Props = {};

export default function ({}: Props) {
	return (
		<div className="flex w-fit bg-gray-300  items-center rounded-full p-1 justify-between gap-3">
			<div>
				<button className="w-8 h-8  rounded-full">-</button>
			</div>
			<div>1</div>
			<div>
				<button className="w-8 h-8 rounded-full bg-slate-50">-</button>
			</div>
		</div>
	);
}
