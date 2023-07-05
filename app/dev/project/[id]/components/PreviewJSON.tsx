import React from "react";
import {useProjectContext} from "../context/ProjectContext";

type Props = {tab?: number};

export default function PreviewJSON({tab}: Props) {
	const project = useProjectContext();
	return <pre>{JSON.stringify(project, null, tab || 3)}</pre>;
}
