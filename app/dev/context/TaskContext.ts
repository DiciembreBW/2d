import {ActionType, ListType} from "./Type";
import {Dispatch, createContext, useContext} from "react";

export const TaskContext = createContext<ListType[]>([]);
export const TaskDispatchContext = createContext<Dispatch<ActionType>>(
	() => {}
);

export function useTasks() {
	return useContext(TaskContext);
}

export function useTaskDispatch() {
	return useContext(TaskDispatchContext);
}
