import React, {useRef} from "react";

type Props = {
	label: string;
};

export default function Draft({label}: Props) {
	// penddingRef(ref);
	return (
		<div className="shrink-0 w-1/3 py-5 px-3  rounded-md border snap-center snap-always flex flex-col justify-between">
			<div className="text-center text-3xl py-2">{label}</div>
			<div className="px3 py-2 text-xs text-neutral-400">
				<div>16/06/2023</div>
				<p>13.30 น.</p>
			</div>
		</div>
	);
}
