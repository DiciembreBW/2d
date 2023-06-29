"use client";
import Button from "@/components/Button";
import Firebase from "@/libs/firebase/firebase";
import {DocumentData} from "firebase/firestore";
import React, {useEffect, useState} from "react";

type Props = {};

type PlayerType = {
	name?: string;
	position: "PL" | "GK";
};

type Team7Player = [
	PlayerType,
	PlayerType,
	PlayerType,
	PlayerType,
	PlayerType,
	PlayerType,
	PlayerType
];

type TeamType = {
	onclick?: (player: Team7Player) => void;
	id: string;
	name: string;
	players: Team7Player;
};

type MatchType = {
	id?: string;
	time: string;
	author: string;
	statdium: "1" | "2" | string;
	teamA: TeamType[];
	teamB: TeamType[];
};

const db = Firebase<MatchType>({colName: "match"});

export default function page({}: Props) {
	const [match, setMatch] = useState<MatchType>();
	function click() {
		db.GetDoc({docName: "/xmt15nlc"}).then((r) => console.log(r));
		// console.log("pass");
	}
	useEffect(() => {
		// db.GetDoc({docName: "/xmt15nlc"}).then((r) => console.log(r));
		// db.OnSnapShot<MatchType>({docName: "/" + "xmt15nlc"}, (data) => {
		// 	// setMatch(data);
		// 	console.log(data.);
		// });
	}, []);

	if (match?.teamA) {
		return (
			<div>
				{/* <pre> {JSON.stringify(match.teamA)} </pre> */}
				{match.teamA.map((item, index) => (
					<div key={index}>{JSON.stringify(item)}</div>
				))}
			</div>
		);
	}
	return (
		<div>
			<div className="text-center">{match?.statdium}</div>
			<div className="flex flex-wrap justify-center gap-2 p-3 m-2">
				{/* {match &&
					match.teamA.players.map((player, index) => (
						<div key={index}>{player}</div>
					))} */}
				{/* {match?.teamA.map((player, index) => (
					<Seat
						key={index}
						position={player}
						name={player.name}
						// onclick={() => Booking(index, "NAME")}
						onclick={() => console.log("lick")}
					/>
				))} */}
			</div>

			<pre>{JSON.stringify(match?.teamA, null, 3)}</pre>
			<Button onclick={() => click()}>Click</Button>
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
