export default function PreviewJSON({
	data,
	title,
}: {
	data: any;
	title: string;
}): React.ReactElement {
	return (
		<div>
			<div className="text-2xl">{title}</div>
			<pre>{JSON.stringify(data, null, 3)}</pre>
		</div>
	);
}
