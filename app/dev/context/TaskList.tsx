import Button from "@/components/Button";
import React, {useContext} from "react";
import {ListType} from "./Type";
import {
	TaskContext,
	TaskDispatchContext,
	useTaskDispatch,
	useTasks,
} from "./TaskContext";

type Props = {};

// Task list component
export default function TaskList({}: Props) {
	// const tasks = useContext(TaskContext);
	const tasks = useTasks();

	// const dispatch = useContext(TaskDispatchContext);
	const dispatch = useTaskDispatch();

	function handleTaskRemove(index: number) {
		dispatch({
			type: "remove",
			text: "removed",
			index,
		});
	}
	return (
		<div className="task-list px-3 py-2">
			{tasks.map((item, index) => (
				<div key={index} className="flex px-3 p-y-2 justify-between">
					<div>{item.text}</div>
					<div className="">
						<Button onclick={() => handleTaskRemove(index)}>Remove</Button>
					</div>
				</div>
			))}
		</div>
	);
}
