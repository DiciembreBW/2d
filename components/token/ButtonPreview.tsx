import React from "react";
import ButtonPrimary from "./buttons/ButtonPrimary";
import ButtonSecondary from "./buttons/ButtonSecondary";
import Button from "./buttons/Button";
import ButtonStepperPrimary from "./buttons/ButtonStepperPrimary";
import ButtonStepperSecondary from "./buttons/ButtonStepperSecondary";

type Props = {};

export default function ButtonPreview({}: Props) {
	return (
		<div className="m-3">
			<div className="text-xl">Button</div>
			<div className="flex ">
				<div className="flex flex-col ">
					<div className="m-3">
						<div className="px-3 py-2 text-lime-400">Primary</div>
					</div>
					{/*  */}
					<ButtonPrimary />
					<ButtonPrimary disable />
					<ButtonStepperPrimary />
					<ButtonStepperPrimary disable />
				</div>

				<div className="flex flex-col ">
					<div className="m-3">
						<div className="px-3 py-2 text-slate-200">Secondary</div>
					</div>
					{/*  */}
					<ButtonSecondary />
					<ButtonSecondary disable />
					<ButtonStepperSecondary />
					<ButtonStepperSecondary disable />
				</div>

				<div className="flex flex-col ">
					<div className="m-3">
						<div className="px-3 py-2 text-slate-200">Default</div>
					</div>
					{}
					<Button />
					<Button disable />
				</div>
			</div>
		</div>
	);
}
