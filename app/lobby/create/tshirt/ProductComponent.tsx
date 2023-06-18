"use client";
import React, {useState} from "react";
import {material_data, MaterialType, shirt_data, ShirtProps} from "./props";
import {Shirts} from "./Items";
import SummaryItem from "./SummaryItem";
import MaterialComponent from "./MaterialComponent";

type Props = {};

export default function ProductComponent({}: Props) {
	const [list, setList] = useState<ShirtProps[]>(shirt_data);
	const [materials, setMaterial] = useState<MaterialType[]>(material_data);
	return (
		<div className="bg-neutral-50 rounded-lg">
			<div className="bg-neutral-50 rounded-lg mb-1">
				<MaterialComponent list={materials} setList={setMaterial} />
			</div>

			<div className="mt-1 grid grid-cols-1 p-3rounded-lg border bg-neutral-50 rounded-lg relative">
				<Shirts lists={list} setList={setList} />
				<SummaryItem />
			</div>
		</div>
	);
}
