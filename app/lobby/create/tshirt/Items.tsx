import TemplateArrayObject from "@/libs/TemplateArrayObject";
import {DraftType, ShirtProps} from "./props";
import {InputConfirm} from "@/components/ConfirmComponent";
import FocusElement from "@/libs/FocusElement";

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
					<div>
						<StepperItem
							el={el}
							onchange={(value: number) => features.changeInt("amont", value, index)}
						/>
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
