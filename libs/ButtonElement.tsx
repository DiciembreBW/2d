export function Button({
	name,
	onclick,
	state,
}: {
	name: string;
	onclick: Function;
	state?: any;
}): React.ReactElement {
	// if (state == undefined) {
	// 	return <div></div>;
	// }
	return (
		<div>
			<button
				className="border px-3 py-2 active:bg-slate-200"
				onClick={() => onclick()}>
				{name}
			</button>
		</div>
	);
}
