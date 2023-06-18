import React from "react";

type Props = {disable?: boolean};

export default function Button({disable}: Props) {
	return (
		<div className="m-1">
			<button
				className="px-3 py-2 text-slate-100 border border-slate-100 rounded disabled:saturate-50 disabled:brightness-75"
				disabled={disable}>
				button
			</button>
		</div>
	);
}
