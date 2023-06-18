"use client";
import {Dialog} from "@headlessui/react";
import React, {useState} from "react";

type Props = {};

export default function ButtonModalSlide({}: Props) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button className="font-bold text-xl" onClick={() => setIsOpen(true)}>
				+
			</button>
			<DialogTemplates isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	);
}

function DialogTemplates({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: Function;
}) {
	return (
		<Dialog
			open={isOpen}
			onClose={() => setIsOpen(true)}
			className="relative z-50">
			<div
				className="fixed inset-0  bg-neutral-200 
           					">
				<Dialog.Panel className="grid grid-rows-6 h-screen ">
					<div className="row-span-6 flex flex-row overflow-x-auto snap-x snap-mandatory">
						<TemplateItem setIsOpen={setIsOpen} />
						<TemplateItem setIsOpen={setIsOpen} />
						<TemplateItem setIsOpen={setIsOpen} />
						<TemplateItem setIsOpen={setIsOpen} />
						<TemplateItem setIsOpen={setIsOpen} />
						<TemplateItem setIsOpen={setIsOpen} />
					</div>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
}

function TemplateItem({setIsOpen}: {setIsOpen: Function}) {
	return (
		<div
			className="shrink-0  rounded shadow
						 items-center pt-6 bg-neutral-50
						gap-2 basis-full snap-center snap-always">
			{/* preview */}
			<div
				className="text-center w-full h-3/4 rounded-t
				 grid grid-rows-6
							">
				{/* Model Preview */}
				<div className="row-span-5 flex justify-center items-center">
					<div className="shadow w-48 h-48 bg-emerald-400 rounded-xl"></div>
				</div>

				{/* Model Description */}
				<div className="row-span-1 self-end pb-6">
					<div className="font-bold">แขนสั้น คอกลม</div>
					<div className="text text-neutral-800/50">Description</div>
				</div>

				{/* <img src="" className=" bg-neutral-100" alt="" /> */}
			</div>

			<div className="flex justify-center gap-2 py-6">
				<div className="">
					<button
						onClick={() => setIsOpen(false)}
						className="px-3 py-2 border rounded border-emerald-500 text-emerald-500 ">
						ปิด
					</button>
				</div>

				<div className="">
					<button className="px-3 py-2 bg-emerald-500 rounded shadow text-neutral-50">
						ตกลง
					</button>
				</div>
			</div>
		</div>
	);
}
