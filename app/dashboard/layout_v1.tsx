"use client";
// import {ListOfShirtRow} from "@/components/ListOfArray";
import Draft from "@/components/Draft";
import NumberStepper from "@/components/NumberStepper";
import Preview from "@/components/Preview";
import Shirt from "@/components/Shirt";
import ButtonPrimary from "@/components/token/buttons/ButtonPrimary";
import Link from "next/link";
import React, {useEffect, useRef} from "react";

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
		<div className="grid grid-cols-1">
			<div className="">
				<div className="flex flex-col">
					{/* <div className="border m-3 p-4 bg-slate-400 text-5xl text-center">+</div>
					<div className="px-3 py-2 bottom-1 flex justify-between items-center">
						<div className="text-xl">รวมออเดอร์</div>
						<div>
							<ButtonPrimary>+</ButtonPrimary>
						</div>
					</div> */}

					<div className="px-3 py-2 bottom-1 flex justify-between items-center border-black/25 border-b">
						<div>
							<div className="text-bold">ออเดอนร์ แขนวั้นคอกลม</div>
							<div className="text-sm text-neutral-800/50">เสื้อ VIP สีแดง</div>
						</div>
						<div>จำนวน 56 ตัว</div>
						<div>ok</div>
					</div>
				</div>

				<Shirt />
			</div>
			{/*  */}
			<div className="border flex flex-col h-screen justify-between p-3 gap-2">
				<div className="basis rounded-xl">
					<Nav />
				</div>
				<div className="basis-auto h-3/4 rounded-xl ">{children}</div>

				<div className="basis-auto h-1/4 flex flex-col  text-neutral-800 px-3 py-2">
					<div className=" flex flex-row shrink-0 overflow-x-auto snap-x snap-mandatory">
						<Draft label="Summer 01" />
						<Draft label="Davis prada" />
						<Draft label="vistras" />
						<Draft label="Verygood" />
						<Draft label="01" />
					</div>
					<div className="text-center">arrow down</div>
				</div>
			</div>
		</div>
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
