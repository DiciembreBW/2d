import React from "react";

type Props = {disable?: boolean};

export default function ButtonStepperSecondary({disable}: Props) {
	return (
		<div className="m-1">
			<div>
				<button
					className="w-8 h-8 rounded-full border border-lime-400 text-lime-400
                    disabled:saturate-50 disabled:brightness-75 hover:brightness-110"
					disabled={disable}>
					+
				</button>
			</div>
		</div>
	);
}
