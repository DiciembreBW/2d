import FocusElement from "@/libs/FocusElement";
import TemplateArrayObject from "@/libs/TemplateArrayObject";
import React, {useState} from "react";
import {MaterialType} from "./props";
import {Dialog} from "@headlessui/react";
import ButtonModelSlide from "../../comps/ButtonModalSlide";

type Props = {list: MaterialType[]; setList: Function};

export default function MaterialComponent({list, setList}: Props) {
	return (
		<>
			<MaterialHandle list={list} setList={setList} />
			<PreviewMaterial list={list} />
		</>
	);
}

function PreviewMaterial({list}: {list: MaterialType[]}) {
	return (
		<>
			{list.map(
				(el, index) =>
					el.selected && (
						<div key={index} className="flex justify-between py-3 px-3 gap-3">
							<div className="bg-neutral-800 rounded-lg basis-1/2 aspect-square">
								<div className="flex justify-center items-center h-full ">img</div>
							</div>

							<div className="basis-1/2">
								<div className="font-bold">{el.name}</div>
								<p>{el.description}</p>
							</div>
						</div>
					)
			)}
		</>
	);
}

function MaterialHandle({list, setList}: Props) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="flex justify-between py-3 px-6 border-b-2 border-neutral-700/50">
				<div>เนื้อผ้า</div>
				<div className="ring-neutral-600 ring w-6 h-6 rounded-full flex justify-center items-center">
					<button className="font-bold text-xl" onClick={() => setIsOpen(true)}>
						+
					</button>
				</div>
			</div>
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(true)}
				className="relative z-50">
				<div className="fixed inset-0 bg-neutral-600">
					<Dialog.Panel className="flex overflow-x-auto snap-x snap-mandatory h-full">
						<MaterialItems
							lists={list}
							setList={setList}
							onclick={() => setIsOpen(false)}
						/>
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	);
}

const MaterialItems = TemplateArrayObject<MaterialType>(
	(el, index, feature, props) => (
		<div
			key={index}
			className="snap-center snap-always shrink-0 basis-full flex justify-center items-center">
			<FocusElement
				focus={el.selected}
				onclick={() => {
					feature.select("selected", index);
					props?.onclick!(false);
				}}>
				<div className="text-center">
					<div className="row-span-5 flex justify-center items-center py-3">
						<div className="shadow w-48 h-48 bg-emerald-400 rounded-xl"></div>
					</div>

					<div className="row-span-1 self-end py-3">
						<div className="font-bold">{el.name}</div>
						<div className="text text-neutral-800/50">{el.description}</div>
					</div>
				</div>
				{/* <div className="flex justify-center gap-2 py-6">
					<div className="">
						<button
							onClick={() => props?.onclick!(false)}
							className="px-3 py-2 border rounded border-emerald-500 text-emerald-500 ">
							ปิด
						</button>
					</div>

					<div className="">
						<button className="px-3 py-2 bg-emerald-500 rounded shadow text-neutral-50">
							ตกลง
						</button>
					</div>
				</div> */}
			</FocusElement>
		</div>
	)
);
