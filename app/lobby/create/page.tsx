"use client";
import Link from "next/link";
import React, {useState} from "react";

type Props = {};

export default function CreatePage({}: Props) {
	return (
		<div className="bg-neutral-200 ">
			<div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-3 h-screen content-start">
				<TemplateItemGrid name="คอกลม แขนสั้น" to="t_shirt" />
				<TemplateItemGrid name="คอกลม แขนยาว" />
				<TemplateItemGrid name="โปโล แขนสั้น" />
				<TemplateItemGrid name="โปโล แขนยาว" />
			</div>
		</div>
	);
}
function TemplateItemGrid({name, to}: {name: string; to?: string}) {
	return (
		<div className="col-span-1 h-fit bg-neutral-50 rounded-lg">
			<div className="bg-neutral-300 aspect-square flex justify-center items-center rounded-t-lg">
				image
			</div>
			<div className="px-3 py-2">
				<Link href={`/lobby/create/tshirt`} className="font-bold">
					{name}
				</Link>
				<div className="text-neutral-800/50">ผู้ใหญ่ เด็ก</div>
			</div>
		</div>
	);
}
