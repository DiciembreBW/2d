import {Dispatch, createContext, useContext} from "react";
import {ProjectActionType, ProjectType} from "./ProjectType";

export const projectContext = createContext<ProjectType>({
	name: "",
	designs: [],
});
export const projectDispatchContext = createContext<
	Dispatch<ProjectActionType>
>(() => {});

export function useProjectContext() {
	return useContext(projectContext);
}

export function useProjectDispatchContext() {
	return useContext(projectDispatchContext);
}
