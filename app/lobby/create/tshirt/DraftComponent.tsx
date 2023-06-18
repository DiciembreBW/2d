"use client";
import React, {useState} from "react";
import {DraftType} from "./props";
import TemplateArrayObject from "@/libs/TemplateArrayObject";

import ButtonModelSlide from "../../comps/ButtonModalSlide";
import FocusElement from "@/libs/FocusElement";

type Props = {};

export default function DraftComponent({}: Props) {
	const [lists, setList] = useState<DraftType[]>([
		{name: "Draft-1", designer: "boyd", status: false},
		{name: "Draft-2", designer: "Nuii", status: true},
		{name: "Draft-3", designer: "jub", status: false},
	]);
	return (
		<>
			<div className="grid grid-cols-1 content-center gap-2">
				<div className="">
					<div className="flex justify-center items-center aspect-[3/4]">
						<text className="text-3xl font-bold">Preview</text>
					</div>
				</div>

				<div
					className="flex overflow-x-auto snap-x
								snap-mandatory gap-2 rounded-lg shadow h-fit ">
					<DraftHandler lists={lists} setList={setList} />
				</div>
			</div>
		</>
	);
}

const DraftHandler = TemplateArrayObject<DraftType>((el, index, feature) => (
	<div
		key={index}
		className=" shrink-0 basis-full flex flex-col  gap-2 snap-center snap-always
        bg-neutral-50 rounded-lg justify-between ">
		<FocusElement
			focus={el.status}
			onclick={() => feature.select("status", index)}>
			<div className="flex justify-between gap-3 h-full  p-4 border-b rounded-lg">
				<div className="">
					<div className="font-bold">{el.name}</div>
					<div className="text-neutral-800/50">Senior Graphic design </div>

					<div>
						<p>Lorem ipsum, dolor sit amet consectetur .</p>
					</div>
				</div>
				<div className="flex">
					<div className="ring h-8 w-8 rounded-full"></div>
				</div>
			</div>
		</FocusElement>
	</div>
));
