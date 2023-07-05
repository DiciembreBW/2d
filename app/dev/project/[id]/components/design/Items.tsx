import React from "react";
import {
	useProjectContext,
	useProjectDispatchContext,
} from "../../context/ProjectContext";
import UtilitieDialog from "../../../utilities/Dialog";
import {DesignType} from "../../context/ProjectType";
import UtilitiePopover from "../../../utilities/PopOver";
import {Popover} from "@headlessui/react";

type Props = {};

export default function DesignItems({}: Props) {
	const project = useProjectContext();
	return (
		<>
			{project.designs.map((item, index) => (
				<div
					key={index}
					className="flex px-3 py-2 border-b border-neutral-400/20 last:border-none
                    justify-between">
					<HandleDesignItem element={item}>
						<div className="px-3 py-2 ">
							<div>{item.id}</div>
							<div className="text-sm">{item.title}</div>
						</div>
					</HandleDesignItem>
					<div className="px-3 py-2">
						<HandleEdit element={{index}}>...</HandleEdit>
					</div>
				</div>
			))}
		</>
	);
}

const HandleDesignItem = UtilitieDialog<DesignType>(({setIsOpen, element}) => {
	return (
		<div className="ring h-screen bg-neutral-50 ">
			<div className="flex px-3 py-2 ">
				<div onClick={() => setIsOpen(false)} className="cursor-pointer">
					{`<-`} back
				</div>
			</div>

			<div className="px-3 py-2">
				<div className="text-2xl">Design {element.title}</div>
				<pre>{JSON.stringify(element, null, 3)}</pre>
			</div>

			<div className="flex justify-center">Order</div>
		</div>
	);
});

const HandleEdit = UtilitiePopover<{index: number}>(({element}) => {
	const dispatch = useProjectDispatchContext();
	function handleRemoveDesign() {
		dispatch({
			design: {
				remove: {index: element.index},
			},
		});
	}

	return (
		<div className="inset-0 grid grid-cols-1 px-3 py-2 mt-3 bg-neutral-100 rounded">
			<Popover.Button onClick={handleRemoveDesign}>Remove</Popover.Button>
		</div>
	);
});
