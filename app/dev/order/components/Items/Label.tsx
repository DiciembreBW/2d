import React, {useEffect, useState} from "react";
import {useOrderDispatchContext} from "../../OrderContext";
import {ItemType} from "../../OrderTypes";

type Props = {data: ItemType};

export default function Label({data}: Props) {
	const distpatch = useOrderDispatchContext();
	const [items, setItem] = useState<ItemType[]>([]);
	function handleInit() {
		// distpatch({
		// 	item: {
		// 		type: "init",
		// 		data,
		// 	},
		// });
		setItem((value) => {
			return [...value, data];
		});
	}

	useEffect(() => {
		handleInit();
	}, []);

	return (
		<div className="flex justify-between gap-2 border-b border-neutral-300 last:border-none">
			<div className="basis-2/6 flex justify-center items-center text-3xl">
				{data.label}
			</div>
			<div className="basis-4/6">
				<div>รอบอก {data.chest} นิ้ว</div>
				<div className="text-sm text-neutral-500">
					ความยาวเสื้อ {data.length} นิ้ว
				</div>
				{/* <div className="ring" onClick={handleInit}>
					init
				</div> */}
			</div>
		</div>
	);
}
