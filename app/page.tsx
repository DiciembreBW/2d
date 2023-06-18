import Link from "next/link";
import React from "react";

export default function App() {
	return (
		<div className="h-screen grid grid-rows-6">
			<div className="border row-span-4 bg-neutral-200 flex justify-center items-center">
				<div>3D Model</div>
			</div>
			<div className="row-span-1">
				<SlideShirt />
			</div>
			<div className="border row-span-1 flex justify-center items-center bg-emerald-500">
				<div className="flex gap-2">
					<ButtonToPage to="lobby">ทดลองใช้ฟรี!</ButtonToPage>
					<ButtonToPage to="dev">Dev page</ButtonToPage>
				</div>
			</div>
		</div>
	);
}

function SlideShirt() {
	return (
		<div
			className="flex flex-row overflow-x-auto h-full px-6 py-3
				snap-x snap-proximity gap-1 bg-neutral-50">
			<ShirtItem />
			<ShirtItem />
			<ShirtItem />
			<ShirtItem />
			<ShirtItem />
			<ShirtItem />
			<ShirtItem />
			<ShirtItem />
			<ShirtItem />
			<ShirtItem />
			<ShirtItem />
			<ShirtItem />
			<ShirtItem />
		</div>
	);
}

function ShirtItem() {
	return (
		<div
			className="shrink-0 border basis-1/4 md:basis-3/12 xl:basis-1/6 h-full
		snap-center snap-always rounded shadow flex justify-center items-center">
			T
		</div>
	);
}

function ButtonToPage({children, to}: {children: React.ReactNode; to: string}) {
	return (
		<>
			<Link
				href={`/${to}`}
				className="bg-neutral-800 text-neutral-200 px-3 py-2 rounded">
				{children}
			</Link>
		</>
	);
}
