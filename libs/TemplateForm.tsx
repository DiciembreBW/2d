import {Dialog} from "@headlessui/react";
import {useEffect, useState} from "react";

type FormProps = {
	name: string;
	children: React.ReactNode;
	onConfirm: (value: InitialValueStateProps) => void;
	initialValue: number;
	// label?: object;
};

type FormFeatures = {
	onclick: Function;
	onconfirm: (value: InitialValueStateProps) => void;
};

type InitialValueStateProps = number;

export default function TemplateFom<T>(
	penddingCallback: (
		FormProps: FormProps,
		features: FormFeatures
	) => React.ReactElement,
	penddingCallbackAfterConfrim: (
		FormProps: FormProps,
		features: FormFeatures,
		valueState: [any, Function]
	) => React.ReactElement
): ({name}: FormProps) => React.ReactElement {
	// react dom

	return function (props) {
		const [isOpen, setIsOpen] = useState(false);
		const valueState = useState<InitialValueStateProps>();
		const [value, setValue] = valueState;

		useEffect(() => {
			// setValue()
			setValue(props.initialValue);
		}, [props.initialValue]);

		const features = {
			onclick: () => {
				setIsOpen(true);
			},

			onconfirm: (value: InitialValueStateProps) => {
				props.onConfirm(value);
				setIsOpen(false);
			},
		};
		return (
			<>
				{penddingCallback(props, features)}

				{/* show dialog */}
				<Dialog
					open={isOpen}
					onClose={() => setIsOpen(false)}
					className="relative z-50">
					<div
						className="fixed inset-0 flex justify-center items-center
                                bg-black/30"
						aria-hidden="true">
						<Dialog.Panel className="bg-neutral-50 p-6 rounded-lg flex gap-2">
							{penddingCallbackAfterConfrim(props, features, valueState)}

							{/* <button
								onClick={() => setIsOpen(false)}
								className="px-3 py-2 rounded border">
								ยกเลิก
							</button>
							<button
								className="px-3 py-2 bg-emerald-500 rounded"
								onClick={() => props.onConfirm()}>
								ตกลง
							</button> */}
						</Dialog.Panel>
					</div>
				</Dialog>
			</>
		);
	};
}

function Temp() {}
