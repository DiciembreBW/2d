"use client";
import React, {ChangeEvent, useEffect, useState} from "react";
import {MaterialType} from "../PropType";
import {Dialog} from "@headlessui/react";
import {
	Add,
	AddIcCall,
	AddIcCallOutlined,
	ClearOutlined,
	CreateOutlined,
	MoreHorizOutlined,
	Save,
} from "@mui/icons-material";

type Props = {};

export default function MaterialPage({}: Props) {
	const Material = useState<MaterialType[]>([
		{name: "dry-tech", description: "lorem ajdal kjdakwdjk"},
		{name: "poly-ester", description: "the best us dawd jawd"},
		{name: "ดาวกระจาย", description: "daw dkawfjajg jh gjh"},
	]);
	const [materials, setMaterial] = Material;

	return (
		<div className="grid grid-cols-1">
			{/* <div className="bg-neutral-700/50 px-3 py-3 my-2">
				value
				<pre>{JSON.stringify(value, null, 3)}</pre>
			</div> */}
			<div className="bg-neutral-700/50 px-3 py-2 my-2 rounded">
				<div className="py-1 flex justify-between text-lime-400">
					<div>Material</div>

					<div className="ring ring-lime-400 rounded-full aspect-square w-6 flex justify-center items-center">
						<DialogCreate Material={Material}>
							{/* <svg className=""></svg> */}
							{/* <div</div> */}
							{/* <svg> */}
							<Add />
							{/* </svg> */}
						</DialogCreate>
					</div>
				</div>
				{/* <pre> {JSON.stringify(materials, null, 3)}</pre> */}
				{materials.map((el, index) => (
					<div
						key={index}
						className="flex justify-between items-center border-b border-neutral-200/10 py-3 last:border-none">
						<div className=" ">
							<div className="font-bold">{el.name}</div>
							<div className="text-neutral-200/50">{el.description}</div>
						</div>

						<div className="">
							<div>
								<MoreHorizOutlined />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

function DialogCreate({
	children,
	Material: [materials, setMaterial],
}: {
	children?: React.ReactNode;
	Material: [MaterialType[], Function];
}) {
	const [isOpen, setIsopen] = useState(false);
	function openIt() {
		setIsopen(true);
	}

	const [value, setValue] = useState<MaterialType>({
		name: "",
		description: "",
	});

	const onchange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		key_name: string
	): void => {
		setValue((data) => {
			return {...data, [key_name]: e.target.value};
		});
	};

	function onclick(): void {
		//   push data into material
		setMaterial([value, ...materials]);

		//   reset data
		setValue({name: "", description: ""});

		// close Dialog
		setIsopen(false);
	}
	return (
		<>
			<button
				onClick={() => {
					openIt();
				}}>
				{children}
			</button>

			<Dialog open={isOpen} onClose={() => setIsopen(false)}>
				<div className="relative z-50">
					<Dialog.Panel className="fixed bg-neutral-800 inset-0 h-screen flex justify-center items-center text-neutral-200">
						<div className="basis-3/4 h-1/2">
							<div className="px-3 py-2 bg-neutral-700/50 rounded-lg flex flex-col h-full">
								<div className="text-center text-lime-400">Create Material</div>
								<div className=" my-2">
									<input
										type="text"
										className="w-full p-3  bg-neutral-800/50 focus:outline-none"
										placeholder="material name"
										value={value.name}
										onChange={(e) => onchange(e, "name")}
									/>
								</div>
								<div className="my-2 h-full">
									<textarea
										className="w-full p-3  h-full bg-neutral-800/50 focus:outline-none"
										placeholder="material description"
										onChange={(e) => onchange(e, "description")}
										value={value.description}></textarea>
								</div>
								<div className="flex justify-center px3- py-2 gap-3">
									<button
										className="px-3 py-2 shadow border border-lime-400 text-lime-400 rounded"
										onClick={() => setIsopen(false)}>
										{/* ยกเลิก */}
										<ClearOutlined />
									</button>
									<button
										className="px-3 py-2 shadow bg-lime-400 text-neutral-800 rounded"
										onClick={() => onclick()}>
										{/* บันทึก */}
										<Save />
									</button>
								</div>
							</div>
						</div>

						{/* <div className="flex justify-between gap-3">
							<button
								className="px-3 py-3 border border-lime-400 text-lime-400 rounded"
								onClick={() => setIsopen(false)}>
								X
							</button>
							<button className="bg-lime-400 text-neutral-800 px-3 py-2 rounded">
								001
							</button>
						</div> */}
					</Dialog.Panel>
				</div>
			</Dialog>
		</>
	);
}
