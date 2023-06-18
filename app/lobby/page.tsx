import React from "react";
import MenuTab from "./comps/MenuTab";
import Link from "next/link";

type Props = {};

export default function LobbyIndex({}: Props) {
	return (
		<div className=" flex flex-col">
			<div className="flex gap-3 py-1 items-center">
				{/* <CreateTemplate /> */}
				<Link
					href={`/lobby/create`}
					className="w-6 h-6 border-2 rounded-full border-emerald-500
						text-neutral-800 bg-emerald-500 flex items-center justify-center">
					+
				</Link>
				<Link href={`/lobby/track`}>ติดตามผล</Link>
			</div>

			{/* tab */}
			<MenuTab />
		</div>
	);
}
