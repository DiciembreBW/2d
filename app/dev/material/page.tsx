"use client";
import React, {ChangeEvent, ReactElement, useEffect, useState} from "react";
import {MaterialType} from "../PropType";
import {Dialog} from "@headlessui/react";
import TemplateDialog from "@/libs/TemplateDialog";
// import {
// 	Add,
// 	AddIcCall,
// 	AddIcCallOutlined,
// 	ClearOutlined,
// 	Close,
// 	CreateOutlined,
// 	MoreHorizOutlined,
// 	Save,
// } from "@mui/icons-material";

type Props = {};

export default function MaterialPage({}: Props) {
	const Material = useState<MaterialType[]>([
		{name: "dry-tech", description: "lorem ajdal kjdakwdjk"},
		{name: "poly-ester", description: "the best us dawd jawd"},
		{name: "ดาวกระจาย", description: "daw dkawfjajg jh gjh"},
	]);
	const [materials, setMaterial] = Material;

	function saveMaterial(value: MaterialType) {
		setMaterial([value, ...materials]);
	}

	function penddingSaveMaterialDetail(value: MaterialType) {
		console.log(value);
	}

	function deleteMaterial(index: number) {
		const resault = materials.filter((value, i) => i != index);
		setMaterial(resault);
	}

	return (
		<div className="grid grid-cols-1">
			<div className="bg-neutral-700/50 px-3 py-2 my-2 rounded">
				<div className="py-1 flex justify-between text-lime-400">
					<div>Material</div>

					<CreateMaterial resault={saveMaterial}>
						<div className="ring ring-lime-400 rounded-full aspect-square w-6 flex justify-center items-center">
							+
						</div>
					</CreateMaterial>
				</div>

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
								<ReadMaterialDetail resault={deleteMaterial} element={el} index={index}>
									{/* <MoreHorizOutlined /> */}
									...
								</ReadMaterialDetail>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

const ReadMaterialDetail = TemplateDialog<MaterialType>({
	PenddingCallbackDialog: (props, element, [isOpen, setIsOpen]) => {
		function onremove() {
			props.resault(props.index);
			setIsOpen(false);
		}
		return (
			<div className="grid grid-cols-1 gap-2">
				<div className="text-xl text-lime-400">"{element.name}"</div>
				<div className="text-neutral-200/50">{element.description}</div>
				<div className="flex justify-center pt-6 gap-2">
					<button
						className="px-2 py-1 border border-lime-400 text-lime-400"
						onClick={() => setIsOpen(false)}>
						x
					</button>

					<button
						className="px-2 py-1 border border-lime-400 text-lime-400"
						onClick={() => onremove()}>
						Remove
					</button>
				</div>
			</div>
		);
	},
});

const CreateMaterial = TemplateDialog({
	PenddingCallbackDialog: (props, element, [isOpen, setIsOpen]) => {
		const [value, setValue] = useState<MaterialType>({
			name: "",
			description: "",
		});

		function onsave() {
			props.resault(value);
			setValue({description: "", name: ""});
			setIsOpen(false);
		}

		const onchange = (
			e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
			key_name: string
		): void => {
			setValue((data) => {
				return {...data, [key_name]: e.target.value};
			});
		};

		return (
			<div className="px-3 py-2">
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
						onClick={() => setIsOpen(false)}>
						{/* ยกเลิก */}
						{/* <ClearOutlined /> */}X
					</button>
					<button
						className="px-3 py-2 shadow bg-lime-400 text-neutral-800 rounded"
						onClick={() => onsave()}>
						{/* บันทึก */}
						{/* <Save /> */} Save
					</button>
				</div>
			</div>
		);
	},
});

// modal libs
