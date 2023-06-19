import {MaterialType} from "@/app/dev/PropType";
import {Dialog} from "@headlessui/react";
import {useState} from "react";

type PropsRenderJSX = {
	children?: React.ReactNode;
	resault: Function;
	element?: any;
	index?: number;
	penddingCallback?: Function;
	// responseValue: Function;
};

// type PropsTemplate = {
// 	penddingCallbackDialog: (
// 		props: PropsRenderJSX,
// 		dialogState: [boolean, Function]
// 	) => React.ReactElement;
// };

export default function TemplateDialogM<T>({
	PenddingCallbackDialog,
}: {
	PenddingCallbackDialog: (
		props: PropsRenderJSX,
		element: T,
		dialogState: [boolean, Function]
	) => React.ReactElement;
}) {
	// return function RenderJSX(props: PropsRenderJSX) {
	return function RenderJSX(props: PropsRenderJSX) {
		// use state
		const [isOpen, setIsOpen] = useState(false);

		// // call pendding callback dialog
		// penddingCallbackDialog();
		return (
			<>
				<button onClick={() => setIsOpen(true)}>{props.children}</button>

				<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
					<div className="wrapper relative z-50">
						<Dialog.Panel className="fixed inset-0 flex justify-center items-center bg-neutral-800">
							<div className="wrapper">
								{/* pendding dialog */}
								<div className="px-3 py-2 bg-neutral-700/50 rounded text-neutral-200">
									{PenddingCallbackDialog(props, props.element, [isOpen, setIsOpen])}
								</div>
							</div>
						</Dialog.Panel>
					</div>
				</Dialog>
			</>
		);
	};
}

//  sample
type Props = {name: string; element: any};
function Template<T>(penddingCallback: (element: T) => React.ReactElement) {
	return function RenderJSX(props: Props) {
		return <>{penddingCallback(props.element)}</>;
	};
}

const Dummy = Template<MaterialType>((el) => {
	return <>{el.name}</>;
});
