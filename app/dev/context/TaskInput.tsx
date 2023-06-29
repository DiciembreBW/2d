import React, {useContext, useState} from "react";
import {TaskContext, TaskDispatchContext} from "./TaskContext";

type Props = {
	// text: string;
	// onchange: (text: string) => void;
	// onkeydown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

// Task input component
export default function TaskInput({}: Props) {
	const [text, setText] = useState<string>("");

	const dispatch = useContext(TaskDispatchContext);

	function handleTaskAdd() {
		dispatch({
			type: "add",
			text,
		});

		// reset text input task
	}

	function handleOnchangeTask(text: string) {
		setText(text);
	}

	function handleUserEnterTaskInput(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key == "Enter") {
			if (text == "") return;
			handleTaskAdd();
			setText("");
		}
	}
	return (
		<div className="flex px-3 py-2">
			<input
				type="text"
				className="w-full p-2 bg-neutral-300 focus:outline-none rounded"
				value={text}
				onChange={(e) => handleOnchangeTask(e.target.value)}
				onKeyDown={(e) => handleUserEnterTaskInput(e)}
			/>
		</div>
	);
}
