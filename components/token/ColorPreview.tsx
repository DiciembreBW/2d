import React from "react";

type Props = {};

export default function Color({}: Props) {
	return (
		<div className="m-3">
			<div className="text-xl">Color</div>
			<div className="flex">
				<div className="m-3  text-center">
					<div className="w-20 h-20 bg-lime-400 rounded"></div>
					<div>Lime 400</div>
				</div>

				<div className="m-3  text-center">
					<div className="w-20 h-20 bg-slate-100 rounded"></div>
					<div>Slate 100</div>
				</div>

				<div className="m-3 text-center">
					<div className="w-20 h-20 bg-neutral-900 rounded"></div>
					<div>Neutral 900</div>
				</div>
			</div>
		</div>
	);
}
