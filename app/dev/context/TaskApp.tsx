import React, {useReducer, useState} from "react";
import {TaskContext, TaskDispatchContext} from "./TaskContext";
import {ListType, ActionType} from "./Type";
import Button from "@/components/Button";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

type Props = {children: React.ReactNode};

function taskReducer(tasks: ListType[], action: ActionType): ListType[] {
	switch (action.type) {
		case "add": {
			return [...tasks, {text: action.text}];
		}

		case "remove": {
			return tasks.filter((item, index) => index != action.index);
		}
		default:
			return tasks;
	}
}
export default function TaskApp({children}: Props) {
	// const [tasks, dispatch] = useReducer(taskReducer, initalTask);
	const [tasks, dispatch] = useReducer(taskReducer, initalTask);
	// const [] = useReducer()

	return (
		<TaskContext.Provider value={tasks}>
			<TaskDispatchContext.Provider value={dispatch}>
				<div className=" px-3 py-2 rounded-md ring">{children}</div>
				{/* <TaskInput />
				<TaskList /> */}
			</TaskDispatchContext.Provider>
		</TaskContext.Provider>
	);
}

const initalTask: ListType[] = [];
