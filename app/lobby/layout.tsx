import Link from "next/link";
import React, {Fragment} from "react";

type Props = {children: React.ReactNode};

export default function LobbyLayout({children}: Props) {
	return (
		<div>
			<div
				className="px-6 py-3 flex items-center
			justify-between shadow mb-1 bg-neutral-50">
				<Link href={`/lobby`}>Logo</Link>
				<div className="">
					<div
						className="ring-1 ring-neutral-800 w-9 h-9 flex justify-center items-center
                    rounded-full text-center">
						img
					</div>
				</div>
			</div>
			<div className="m-1 px-3 py-3">
				<div>{children}</div>
			</div>
		</div>
	);
}
