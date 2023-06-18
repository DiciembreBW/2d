"use client";
import React, {useState} from "react";
import {
	ListOfShirtCol,
	ListOfShirtCol_2,
	ListOfShirtCol_3,
	ListOfShirtCol_4,
	ListOfShirtRow,
} from "@/components/ListOfArray";
import {ShirtProps} from "./Props";
import {shirt_data} from "./Ex";
import ButtonPrimary from "./token/buttons/ButtonPrimary";
import ButtonSecondaryButtonPrimary from "./token/buttons/ButtonSecondary";
type Props = {};

function sum(arr: ShirtProps[]): {shirts: number; price: number} {
	const shirts = arr.reduce((acc, obj) => {
		return acc + obj.amont;
	}, 0);

	const price = arr.reduce((acc, obj) => {
		return acc + obj.amont * 365;
	}, 0);

	return {shirts, price};
}

export default function Shirt({}: Props) {
	const [shirts, setShirt] = useState<ShirtProps[]>(shirt_data);

	return (
		// <div className="flex flex-col flex-wrap justify-center relative">
		<>
			<div className="flex flex-wrap">
				<ListOfShirtCol_4 lists={shirts} setList={setShirt} />
			</div>

			{/* <div className="flex rounded mb-3 bg-emerald-500 justify-center sticky bottom-0 items-center gap-3 py-2">
				<div>
					<div>ราคา {sum(shirts).price} บาท </div>
					<div>จำนวนทั้งหมด {sum(shirts).shirts} ตัว </div>
				</div>
				<div className="px-3 py-2 border rounded-lg bg-slate-50">
					<button className="">ยีนยันคำสั่งซื้อ</button>
				</div>
			</div> */}
		</>
	);
}
