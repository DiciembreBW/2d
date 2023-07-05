import React, {useEffect} from "react";
import PorjectList from "./components/ProjectList";
import ProjectCreate from "./components/ProjectCreate";
import {getProjectItems} from "./libs/api";

type Props = {};

export default async function ProjectPage({}: Props) {
	const res = await getProjectItems("project");
	const data = await res.json();

	return (
		<div>
			<div className="text-3xl"> Project Page</div>
			<ProjectCreate />
			<PorjectList projectItem={data.res} />
		</div>
	);
}
