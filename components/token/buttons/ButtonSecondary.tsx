import React from "react";

type Props = {disable?: boolean; children: React.ReactNode};

export default function ButtonPrimary({disable, children}: Props) {
	return (
		<div className="m-1">
			<button
				className="px-3 py-2 text-emerald-500 border border-emerald-500 rounded disabled:saturate-50 disabled:brightness-75
				hover:brightness-110
				"
				disabled={disable}>
				{children}
			</button>
		</div>
	);
}
