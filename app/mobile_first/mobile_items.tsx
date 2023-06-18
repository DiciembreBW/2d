import TemplateArrayObject from "@/libs/TemplateArrayObject";
import {CardsProps} from "@/components/Props";
import {useEffect, useRef} from "react";

export const Cards = TemplateArrayObject<CardsProps>((el, index, feature) => {
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		el.active && ref.current?.scrollIntoView();
	}, []);

	function test() {
		ref.current?.scrollIntoView();
	}
	return (
		<div
			className={`shrink-0 basis-full text-center snap-center snap-always border  items-center ${
				el.active && "bg-slate-600"
			}`}
			ref={ref}>
			<div className="text-3xl">{el.name}</div>
			{/* <button onClick={test} className="px-3 py-2 m-1 border rounded"> */}
			{/* {JSON.stringify(el.active)} */}
			{/* </button> */}
		</div>
	);
});
