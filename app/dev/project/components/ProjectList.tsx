import React from "react";
import {ProjectType} from "../[id]/context/ProjectType";
import Link from "next/link";

type Props = {projectItem: ProjectType[]};

export default function PorjectList({projectItem}: Props) {
	// console.log(typeof projectItem);

	return (
		<div className="grid grid-cols-2 gap-2">
			{projectItem.map((item, index) => (
				<div className="flex justify-between px-3 py-2 bg-neutral-100 rounded">
					<Link key={index} href={`/dev/project/${item.id}`} className="">
						<div>id: {item.id}</div>
						<div>name : {item.name}</div>
					</Link>

					<div className="">...</div>
				</div>
			))}
		</div>
	);
}
