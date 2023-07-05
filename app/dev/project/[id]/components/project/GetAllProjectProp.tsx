import React from "react";
import {useProjectContext} from "../../context/ProjectContext";

type Props = {};

export default function GetAllProjectProp({}: Props) {
	const project = useProjectContext();
	return (
		<div className="ring">
			<div className="">id : {project.id}</div>
			<div className="">name: {project.name}</div>
			<div className="">
				design :<pre>{JSON.stringify(project.designs, null, 3)}</pre>
			</div>
		</div>
	);
}
