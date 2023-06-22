"use client";
import Button from "@/components/Button";
import TemplateDialog from "@/libs/TemplateDialog";
import TemplateEvent from "@/libs/TemplateEvent";
import React, {useEffect, useState} from "react";

type Props = {};

export default function BookingSport({}: Props) {
	return (
		<div>
			BookingSport
			<Stadiums />
		</div>
	);
}

function Stadiums() {
	return (
		<div>
			<StadiumItem name="1" />
			{/* <StadiumItem name="2" /> */}
		</div>
	);
}

function StadiumItem({name}: {name: string}) {
	return (
		<div className="px-3 py-2 rounded-lg my-6">
			<div className="font-bold text-center">Stadium {name}</div>
			{/* <div className="flex justify-center gap-6 items-center"> */}
			<Team name="A" />
			{/* <span className="text-lime-400">VS</span> */}
			{/* <Team name="B" /> */}
			{/* </div> */}
		</div>
	);
}

type TeamType = {
	name?: string;
	position: "PL" | "GK";
	booking: boolean;
};

function Team({name}: {name: string}) {
	const [players, setPlayer] = useState<TeamType[]>([
		{position: "PL", booking: false},
		{position: "PL", booking: false},
		{position: "PL", booking: false},
		{position: "PL", booking: true},
		{position: "PL", booking: false},
		{position: "PL", booking: false},
		{position: "GK", booking: false},
	]);
	// return <TeamHandler products={players} />;

	function Booking(index: number) {
		// console.log(index);

		// console.log(a);
		setPlayer(
			players.map((item, item_index) => {
				if (index == item_index) {
					item.booking = !item.booking;
				}
				return item;
			})
		);
	}
	return (
		<TeamV2 products={players} onEvent={Booking} />
		// <div className="py-2 w-full ">
		// 	<div className="text-center font-bold py-2 text-neutral-200">
		// 		Team : {name}
		// 	</div>
		// 	<div className="flex justify-center flex-wrap gap-2">
		// 		{players.map((player, index) => (
		// 			<div key={index} className="basis-1/4">
		// 				{player.booking && (
		// 					<div
		// 						key={index}
		// 						className="text-neutral-800 bg-lime-400 text-center
		// 					 hover:cursor-pointer
		// 			 	active:bg-neutral-800 select-none"
		// 						onClick={() => Booking(index)}>
		// 						{JSON.stringify(player.booking)}
		// 					</div>
		// 				)}
		// 				{!player.booking && (
		// 					<div
		// 						className="text-neutral-300 bg-neutral-700/60 text-center
		// 					 hover:bg-neutral-700/30 hover:cursor-pointer
		// 			 	active:bg-neutral-800 select-none"
		// 						onClick={() => Booking(index)}>
		// 						{JSON.stringify(player.booking)}
		// 					</div>
		// 				)}
		// 			</div>
		// 		))}
		// 	</div>
		//  </div>
	);
}

const TeamV2 = TemplateEvent<TeamType>({
	ShowItem: (el, bucktes, on, index) => (
		<>
			<HandleItem
				element={el}
				resault={() => {
					on.onEvent(index);
				}}>
				<div className="ring basis-1/4 px-3 py-2">{JSON.stringify(el.booking)}</div>
			</HandleItem>
		</>
	),
	Bucket: (el, index, buckets, on) => {
		return <>Bucket</>;
	},
	Confirm: () => <>Confirm</>,
});

function ShowItemJSX() {
	return <></>;
}

const HandleItem = TemplateDialog<TeamType>({
	PenddingCallbackDialog: (props, element, [isOpen, setIsOpen]) => {
		function onsave() {
			// console.log(element);
			props.resault();

			setIsOpen(false);
		}
		return (
			<div className="">
				<div className="flex gap-2">
					<Button variant="secondary" onclick={() => setIsOpen(false)}>
						x
					</Button>
					<Button variant="primary" onclick={onsave}>
						Save
					</Button>
				</div>
			</div>
		);
	},
});
// function Team({name}: {name: string}) {
// 	const [players, setPlayer] = useState<TeamType[]>([
// 		{position: "PL", booking: false},
// 		{position: "PL", booking: false},
// 		{position: "PL", booking: false},
// 		{position: "PL", booking: true},
// 		{position: "PL", booking: false},
// 		{position: "PL", booking: false},
// 		{position: "GK", booking: false},
// 	]);
// 	// return <TeamHandler products={players} />;

// 	function Booking(index: number) {
// 		// console.log(index);

// 		// console.log(a);
// 		setPlayer(
// 			players.map((item, item_index) => {
// 				if (index == item_index) {
// 					item.booking = !item.booking;
// 				}
// 				return item;
// 			})
// 		);
// 	}
// 	return (
// 		<div className="py-2 w-full ">
// 			<div className="text-center font-bold py-2 text-neutral-200">
// 				Team : {name}
// 			</div>
// 			<div className="flex justify-center flex-wrap gap-2">
// 				{players.map((player, index) => (
// 					<div key={index} className="basis-1/4">
// 						{player.booking && (
// 							<div
// 								key={index}
// 								className="text-neutral-800 bg-lime-400 text-center
// 							 hover:cursor-pointer
// 					 	active:bg-neutral-800 select-none"
// 								onClick={() => Booking(index)}>
// 								{JSON.stringify(player.booking)}
// 							</div>
// 						)}
// 						{!player.booking && (
// 							<div
// 								className="text-neutral-300 bg-neutral-700/60 text-center
// 							 hover:bg-neutral-700/30 hover:cursor-pointer
// 					 	active:bg-neutral-800 select-none"
// 								onClick={() => Booking(index)}>
// 								{JSON.stringify(player.booking)}
// 							</div>
// 						)}

// 						{/* <div>{}</div> */}
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// }

// ********************************************************

// const TeamHandler = TemplateEvent<TeamType>({
// 	ShowItem: (el, bucket, on) => (
// 		<HandlerPlayer
// 			resault={(name: string) => {
// 				if (bucket.find((item) => item.name == name)) {
// 					on.Replace2((item) => {
// 						item.booking = true;
// 						item.name = name;
// 						return item;
// 					});

// 					console.log("b");
// 					return;
// 				}

// 				console.log("a");
// 				on.Create({
// 					...el,
// 					name: name,
// 					booking: true,
// 				});
// 			}}
// 			element={el}>
// 			<div className="flex flex-wrap justify-center">
// 				<div className={`px-3 py-2 bg-emerald-700 rounded m-1 `}>
// 					<div className="">{el.name}</div>
// 					<div className="">{el.position}</div>
// 					<div>{JSON.stringify(el.booking)}</div>
// 				</div>
// 			</div>
// 		</HandlerPlayer>
// 	),
// 	Bucket: (el, index, buckets, on) => (
// 		<div className="flex justify-between  gap-2 p-2 ring">
// 			<div>
// 				<div>Name : {el.name}</div>
// 				<div>Position : {el.position}</div>
// 				<div>Status : {JSON.stringify(el.booking)}</div>
// 			</div>
// 			<div>
// 				<Button variant="primary" onclick={() => on.Remove(index)}>
// 					-
// 				</Button>
// 			</div>
// 		</div>
// 	),
// 	Confirm: (buckets) => <></>,
// });

// const HandlerPlayer = TemplateDialog<TeamType>({
// 	PenddingCallbackDialog: (props, element, [isOpen, setIsOpen]) => {
// 		const [text, setText] = useState<string>("");
// 		function onclick() {
// 			props.resault(text);
// 			setIsOpen(false);
// 			// console.log("pass");
// 		}
// 		return (
// 			<div className="grid grid-cols-1">
// 				<div>contetn</div>

// 				<div>
// 					<input
// 						type="text"
// 						value={text}
// 						onChange={(e) => setText(e.target.value)}
// 						className="bg-transparent"
// 					/>
// 				</div>
// 				<div className="flex justify-center">
// 					<Button variant="secondary" onclick={() => setIsOpen(false)}>
// 						X
// 					</Button>

// 					<Button variant="primary" onclick={() => onclick()}>
// 						Save
// 					</Button>
// 				</div>
// 			</div>
// 		);
// 	},
// });

// type TeamType = {
// 	position: "PL" | "GK";
// 	booking: boolean;
// };

// function Team({name}: {name: string}) {
// 	const [players, setPlayer] = useState<TeamType[]>([
// 		{position: "PL", booking: false},
// 		{position: "PL", booking: false},
// 		{position: "PL", booking: false},
// 		{position: "PL", booking: true},
// 		{position: "PL", booking: false},
// 		{position: "PL", booking: false},
// 		{position: "GK", booking: false},
// 	]);
// 	return (
// 		<div className="py-2">
// 			<div className="text-center">Team : {name}</div>
// 			{/* <div className="text-center font-bold">Player 1 - 7</div> */}
// 			<div className="flex flex-wrap justify-center">
// 				{players.map((player, index) => (
// 					<div key={index} className={`px-3 py-2 bg-emerald-700 rounded m-1 `}>
// 						<div className="">{player.position}</div>
// 						<div>{JSON.stringify(player.booking)}</div>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// }

// TemplateEvent({
// 	ShowItem: (el, bucket, on) => <div></div>,
// 	Bucket: (el, index, buckets, on) => <></>,
// 	Confirm: (buckets) => <></>,
// });
