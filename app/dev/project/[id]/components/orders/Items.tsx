import React from "react";
import {useProjectContext} from "../../context/ProjectContext";

type Props = {};

export default function items({}: Props) {
	const project = useProjectContext();
	return (
		<div>
			<pre> {JSON.stringify(project.order, null, 3)} </pre>
		</div>
	);
}
