import React, {useReducer} from "react";
import {projectContext, projectDispatchContext} from "./ProjectContext";
import ProjectReducer from "./ProjectReducer";
import {ProjectType} from "./ProjectType";

type Props = {children: React.ReactNode; init_value: ProjectType};

export default function ProjectProvider({children, init_value}: Props) {
	const [projects, dispatch] = useReducer(ProjectReducer, init_value);
	return (
		<projectContext.Provider value={projects}>
			<projectDispatchContext.Provider value={dispatch}>
				{children}
			</projectDispatchContext.Provider>
		</projectContext.Provider>
	);
}
