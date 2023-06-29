"use client";
import TemplateDialog from "@/libs/TemplateDialog";
import FlexEvent from "@/libs/TemplateFlexEvent";
import React, {useState} from "react";

type Props = {};

type ShirtType = {
	label: string;
	chest: number;
	lenght: number;
};

type OrderType = {
	items: ShirtType[];
	name: string;
	tel: string;
};

const Shirts: ShirtType[] = [
	{label: "S", chest: 36, lenght: 34},
	{label: "M", chest: 38, lenght: 32},
	{label: "XL", chest: 52, lenght: 42},
];

const Order: OrderType = {
	items: [],
	name: "",
	tel: "",
};

export default function page({}: Props) {
	const [shirts, setShirt] = useState<ShirtType[]>(Shirts);
	return (
		<div>
			{/* <div className="p-2 bg-neutral-300 rounded grid grid-cols-1 gap-2">
				{Shirts.map((item, index) => (
					<ShirtHandler key={index} element={item} resault={() => {}}>
						<CardOfShirtComponent
							label={item.label}
							chest={item.chest}
							length={item.lenght}
						/>
					</ShirtHandler>
				))}
			</div>

			{FlexEvent<OrderType>(Order, ([orders, setOrder], on) => (
				<div className="flex_wrapper">
					<pre>{JSON.stringify(orders, null, 2)}</pre>
				</div>
			))} */}
		</div>
	);
}

function CardOfShirtComponent({
	label,
	chest,
	length,
}: {
	label?: string;
	chest?: number;
	length?: number;
}) {
	return (
		<div className="flex justify-between px-3 py-2 ring items-center">
			<div className="text-3xl font-bold shrink-0 basis-1/6">
				<div className="flex justify-center items-center">{label}</div>
			</div>
			<div className="shrink-0 basis-3/6">
				<div>รอบอก {chest} นิ้ว </div>
				<div className="text-neutral-700/80">ความยาวเสื้อ {length} นิ้ว</div>
			</div>

			<div className="shrink-0 flex-auto flex justify-center items-center">
				{" "}
				265.-
			</div>
		</div>
	);
}

const ShirtHandler = TemplateDialog<ShirtType>({
	PenddingCallbackDialog: (props, element, [isOpen, setIsOpen]) => {
		return <>Active</>;
	},
});
