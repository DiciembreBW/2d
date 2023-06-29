import React from "react";
import {useOrderContext, useOrderDispatchContext} from "../../OrderContext";

type Props = {};

export default function DraftList({}: Props) {
	const orders = useOrderContext();
	const dispatch = useOrderDispatchContext();
	function handleToggle(index: number) {
		dispatch({
			draft: {
				type: "select",
				id: index,
			},
		});
	}
	return (
		<div className="grid grid-cols-1">
			{orders.draft.map((item, index) => (
				<div key={index} className="px-3 py-2 flex justify-between">
					<div className="">
						<div className="">{item.name}</div>
						<div className="text-sm">{item.caption}</div>
						<div className="text-sm text-neutral-800/50"></div>
					</div>

					<button onClick={() => handleToggle(index)}>
						{JSON.stringify(item.selected)}
					</button>
				</div>
			))}
		</div>
	);
}
