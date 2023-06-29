import TemplateArrayObject from "@/libs/TemplateArrayObject";
import {DraftType, ShirtProps} from "./props";
import {InputConfirm} from "@/components/ConfirmComponent";
import FocusElement from "@/libs/FocusElement";
import TemplateDialog from "@/libs/TemplateDialog";
import {FormEvent, useState} from "react";
import Button from "@/components/Button";
import ListItem from "@/components/ListItem";

export const Shirts = TemplateArrayObject<ShirtProps>((el, index, features) => (
	<ListItem key={index} className="">
		<div className="flex gap-2 items-center">
			{/* <div className=" basis-2/6 text-3xl font-bold text-neutral-50">
				{el.label}
			</div>
			<div className="basis-4/6">
				<div className="font-bold">รอบอก {el.chest} นิ้ว</div>
				<div className="text-xs text-neutral-200/40">ความยาว {el.length} นิ้ว</div>
			</div>

			<div className="text-center basis-auto ">
				<div className="flex h-8 items-center bg-neutral-800 rounded-full">
					<button
						className="h-full aspect-square rounded-full"
						onClick={() => {
							features.stepDown("amont", index);
						}}>
						-
					</button>
					<div className="w-9">
						<ValueHandler
							resault={(value: number) => features.changeInt("amont", value, index)}
							element={el}>
							{el.amont}
						</ValueHandler>
					</div>
					<button
						className="h-full aspect-square rounded-full"
						onClick={() => features.stepUp("amont", index)}>
						+
					</button>
				</div>
			</div> */}
		</div>
	</ListItem>
));

// const ValueHandler = TemplateDialog<ShirtProps>({
// 	PenddingCallbackDialog: (props, element, [isOpen, setIsOpen]) => {
// 		const [amont, setAmont] = useState<number | string>(element.amont);
// 		function onclick() {
// 			// handle respone data
// 			props.resault(amont);

// 			// close dialog
// 			setIsOpen(false);
// 		}

// 		function onchange(value: string) {
// 			// setIsOpen(e.target.va)
// 			const valueOfAmont = isNaN(parseInt(value)) ? "" : parseInt(value);

// 			setAmont(valueOfAmont);
// 		}
// 		return (
// 			<div className="grid grid-cols-1 text-center py-3">
// 				<div className="text-2xl">{element.label}</div>
// 				<div className="text-neutral-200/50">
// 					<div> รอบอก {element.chest} นิ้ว</div>
// 					<div> ความยาว {element.length} นิ้ว</div>
// 				</div>
// 				<div className="py-2">
// 					<input
// 						type="number"
// 						className="p-2 bg-neutral-600/50 rounded text-lg text-center w-1/2 focus:outline-none"
// 						value={amont}
// 						onChange={(e) => onchange(e.target.value)}
// 					/>
// 				</div>
// 				<div className="flex justify-center pt-2">
// 					<Button variant="secondary" onclick={() => setIsOpen(false)}>
// 						x
// 					</Button>

// 					<Button variant="primary" onclick={onclick}>
// 						Save
// 					</Button>
// 				</div>
// 			</div>
// 		);
// 	},
// });
