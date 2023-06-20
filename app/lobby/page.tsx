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
					className="w-10 h-10 font-bold rounded-full 
						text-neutral-800 bg-lime-400 flex items-center justify-center">
					+
				</Link>

				<Link href={`/lobby/track`}>ติดตามผล</Link>
			</div>

			{/* tab */}
			<MenuTab />
		</div>
	);
}
