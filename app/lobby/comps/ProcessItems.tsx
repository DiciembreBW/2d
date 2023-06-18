import React, {useState} from "react";
import {Items} from "../data";
import {ItemsType} from "../props";

type Props = {};

const items: ItemsType[] = [
	{
		name: "Sampran RUN 2022",
		description: "แขนสั้นคอกลม",
		amont: 1216,
	},

	{
		name: "หลุบเลาเมาเด้อ V.2",
		description: "แขนสั้นคอกลม",
		amont: 32,
	},
	{
		name: "Sampran RUN 2022 LOT-2",
		description: "แขนสั้นคอกลม",
		amont: 225,
	},
	{
		name: "RUNNING CLUB V.2",
		description: "กล้ามหลังเว้า คอเหลี่ยม",
		amont: 46,
	},
];

export default function ProcessItems({}: Props) {
	const [list, setList] = useState<ItemsType[]>(items);
	return (
		<div className="px-6 py-2">
			<Items lists={list} setList={setList} />
		</div>
	);
}
