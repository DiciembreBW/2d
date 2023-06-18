import Link from "next/link";
import React from "react";

type Props = {
	children: React.ReactNode;
};

export default function DevLayout({children}: Props) {
	return (
		<div className="">
			<div className="nav flex justify-between px-6 py-3 shadow bg-neutral-50">
				<Link href="/dev/form">Form</Link>
			</div>
			<div className="content px-6 py-3">{children}</div>
		</div>
	);
}
