"use client";
import React, {useEffect, useRef} from "react";

type Props = {};

export default function CardMobile({}: Props) {
	const el = useRef<HTMLDivElement>(null);

	// useEffect(() => {
	// 	el.current?.scrollIntoView();
	// }, []);

	function test() {
		el.current?.scrollIntoView();
	}
	return (
		<div className="border shrink-0 basis-full bg-slate-100" ref={el}>
			{/* <button onClick={test} className="px-3 py-2 m-1 border rounded">
				Click
			</button> */}
		</div>
	);
}
