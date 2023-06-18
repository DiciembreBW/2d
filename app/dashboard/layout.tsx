"use client";
// import {ListOfShirtRow} from "@/components/ListOfArray";
import Draft from "@/components/Draft";
import NumberStepper from "@/components/NumberStepper";
import Preview from "@/components/Preview";
import Shirt from "@/components/Shirt";
import ButtonPrimary from "@/components/token/buttons/ButtonPrimary";
import ButtonSecondary from "@/components/token/buttons/ButtonSecondary";
import Link from "next/link";
import React, {useEffect, useRef} from "react";
import Awnser from "./Awnser";
import {
	CardShirtComponent,
	CardSlideComponent,
} from "@/components/token/components/cards";

type Props = {children: React.ReactNode};

export default function layout({children}: Props) {
	// useEffect(() => {
	// 	toView();
	// }, []);
	function toView(aa: React.RefObject<HTMLDivElement>) {
		// console.log(aa);
		// aa.current?.scrollIntoView();
		console.log(aa);

		// aa.current?.scrollIntoView();
	}
	return (
		<div className="h-screen flex flex-col">
			<div className="basis-3/6 border">{children}</div>

			<div className="basis-3/6 flex overflow-y-auto snap-y snap-mandatory flex-col">
				{/* <StickyCommand /> */}
				{/* <div className="shrink-0 ">
					<CardShirtComponent />
				</div> */}
				<div className="shrink-0 snap-center snap-always group/item border-b h-full px-3 ">
					<Colleciton />
				</div>
				<div className="shrink-0  snap-center snap-always  group/item border-b h-full px-3 bg-emerald-500 ">
					<Awnser />
				</div>
				<div className="shrink-0 snap-center snap-always h-full group/item border-b  px-3">
					<Shirt />
				</div>

				{/* <div className="shrink-0 snap-center snap-always h-full group/item border-b  px-3">
					<CardSlideComponent />
				</div> */}
				{/* <div className="sticky top-2">001</div> */}
				{/* <div className="sticky bottom-0">01</div> */}
			</div>
		</div>
	);
}

function StickyCommand() {
	return (
		<div className="sticky bottom-1">
			<div className="border ">connad</div>
		</div>
	);
}

function Colleciton() {
	return (
		<>
			<div className="py-3 rounded-xl">
				<div className="flex items-center justify-between gap-8 border-b border-slate-200/50 py-2">
					<div className="flex gap-3">
						<div className="border rounded-full w-11 h-11 flex justify-center items-center">
							img
						</div>
						<div>
							<div>UI Component</div>
							<div>Woradet B.</div>
						</div>
					</div>

					<div className="text-2xl basis-2/6">Draft - 1</div>
				</div>
				<div className="py-3">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab porro
						est debitis assumenda et sint inventore rem laudantium non cum, quasi
						dignissimos deserunt architecto, nostrum minus sunt qui aliquid.
					</p>
				</div>
			</div>

			<div className="flex justify-between">
				<div>
					<a href="" className="text-emerald-500 text-sm">
						แขนสั้น คอกลม
					</a>
					<div className="text-sm ">
						<div>8/6/23 16:22</div>
					</div>
				</div>
				<div>
					<ButtonSecondary>อนุมัติ</ButtonSecondary>
				</div>
			</div>
		</>
	);
}

function Nav() {
	return (
		<>
			<Link href={"/"} className="px-3">
				หน้าแรก
			</Link>
			<Link href={"/dashboard/3d"} className="px-3">
				3D
			</Link>
			<Link href={"/dashboard/3d_2"} className="px-3">
				3D V.2
			</Link>

			<Link href={"/dashboard/test"} className="px-3">
				ทดสอบ
			</Link>

			<Link href={"/dashboard/home"} className="px-3">
				Home
			</Link>

			<Link href={"/dashboard/design"} className="px-3">
				Design
			</Link>
		</>
	);
}
