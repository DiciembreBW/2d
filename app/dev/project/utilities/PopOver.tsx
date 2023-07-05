import {Popover} from "@headlessui/react";

export default function UtilitiePopover<T>(
	PenddingCallback: ({element}: {element: T}) => React.ReactElement
) {
	return function RenderPopOver({
		children,
		element,
	}: {
		children: React.ReactNode;
		element: T;
	}) {
		return (
			<Popover className="relative flex flex-col items-end">
				<Popover.Button className="">{children}</Popover.Button>
				<Popover.Panel className="fixed z-50 mt-3">
					{/* <div className="inset-0 grid grid-cols-1 px-3 py-2 mt-3 bg-neutral-100 rounded"> */}
					{PenddingCallback({element})}
					{/* </div> */}
				</Popover.Panel>
			</Popover>
		);
	};
}
