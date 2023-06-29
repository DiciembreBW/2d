import {Dispatch, createContext, useContext} from "react";
import {ActionType, TeamType} from "./PropType";

export const teamContext = createContext<TeamType>({name: "", members: []});
export const teamDispatchContext = createContext<Dispatch<ActionType>>(
	() => {}
);

export function useTeamContext() {
	return useContext(teamContext);
}

export function useTeamDispatchContext() {
	return useContext(teamDispatchContext);
}
