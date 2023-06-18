import React from "react";

type Props = {disable?: boolean};

export default function ButtonDark({disable}: Props) {
	return (
		<div className="m-1">
			<button
				className="px-3 py-2 bg-neutral-900 text-slate-100 rounded
            disabled:saturate-50 disabled:brightness-50 hover:brightness-150"
				disabled={disable}>
				Button
			</button>
			{/* <div className="bu"></div> */}
		</div>
	);
}
