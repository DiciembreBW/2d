import React from "react";

type ListItemProps = {
	children: React.ReactNode;
	className: string;
	onclick?: () => void;
};
export default function ListItem({
	children,
	className,
	onclick,
}: ListItemProps) {
	return (
		<div
			className={`px-3 py-2  cursor-pointer select-none   ${className}`}
			// className={`bg-neutral-700/40 px-3 py-2 m-0.5 hover:bg-neutral-700/60 active:cursor-pointer`}
			onClick={() => onclick && onclick()}>
			{children}
		</div>
	);
}
