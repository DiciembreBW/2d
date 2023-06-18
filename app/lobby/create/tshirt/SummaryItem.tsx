import React from "react";

type Props = {};

export default function SummaryItem({}: Props) {
	return (
		<div
			className="flex justify-between items-center px-3 py-6 border-b
			last:border-none rounded-b-lg ">
			<div className=" ">สรุป</div>
		</div>
	);
}
