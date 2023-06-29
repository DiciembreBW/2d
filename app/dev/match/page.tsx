"use client";

import Team from "./Team";
import TeamComponent from "./TeamComponent";
import TeamProvider from "./TeamProvider";
import Seat from "./Seat";
import {TeamType} from "./PropType";

type Props = {};

const initialTeamValue_1: TeamType = {
	name: "ไอแดง",
	members: [
		{name: "", booking: false},
		{name: "", booking: false},
		{name: "", booking: true},
		{name: "", booking: false},
		{name: "", booking: false},
		{name: "", booking: false},
		{name: "", booking: false},
	],
};

const initialTeamValue_2: TeamType = {
	name: "ไอ้เขียว",
	members: [
		{name: "", booking: false},
		{name: "", booking: false},
		{name: "", booking: true},
		{name: "", booking: false},
		{name: "", booking: false},
		{name: "", booking: false},
		{name: "", booking: false},
	],
};

export default function TeamPage({}: Props) {
	return (
		<div>
			<div className="flex gap-3 items-center">
				<TeamProvider initialTeamValue={initialTeamValue_1}>
					<TeamComponent />
				</TeamProvider>
				<div className="text-xl">
					<i>VS</i>
				</div>
				<TeamProvider initialTeamValue={initialTeamValue_2}>
					<TeamComponent />
				</TeamProvider>
			</div>
		</div>
	);
}
