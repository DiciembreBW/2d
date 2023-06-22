import React from "react";

type VariantType = "primary" | "secondary" | "default" | "disable";
type ButtonProps = {
	children: React.ReactNode;
	variant?: VariantType;
	onclick: () => void;
	disable?: boolean;
};
export default function Button(props: ButtonProps) {
	//  primary vaiant
	if (props.variant == "primary")
		return (
			<PrimaryButton
				props={props}
				className="px-3 py-2 bg-lime-400 text-neutral-800 rounded">
				{props.children}
			</PrimaryButton>
		);

	//  seccondart variant
	if (props.variant == "secondary")
		return (
			<SecondaryButton
				props={props}
				className="px-3 py-2 ring-inset ring-1  ring-lime-400 bg-slate-800 text-lime-400 rounded">
				{props.children}
			</SecondaryButton>
		);

	//  default variant
	return (
		<DefaultButton props={props} className="px-3 py-2 bg-neutral-300 rounded">
			{props.children}
		</DefaultButton>
	);
}

function ButtonTemplate() {
	return function ({
		props,
		children,
		className,
	}: {
		children: React.ReactNode;
		props: ButtonProps;
		className: string;
	}): React.ReactElement {
		if (props.disable)
			return (
				<div className="m-1">
					<button
						className={`px-3 py-2 bg brightness-50 cursor-not-allowed ${className}`}
						disabled>
						{children}
					</button>
				</div>
			);

		//   else
		return (
			<div
				className={`m-1 active:brightness-90 hover:cursor-pointer active:shadow select-none ${className}`}
				onClick={() => {
					props.onclick();
				}}>
				{children}
			</div>
		);
	};
}

const SecondaryButton = ButtonTemplate();
const PrimaryButton = ButtonTemplate();
const DefaultButton = ButtonTemplate();
