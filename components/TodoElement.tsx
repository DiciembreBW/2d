import {useState} from "react";

export default function ({
	lists,
	setList,
}: {
	lists: string[];
	setList: Function;
}) {
	const [text, setText] = useState<string>("");

	function onEnter(e: any) {
		if (e.key == "Enter") {
			lists.unshift(text);
			setList(() => [...lists]);

			setText("");
		}
	}
	return (
		<div>
			<input
				className="border"
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				onKeyDown={(e) => {
					onEnter(e);
				}}
			/>
		</div>
	);
}
