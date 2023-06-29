"use client";
import React, {useReducer, useState} from "react";
import Section from "./Section";
import Header from "./Header";
import Button from "@/components/Button";

type Props = {};

type ListType = {
	// id: number;
	text: string;
};

type ActionType = {
	type: "add" | "remove";
	text: string;
	index?: number;
};

function taskReducer(tasks: ListType[], action: ActionType): ListType[] {
	switch (action.type) {
		case "add": {
			return [...tasks, {text: action.text}];
		}

		case "remove": {
			console.log(action.index);

			return tasks.filter((item, index) => index != action.index);
		}
		default:
			return tasks;
	}
}

export default function ContextPage({}: Props) {
	const [tasks, dispatch] = useReducer(taskReducer, initalTask);
	const [text, setText] = useState<string>("");

	function handleTaskAdd() {
		dispatch({
			type: "add",
			text,
		});

		// reset text input task
	}

	function handleTaskRemove(index: number) {
		dispatch({
			type: "remove",
			text: "removed",
			index,
		});
	}

	function handleOnchangeTask(text: string) {
		setText(text);
	}

	function handleUserEnterTaskInput(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key == "Enter") {
			handleTaskAdd();
			setText("");
		}
	}
	return (
		<div>
			<div className="px-3 py-2 text-lg">Task App</div>
			<div className="grid grid-cols-1 gap-3">
				<TaskInput
					text={text}
					onkeydown={(e) => handleUserEnterTaskInput(e)}
					onchange={(e) => handleOnchangeTask(e)}
				/>
				<TaskList
					tasks={tasks}
					onclickRemove={(index) => handleTaskRemove(index)}
				/>
			</div>
		</div>
	);
}

// Task list component
function TaskList({
	tasks,
	onclickRemove,
}: {
	tasks: ListType[];
	onclickRemove: (index: number) => void;
}) {
	return (
		<div className="task-list px-3 py-2">
			{tasks.map((item, index) => (
				<div key={index} className="flex px-3 p-y-2 justify-between">
					<div>{item.text}</div>
					<div className="">
						<Button onclick={() => onclickRemove(index)}>Remove</Button>
					</div>
				</div>
			))}
		</div>
	);
}

// Task input component
function TaskInput({
	text,
	onchange,
	onkeydown,
}: {
	text: string;
	onchange: (text: string) => void;
	onkeydown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
	return (
		<div className="flex">
			<input
				type="text"
				className="w-full p-2 bg-neutral-300 focus:outline-none rounded"
				value={text}
				onChange={(e) => onchange(e.target.value)}
				onKeyDown={(e) => onkeydown(e)}
			/>
		</div>
	);
}

const initalTask: ListType[] = [];
