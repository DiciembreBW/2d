"use client";
import Button from "@/components/Button";
import Firebase from "@/libs/firebase/firebase";
import React, {Dispatch, useReducer} from "react";
import {ActionType, PlayerType, TeamType} from "./PropType";
import {teamContext, teamDispatchContext} from "./MatchContext";
import TeamComponent from "./TeamComponent";

// const db = Firebase<MatchType>({colName: "match"});
type Props = {children: React.ReactNode; initialTeamValue: TeamType};

function memberReducer(team: TeamType, action: ActionType): TeamType {
	switch (action.type) {
		case "toggle": {
			return {
				...team,
				members: team.members.map((item, index) => {
					if (index == action.index) {
						item.booking = !item.booking;
						return item;
					}
					return item;
				}),
			};
		}

		default:
			return team;
	}
}
export default function TeamProvider({children, initialTeamValue}: Props) {
	const [teams, dispatch] = useReducer(memberReducer, initialTeamValue);
	// on save

	return (
		<div className="flex flex-col justify-center bg-neutral-300 rounded-lg px-3 py-2">
			<teamContext.Provider value={teams}>
				<teamDispatchContext.Provider value={dispatch}>
					{/* <pre>{JSON.stringify(teams, null, 3)}</pre> */}
					{children}
				</teamDispatchContext.Provider>
			</teamContext.Provider>
		</div>
	);
}
