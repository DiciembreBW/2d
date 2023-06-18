import React from "react";

type Props = {disable?: boolean};

export default function ButtonStepperPrimary({disable}: Props) {
	return (
		<div className="m-1">
			<div>
				<button
					className="w-8 h-8 bg-lime-400 rounded-full text-neutral-900 hover:brightness-110 disabled:saturate-50 disabled:brightness-75"
					disabled={disable}>
					+
				</button>
			</div>
		</div>
	);
}
