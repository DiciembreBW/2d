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
			<Popover className="flex items-end flex-col">
				<Popover.Button className="">{children}</Popover.Button>
				<div className="relative">
					{/* <Popover.Panel className="mt-3 mr-3 fixed right-0 bg-neutral-100 rounded"> */}
					<Popover.Panel className="fixed w-full right-0  bg-neutral-100 rounded">
						{PenddingCallback({element})}
					</Popover.Panel>
				</div>
			</Popover>
		);
	};
}
