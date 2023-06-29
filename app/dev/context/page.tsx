"use client";

import React from "react";
import TaskApp from "./TaskApp";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

type Props = {};

export default function ContextPage({}: Props) {
	return (
		<div>
			<TaskApp>
				<div className="text-xl">Task App</div>
				<TaskInput />
				<TaskList />

				<TaskApp>
					<div className="text-xl">Task App inside</div>
					<TaskInput />
					<TaskList />
				</TaskApp>
			</TaskApp>
		</div>
	);
}
