import React, {useEffect, useRef} from "react";

type Props = {
	children: React.ReactNode;
	focus: boolean;
	onclick: Function;
};

export default function FocusElement({children, focus, onclick}: Props) {
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
		focus ? ref.current?.scrollIntoView({block: "nearest"}) : false;
		// focus ? ref.current?.scrollLeft : false;
	}, []);
	return (
		<div
			ref={ref}
			className={focus ? "bg-lime-400" : ""}
			onClick={() => onclick()}>
			{children}
		</div>
	);
}
