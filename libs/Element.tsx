"use client";

type props = {
	// name: string;
	// age: number;
	state: any;
	setState: Function;
	onEnter?: Function;
	onArrowUp?: Function;
	onArrowDown?: Function;
};

function TemplateElement() {
	// Create Feature
	const feature = {
		test: () => console.log("pass"),
	};

	// Create Style
	return function (
		penddingCallback: (
			props: props,
			feature: {test: Function}
		) => React.ReactElement
	) {
		// Before Render

		// Render
		return function Render(props: props) {
			return penddingCallback(props, feature);
		};
	};
}

// end template

const MyStyle = TemplateElement();

export const InputSingle = MyStyle((props, feature) => {
	return (
		<div className="border px-3 py-2">
			<input
				type="text"
				className="border w-full"
				onChange={(e) => props.setState(e.target.value)}
				value={props.state}
				onKeyDown={(e) => {
					if (e.key == "Enter" && props.onEnter) props.onEnter();
					if (e.key == "ArrowUp" && props.onArrowUp) return props.onArrowUp();
					if (e.key == "ArrowDown" && props.onArrowDown) return props.onArrowDown();
				}}
			/>
		</div>
	);
});

export const InputTextArea = MyStyle((props, feature) => {
	return (
		<div className="border px-3 py-2">
			<textarea
				className="w-full border"
				onChange={(e) => props.setState(e.target.value)}
				value={props.state}
				// onKeyDown={(e) => {
				// 	if (e.key == "Enter" && props.onEnter) return props.onEnter();
				// 	if (e.key == "ArrowUp" && props.onArrowUp) return props.onArrowUp();
				// 	if (e.key == "ArrowDown" && props.onArrowDown) return props.onArrowDown();
				// }}
			/>
		</div>
	);
});
