import TemplateArrayObject from "@/libs/TemplateArrayObject";
import {DraftType, ShirtProps} from "./props";
import {InputConfirm} from "@/components/ConfirmComponent";
import FocusElement from "@/libs/FocusElement";
import TemplateDialog from "@/libs/TemplateDialog";
import {FormEvent, useState} from "react";

export const Shirts = TemplateArrayObject<ShirtProps>((el, index, features) => (
	<div key={index}>
		<div className="flex justify-between items-center px-3 py-6 border-b last:border-none">
			<div className="flex gap-3 items-center">
				<div className="text-3xl font-bold">{el.label}</div>
				<div>
					<div className="font-bold">รอบอก {el.chest} นิ้ว</div>
					<div className="text-neutral-800/50 text-xs">ความยาว {el.length} นิ้ว</div>
				</div>
			</div>

			<div className="text-center">
				<div className="flex h-8 items-center bg-neutral-100 border rounded-full">
					<button
						className="border h-full aspect-square rounded-full"
						onClick={() => {
							features.stepDown("amont", index);
						}}>
						-
					</button>
					<div className="w-9">
						{/* <StepperItem
							el={el}
							onchange={(value: number) => features.changeInt("amont", value, index)}
						/> */}
						<ValueHandler
							resault={(value: number) => features.changeInt("amont", value, index)}
							element={el}>
							{el.amont}
						</ValueHandler>
					</div>
					<button
						className="border h-full aspect-square rounded-full"
						onClick={() => features.stepUp("amont", index)}>
						+
					</button>
				</div>
			</div>
		</div>
	</div>
));

// export const DraftHandler = TemplateArrayObject<DraftType>(
// 	(el, index, feature) => (
// 		<div key={index} className="shrink-0 basis-full snap-center snap-always">
// 			<FocusElement
// 				focus={el.status}
// 				onclick={() => feature.select("status", index)}>
// 				<>
// 					<div>{index}</div>
// 					<div>{el.name}</div>
// 					<div>{JSON.stringify(el.status)}</div>
// 				</>
// 			</FocusElement>
// 		</div>
// 	)
// );

// Helper

function StepperItem({el, onchange}: {el: ShirtProps; onchange: Function}) {
	return (
		<>
			<InputConfirm
				name="amont"
				onConfirm={(v) => onchange(v)}
				initialValue={el.amont}>
				<div className="w-12 text-center bg-transparent">{el.amont}</div>
			</InputConfirm>
		</>
	);
}

type Value = {
	amont: number;
};

const ValueHandler = TemplateDialog<ShirtProps>({
	PenddingCallbackDialog: (props, element, [isOpen, setIsOpen]) => {
		const [amont, setAmont] = useState<number | string>(element.amont);
		function onclick() {
			// handle respone data
			props.resault(amont);

			// close dialog
			setIsOpen(false);
		}

		function onchange(e: FormEvent<HTMLInputElement>) {
			// setIsOpen(e.target.va)
		}
		return (
			<div className="grid grid-cols-1 text-center py-3">
				<div className="text-2xl">{element.label}</div>
				<div className="text-neutral-200/50">
					<div> รอบอก {element.chest} นิ้ว</div>
					<div> ความยาว {element.length} นิ้ว</div>
				</div>
				<div className="py-2">
					<input
						type="text"
						className="p-2 bg-neutral-600/50 rounded text-lg text-center w-1/2"
						value={amont}
						onChange={(e) => setAmont(e.target.value)}
					/>
				</div>
				<div className="flex gap-3 justify-center pt-2">
					<button
						className="border border-lime-400 text-lime-400 px-3 py-2 rounded"
						onClick={() => setIsOpen(false)}>
						X
					</button>
					<button
						className="bg-lime-400 text-neutral-800 px-3 py-2 rounded"
						onClick={onclick}>
						Save
					</button>
				</div>
			</div>
		);
	},
});
