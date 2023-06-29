"use client";
import Button from "@/components/Button";
import TemplateDialog from "@/libs/TemplateDialog";
import TemplateEvent from "@/libs/TemplateEvent";
import FlexEvent from "@/libs/TemplateFlexEvent";
import React, {useEffect, useState} from "react";

type Props = {};

export default function BookingSport({}: Props) {
	return (
		<div>
			BookingSport
			<StadiumItem name="1" time="เวลา 17.30 - 18.25 น." />
			<StadiumItem name="2" time="เวลา 18.05 - 18.25 น." />
			<StadiumItem name="1" time="เวลา 18.30 - 18.55 น." />
			<StadiumItem name="2" time="เวลา 19.00 - 19.25 น." />
			<StadiumItem name="1" time="เวลา 19.30 - 19.45 น." />
		</div>
	);
}

function StadiumItem({name, time}: {name: "1" | "2"; time: string}) {
	return (
		<div className="px-3 py-2 rounded-lg my-6">
			<div className="font-bold text-center">สนาม {name}</div>
			<div className="text-xs text-center"> {time} </div>
			<div className="flex items-center gap-2 ">
				<div className="basis-2/4">
					<Team name="B" />
				</div>
				<div className="font-mono basis-auto">
					<i>VS</i>
				</div>
				<div className="basis-2/4">
					<Team name="B" />
				</div>
			</div>
		</div>
	);
}

type TeamType = {
	name?: string;
	position: "PL" | "GK";
};

type OrderType = {
	author: string;
	line: string;
	tel: string;
};

function Team({name}: {name: string}) {
	const [players, setPlayer] = useState<TeamType[]>([
		{position: "PL", name: ""},
		{position: "PL", name: ""},
		{position: "PL", name: ""},
		{position: "PL", name: ""},
		{position: "PL", name: ""},
		{position: "PL", name: ""},
		{position: "GK", name: ""},
	]);
	// return <TeamHandler products={players} />;

	function Booking(index: number, name: string) {
		// handle name
		const value = players.map((item, item_index) => {
			if (item_index == index) {
				if (item.name !== "") {
					item.name = "";
					return item;
				}

				if (item.name == "") {
					// console.log(item.name);
					item.name = name;
				}
			}

			return item;
		});

		setPlayer(value);
	}

	function Clear() {
		const value = players.map((item) => {
			item.name = "";
			return item;
		});

		setPlayer(value);
	}

	function All() {
		const value = players.map((item) => {
			item.name = "OK";
			return item;
		});

		setPlayer(value);
	}

	return (
		<div>
			<div className="flex flex-wrap justify-center gap-2 p-3 m-2">
				{players.map((player, index) => (
					<Seat
						key={index}
						position={player.position}
						name={player.name}
						onclick={() => Booking(index, "woradet")}
					/>
				))}
			</div>
			{/* <div className="flex gap-2 justify-center">
				<div onClick={() => All()}>เลือกทั้งหมด</div>
				<div onClick={() => Clear()}>Clear</div>
			</div> */}
			{/* <div>{FlexEvent<OrderType>()}</div> */}
		</div>
	);
}

function Seat({
	position,
	name,
	onclick,
}: {
	name?: string;
	position: string;
	onclick: Function;
}) {
	if (name)
		return (
			<div
				className="basis-1/4 aspect-square rounded-full flex justify-center items-center text-neutral-200
						hover: cursor-pointer bg-neutral-800 hover:bg-neutral-700 active:shadow select-none"
				onClick={() => onclick()}>
				{name && "OK"}
			</div>
		);

	return (
		<div
			className="ring-1 ring-neutral-800 basis-1/4 aspect-square rounded-full flex justify-center items-center
						hover: cursor-pointer hover:bg-neutral-300 active:shadow select-none
						"
			onClick={() => onclick()}>
			{position}
			{name && name}
		</div>
	);
}
