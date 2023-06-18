import React from "react";

type Props = {onclick: Function; disable?: boolean; children: React.ReactNode};

export default function ButtonPrimaryCircle({
	onclick,
	disable,
	children,
}: Props) {
	return (
		<button
			className="w-full h-full border rounded-full border-emerald-500 text-emerald-500
							disabled:bg-slate-200 disabled:text-black/50 disabled:border-slate-200"
			disabled={disable}
			onClick={() => onclick()}>
			{children}
		</button>
	);
}
