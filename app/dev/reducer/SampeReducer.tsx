"use client";
import Button from "@/components/Button";
import React, {ReducerWithoutAction, useReducer} from "react";
type Props = {};

type TaskType = {
	name: string;
};

type ActionType = {
	name: string;
	type: "add" | "remove" | "update";
};

const init: TaskType[] = [{name: "woradet"}, {name: "jpt"}];
function taskReducer(task: TaskType[], action: ActionType): TaskType[] {
	switch (action.type) {
		case "add": {
			console.log("added");
		}
		default: {
			return task;
		}
	}
}
export default function page({}: Props) {
	// useReducer<ReducerWithoutAction<TaskType>>(taskReducer, init);
	const [tasks, dispatch] = useReducer(taskReducer, init);

	function handleAddTask() {
		dispatch({
			type: "add",
			name: "test",
		});
	}

	return (
		<div>
			<pre>{JSON.stringify(tasks, null, 3)}</pre>

			<Button onclick={handleAddTask}>Click</Button>
		</div>
	);
}
