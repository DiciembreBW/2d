"use client";
import {
	CardShirtComponent,
	CardSlideComponent,
} from "@/components/token/components/cards";
import {Dialog} from "@headlessui/react";
import {Button} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";
type Props = {};

export default function layout({}: Props) {
	return (
		<div className="bg-slate-50 h-screen">
			<div className="h-3/6 border border-black">h auto</div>
			<div
				className="h-3/6 border border-black
				overflow-y-auto snap-y snap-mandatory">
				{/* <Order name="lot-1" /> */}
				<SizeOfShirts />
				<Material />
			</div>
			{/* <div className="h-1/6 border border-black">Control panel</div> */}
			{/* <div className="border h-auto">
				<div className="font-bold text-center text-3xl">Top</div>
			</div> */}
			{/* <div className="">
				<div className=" h-full w-full">
					<Order name="order-1" />
					<Order name="order-2" />
					<Order name="order-3" />
				</div>
			</div> */}
		</div>
	);
}

function Item() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="border-b slate-500 py-3">
			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className="relative z-50">
				<div className="fixed inset-0 bg-slate-200">
					<Dialog.Panel>
						<Dialog.Title>Title</Dialog.Title>
						<Dialog.Description>Description</Dialog.Description>
						<button onClick={() => setIsOpen(false)}>Close</button>
					</Dialog.Panel>
				</div>
			</Dialog>
			<div onClick={() => setIsOpen(true)}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et esse nisi
				tenetur sunt nam debitis veritatis explicabo ut in nostrum quam facere alias
				minus, mollitia, ratione magnam! Quaerat, repudiandae sit!
			</div>
		</div>
	);
}

function Order({name}: {name: string}) {
	return (
		<div
			className="border snap-center snap-always bg-emerald-300 h-full flex flex-col
						overflow-x-auto snap-x snap-mandatory ">
			{/* <div className="border text-center">{name}</div> */}
			<div className="border flex overflow-x-auto h-full snap-x snap-mandatory">
				<Material />
				<Price />
			</div>
		</div>
	);
}

function Price() {
	return (
		<div className="shrink-0 border basis-full bg-slate-50 snap-center snap-always">
			Price
		</div>
	);
}

function SizeOfShirts() {
	return (
		<div className="h-full snap-center snap-always flex flex-col">
			<div>label</div>
			<div className=" border flex h-full snap-x snap-mandatory overflow-x-auto">
				<ShirtItem label="XS" />
				<ShirtItem label="S" />
				<ShirtItem label="M" />
				<ShirtItem label="L" />
				<ShirtItem label="XL" />
				<ShirtItem label="2XL" />
				<ShirtItem label="3XL" />
				<ShirtItem label="4XL" />
			</div>
			<div>sum of shirt</div>
		</div>
	);
}

function ShirtItem({label}: {label: string}) {
	return (
		<div
			className="shrink-0 border border-emerald-500 w-full flex flex-col items-center
						snap-center snap-always">
			<div className="text-3xl">{label}</div>
		</div>
	);
}

function Material() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div
			className="shrink-0 border basis-full h-full bg-slate-50 snap-center snap-always 
		snap-x snap-mandatory flex overflow-x-auto">
			{/* <div className="border shrink-0 basis-1/2 h-full">01</div>
			<div className="border shrink-0 basis-1/2 h-full">01</div> */}

			{/* <button onClick={() => setIsOpen(true)}>open it</button>
			<Dialog
				open={isOpen}
				onClose={() => {
					setIsOpen(false);
				}}
				className="relative z-50">
				<div className="fixed inset-0 flex bg-slate-50">
					<Dialog.Panel>
						<Dialog.Title>Selec Material Item</Dialog.Title>
						<Dialog.Description>Please select material item</Dialog.Description>
						<button onClick={() => setIsOpen(false)}>ปิด</button>
					</Dialog.Panel>
				</div>
			</Dialog> */}
			<MaterialItem name="เม็ดข้าวสาร" />
			<MaterialItem name="Dry-tech" />
			<MaterialItem name="Polyeaster" />
			<MaterialItem name="ดาวกระจาย" />
			<MaterialItem name="Airflow" />
			<MaterialItem name="รังผึ้ง" />
		</div>
	);
}

function MaterialItem({name}: {name: string}) {
	// useRef
	return (
		<div
			className="shrink-0 basis-full border flex justify-center items-center
						snap-center snap-always">
			<div className="basis-1/4 text-center">img</div>
			<div className="basis-3/4">
				<div className="text-xl">{name}</div>
				<p className="text-xs">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde tempore ullam
				</p>
			</div>
		</div>
	);
}
