import React, {useEffect, useState} from "react";
import {
	useProjectContext,
	useProjectDispatchContext,
} from "../../context/ProjectContext";
import Firebase from "@/libs/firebase/firebase";
import {ProjectType} from "../../context/ProjectType";
import {getProjectItem} from "../../../libs/api";
import PreviewJSON from "../PreviewJSON";

type Props = {};

export default function NameComponent({}: Props) {
	const project = useProjectContext();
	const dispatch = useProjectDispatchContext();
	const [text, setText] = useState<string>("");

	useEffect(() => {
		setText(project.name);
	}, []);

	function handleOnChange(text: string) {
		setText(text);
	}

	function handleKeyDownEnter(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key == "Enter") {
			_updateName(text);
		}
	}

	function onblur(event: React.FocusEvent<HTMLInputElement>) {
		_updateName(text);

		if (text == "") {
			_updateName(project.name);
			setText(project.name);
		}
	}

	function _updateName(value: string) {
		dispatch({
			name: {
				type: "update",
				text: value,
			},
		});
	}

	return (
		<div>
			<div className="px-3 py-2">
				<input
					type="text"
					className="p-2 focus:outline-none text-center w-full bg-transparent
					"
					value={text}
					onChange={(e) => handleOnChange(e.target.value)}
					onKeyDown={(e) => handleKeyDownEnter(e)}
					onBlur={(e) => onblur(e)}
				/>
			</div>
			{/* <button onClick={() => console.log("1234")}>Getxxx</button> */}

			{/* <pre>{JSON.stringify(project, null, 4)}</pre> */}
			{/* {JSON.stringify(project)} */}
		</div>
	);
}
