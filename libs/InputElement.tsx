import {ChangeEvent, KeyboardEvent} from "react";

type PropsRoots = {
	text: string;
	setText: Function;
	onEnter?: (value: string) => any;
	onArrowUp?: (value: string) => any;
};

type Features = {
	onchange: Function;
	onevent: Function;
};

const Config = function Root(
	penddingCallback: (props: PropsRoots, features: Features) => any
) {
	return function (props: PropsRoots) {
		//   Helper
		const events = {
			Enter: () => {
				// console.log(props.text);
				props.onEnter!(props.text);
				props.setText("");
			},
			ArrowUp: () => {
				// console.log("before Arrow up");
				props.onArrowUp!("pass");
				// console.log("after Arrow up");
			},
		};

		// root feature
		const features = {
			onchange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
				props.setText(e.target.value);

				// setText(e.target.value);
			},

			onevent: function (e: KeyboardEvent<HTMLInputElement>) {
				if (e.key == "Enter" && props.onEnter) return events.Enter();
				if (e.key == "ArrowUp" && props.onArrowUp) return events.ArrowUp();
			},
		};

		// render JSX here
		return penddingCallback(props, features);
	};
};

//
export const Input = Config(({text}, feature) => {
	return (
		<div className="border px-3 py-2">
			<input
				type="text"
				className="border"
				onChange={(e) => feature.onchange(e)}
				onKeyDown={(e) => feature.onevent(e)}
				value={text}
			/>
		</div>
	);
});

export const TextArea = Config(({text}, feature) => {
	return (
		<div className="border px-3 py-2">
			<textarea
				className="border"
				onChange={(e) => feature.onchange(e)}
				onKeyDown={(e) => feature.onevent(e)}
				value={text}
			/>
		</div>
	);
});
