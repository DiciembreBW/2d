import React from "react";

type Props = {disable?: boolean; children: React.ReactNode};

export default function ButtonPrimary({disable, children}: Props) {
	return (
		<div className="m-1">
			<button
				className="w-full px-3 py-2 text-neutral-800 bg-emerald-500 rounded disabled:saturate-50 hover:brightness-110 disabled:brightness-75"
				disabled={disable}>
				{children}
			</button>
		</div>
	);
}
