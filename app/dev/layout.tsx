import Link from "next/link";
import React from "react";

type Props = {
	children: React.ReactNode;
};

export default function DevLayout({children}: Props) {
	return (
		<div className="">
			<div className="nav flex justify-between px-6 py-3 shadow bg-lime-400">
				{/* left */}
				<div className="flex gap-3">
					<Link href="/dev/form">Form</Link>
					<Link href="/dev/material">Material</Link>
				</div>

				<div>right</div>
			</div>
			<div className="content px-6 py-3 bg-neutral-800 text-neutral-100 ">
				{children}
			</div>
		</div>
	);
}
