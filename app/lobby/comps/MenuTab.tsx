"use client";
import {Tab} from "@headlessui/react";
import React, {Fragment} from "react";
import ProcessItems from "./ProcessItems";

type Props = {};

export default function MenuTab({}: Props) {
	return (
		<div className="py-2">
			<Tab.Group>
				<Tab.List className="py-1 flex justify-center gap-3 text-sm">
					<ButtonTab>กำลังดำเนินการ</ButtonTab>
					<ButtonTab>เสร็จสิ้น</ButtonTab>
					<ButtonTab>ทั้งหมด</ButtonTab>
				</Tab.List>
				<Tab.Panels className="my-3 bg-neutral-50 rounded-xl shadow">
					<Tab.Panel>
						<ProcessItems />
					</Tab.Panel>
					<Tab.Panel>02</Tab.Panel>
					<Tab.Panel>03</Tab.Panel>
					<Tab.Panel>04</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
}

function ButtonTab({children}: {children: React.ReactNode}) {
	return (
		<Tab as={Fragment}>
			{({selected}) => (
				<button
					className={`mx-1 px-3 py-2
					rounded-full shadow bg-neutral-100
					${selected ? "" : ""}`}>
					{children}
				</button>
			)}
		</Tab>
	);
}
