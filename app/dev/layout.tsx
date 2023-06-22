import Link from "next/link";
import React from "react";

type Props = {
	children: React.ReactNode;
};

export default function DevLayout({children}: Props) {
	return (
		<div className="">
			<div className="nav flex justify-between px-3 py-3 shadow ">
				{/* left */}
				<div className="flex gap-3">
					<Link href="/">Home</Link>
					{/* <Link href="/dev/form">Form</Link> */}
					<Link href="/dev/material">Material</Link>
					<Link href="/dev/tokens">Token</Link>
					<Link href="/dev/change">Change</Link>
					<Link href="/dev/booking_sport">Booking</Link>
				</div>

				<div>right</div>
			</div>
			<div className="content px-3 py-3 ">{children}</div>
		</div>
	);
}
