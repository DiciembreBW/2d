import Link from "next/link";

export default function ({children}: {children?: React.ReactNode}) {
	return (
		<div className="container bg-slate-300">
			<div className="flex flex-row w-4/6 mx-auto">
				<div className="grid grid-cols-3 gap-3">
					<Link href={"/"}>Home</Link>
					<Link href={"/test"}>Test</Link>
				</div>

				<div className="grid grid-cols-3">{children}</div>
			</div>
		</div>
	);
}
