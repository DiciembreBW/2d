import React, {useState} from "react";
import {useOrderDispatchContext} from "../../OrderContext";
import {MaterialType} from "../../OrderTypes";

type Props = {};

export default function MaterialList({}: Props) {
	const dispatch = useOrderDispatchContext();
	const [materials, setMaterial] = useState<MaterialType[]>(
		intial_material_items
	);

	function handleSelectMaterial(value: MaterialType): void {
		dispatch({
			material: {
				type: "select",
				value,
			},
		});
		// console.log(item);
	}
	return (
		<div className="grid grid-cols-3 gap-2">
			{materials.map((item, index) => (
				<div
					key={index}
					className="flex justify-between px-3 py-2 ring hover:cursor-pointer"
					onClick={() => handleSelectMaterial(item)}>
					<div>
						<div>{item.name}</div>
						<div className="text-sm">{item.caption}</div>
					</div>
				</div>
			))}
		</div>
	);
}
const intial_material_items: MaterialType[] = [
	{name: "poly ester", caption: "lorem"},
	{name: "dry-tech", caption: "Dry-tech item"},
	{name: "P-Dao", caption: "The best materialdas"},
];
