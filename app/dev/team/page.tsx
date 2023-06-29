"use client";
import Button from "@/components/Button";
import Firebase from "@/libs/firebase/firebase";
import React, {useState} from "react";

const db = Firebase<MatchType>({colName: "match"});

type Props = {};

type PlayerType = {
	name?: string;
	position: "PL" | "GK";
};

type TeamType = {
	name: string;
	players: [
		PlayerType,
		PlayerType,
		PlayerType,
		PlayerType,
		PlayerType,
		PlayerType,
		PlayerType
	];
};

type MatchType = {
	time: string;
	author: string;
	statdium: "1" | "2" | string;
	teamA: TeamType;
	teamB: TeamType;
};

export default function TeamPage({}: Props) {
	const [matchs, setMatch] = useState<MatchType>(IntialMatch);

	function onchangeTeamName(pendding: (team: MatchType) => TeamType) {
		setMatch({
			...matchs,
			// teamA: {...matchs.teamA, name},
			...pendding(matchs),
		});
	}

	function create() {
		db.SetDoc({data: matchs});
	}

	return (
		<div>
			<div className=" flex flex-col gap-2">
				<div className="flex items-center gap-2 px-3 py-2">
					<TeamComponent
						team={matchs.teamA}
						onchangeTeamName={(teamName) =>
							onchangeTeamName((team) => {
								team.teamA.name = teamName;
								return team.teamA;
							})
						}
					/>

					<div>
						<i>VS.</i>
					</div>

					<TeamComponent
						team={matchs.teamB}
						onchangeTeamName={(teamName) =>
							onchangeTeamName((team) => {
								team.teamB.name = teamName;
								return team.teamB;
							})
						}
					/>
				</div>

				<div className="flex px-3 py-2 items-center">
					<div className="basis-2/6">author</div>
					<div className="basis-4/6">
						<input
							type="text"
							onChange={(e) => setMatch({...matchs, author: e.target.value})}
							value={matchs.author}
							className="px-3 py-2 w-full text-center rounded bg-neutral-300/50"
						/>
					</div>
				</div>

				<div className="flex px-3 py-2">
					<div className="basis-2/6">สนาม</div>
					<select
						onChange={(e) => setMatch({...matchs, statdium: e.target.value})}
						className="basis-4/6 px-3 py-2 text-center text-xl">
						<option value="1" className="">
							1
						</option>
						<option value="2">2</option>
					</select>
				</div>

				<div className="flex px-3 py-2 items-center">
					<div className="basis-2/6">เวลา</div>
					<div className="basis-4/6">
						<input
							type="datetime-local"
							className="w-full px-3 py-2 bg-neutral-300/50 rounded text-center"
							value={matchs.time}
							onChange={(e) => setMatch({...matchs, time: e.target.value})}
						/>
					</div>
				</div>

				<div className="flex justify-center px-3 py-2">
					<Button onclick={() => {}}>รีเซ็ท</Button>
					<Button
						variant="primary"
						onclick={() => {
							// console.log(matchs);
							create();
						}}>
						บันทึก
					</Button>
				</div>
			</div>

			{/* <pre>{JSON.stringify(matchs.teamA, null, 3)}</pre> */}
		</div>
	);
}

function TeamComponent({
	team,
	onchangeTeamName,
}: {
	team: TeamType;
	onchangeTeamName: (teamName: string) => void;
}) {
	return (
		<div className="flex flex-col gap-2">
			<div className="text-xl text-center ">
				<div>
					<input
						type="text"
						value={team.name}
						className=" text-center w-full p-1 bg-transparent border-b-2 border-neutral-400/50"
						onChange={(e) => onchangeTeamName(e.target.value)}
					/>
				</div>
			</div>
			<div className="flex flex-wrap gap-2 justify-center py-3">
				{team.players.map((player, index) => (
					<div
						key={index}
						className="ring-1 ring-neutral-800 basis-1/4 aspect-square rounded-full flex justify-center items-center
						hover: cursor-pointer hover:bg-neutral-300 active:shadow select-none
						">
						{player.position}
					</div>
				))}
			</div>
		</div>
	);
}

const IntialMatch: MatchType = {
	author: "Admin",
	time: "",
	statdium: "1",
	teamA: {
		name: "Team A",
		players: [
			{name: "", position: "PL"},
			{name: "", position: "PL"},
			{name: "", position: "PL"},
			{name: "", position: "PL"},
			{name: "", position: "PL"},
			{name: "", position: "PL"},
			{name: "", position: "GK"},
		],
	},
	teamB: {
		name: "Team B",
		players: [
			{name: "", position: "PL"},
			{name: "", position: "PL"},
			{name: "", position: "PL"},
			{name: "", position: "PL"},
			{name: "", position: "PL"},
			{name: "", position: "PL"},
			{name: "", position: "GK"},
		],
	},
};
