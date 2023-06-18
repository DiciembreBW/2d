import ButtonPreview from "@/components/token/ButtonPreview";
import ColorPreview from "@/components/token/ColorPreview";
import ButtonPrimary from "@/components/token/buttons/ButtonPrimary";
import ButtonStepperPrimary from "@/components/token/buttons/ButtonStepperPrimary";
import ButtonSecondary from "@/components/token/buttons/ButtonSecondary";
import React from "react";
import ButtonDark from "@/components/token/buttons/ButtonDark";
import LinkPreview from "@/components/token/LinkPreview";

type Props = {};

export default function ({}: Props) {
	return (
		<div className="bg-neutral-900 ">
			<div className="flex flex-col border">
				{/* <div className="basis-3/5 bg-neutral-950 border">Neutral 950 </div>
				<div className="basis-2/5 bg-lime-400 border">Lime 400</div>
				<div className="basis-auto border">123</div> */}
				<div className="border basis-8/12 flex-col flex justify-center items-start text-slate-100">
					<ColorPreview />
					<ButtonPreview />
					<LinkPreview />
				</div>
				<div className="border  basis-4/12 bg-slate-100">
					{/* <div className="border  basis-4/12 bg-slate-100"> */}
					{/* <ButtonPrimary  /> */}
					{/* <ButtonSecondary /> */}
					<ButtonDark />
					<ButtonDark disable />
				</div>
				{/* <div className="border  bg-orange-500">xx</div> */}
			</div>
			{/* <div className="p-3 bg-green-400">Green 400</div>
			<div className="p-3 bg-emerald-300">Emerald 300</div>
			<div className="p-3 bg-green-500">Green 500</div>
			<div className="p-3 bg-teal-400">Teal 500</div>
			<div className="p-3 bg-lime-400">Lime 400</div>
			<div className="p-3 bg-lime-300">Lime 300</div>
			<div className="flex flex-col h-56 border">
				<div className="basis-3/5 bg-slate-300">main</div>
				<div className="basis-2/5 bg-red-500">secondary</div>
				<div className="basis-auto bg-slate-900">sub</div>
			</div>
			<div className="p-3 bg-gradient-to-r from-green-400 to bg-emerald-300">
				Gradiant
			</div> */}
		</div>
	);
}
