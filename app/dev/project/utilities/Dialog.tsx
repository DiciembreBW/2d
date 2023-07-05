"use client";
import {Dialog} from "@headlessui/react";
import React, {useState} from "react";

type DialogProps = {
	children: React.ReactNode;
	title?: string;
	description?: string;
	element?: any;
};

export default function UtilitieDialog<T>(
	PenddingCallback: ({
		setIsOpen,
	}: {
		setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
		element: T;
	}) => React.ReactElement
) {
	return function Render({children, element, description, title}: DialogProps) {
		const [isOpen, setIsOpen] = useState<boolean>(false);
		return (
			<>
				<div onClick={() => setIsOpen(true)} className="cursor-pointer">
					{children}
				</div>

				<Dialog
					open={isOpen}
					onClose={() => setIsOpen(false)}
					className="relative z-50">
					<div className="fixed inset-0">
						<Dialog.Panel className="">
							<Dialog.Title>{title && title}</Dialog.Title>
							<Dialog.Description>{description && description}</Dialog.Description>

							{PenddingCallback({setIsOpen, element})}
						</Dialog.Panel>
					</div>
				</Dialog>
			</>
		);
	};
}
