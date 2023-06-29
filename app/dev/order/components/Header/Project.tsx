import React, {useState} from "react";
import {useOrderContext, useOrderDispatchContext} from "../../OrderContext";

type Props = {};

export default function Project({}: Props) {
	const order = useOrderContext();
	const dispatch = useOrderDispatchContext();
	const [text, setText] = useState<string>(order.project);

	function handleOnChangeTitle(text: string) {
		setText(text);
	}

	function updateTitle() {
		dispatch({
			header: {
				type: "update",
				key_name: "project",
				text,
			},
		});
	}

	function handleOnKeydownTitle(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key == "Enter") {
			if (text == "") return;
			updateTitle();
		}
	}

	function handleOnFocusTitle(event: React.FocusEvent<HTMLInputElement>) {
		if (text == "") {
			setText(order.project);
		}
		updateTitle();
	}
	return (
		<>
			<input
				type="text"
				value={text}
				onChange={(e) => handleOnChangeTitle(e.target.value)}
				onKeyDown={(e) => handleOnKeydownTitle(e)}
				onBlur={(e) => handleOnFocusTitle(e)}
				className="bg-transparent w-full text-right focus:outline-none"
			/>
		</>
	);
}
