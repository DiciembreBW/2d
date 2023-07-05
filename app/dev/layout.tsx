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
				<div className="flex flex-wrap gap-3">
					{/* <Link href="/">Home</Link> */}
					{/* <Link href="/dev/form">Form</Link> */}
					{/* <Link href="/dev/material">Material</Link>
					<Link href="/dev/tokens">Token</Link>
					<Link href="/dev/change">Change</Link>
					<Link href="/dev/booking_sport">Booking</Link>
					<Link href="/dev/system_design">System</Link> */}
					{/* <Link href="/dev/team">Team</Link>
					<Link href="/dev/match">Match</Link> */}
					{/* <Link href="/dev/real">Realtime</Link> */}
					<Link href="/dev/reducer">Reducer</Link>
					<Link href="/dev/context">Context</Link>
					<Link href="/dev/order">Order</Link>
					<Link href="/dev/project">Project</Link>
				</div>

				{/* <div>right</div> */}
			</div>
			<div className="content px-3 py-3 ">{children}</div>
		</div>
	);
}
