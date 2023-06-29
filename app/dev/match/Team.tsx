"use client";
import React from "react";
import TeamComponent from "./TeamComponent";
import TeamApp from "./TeamProvider";

type Props = {name: string};

export default function Team({name}: Props) {
	return (
		// <TeamApp name={name}>
		// 	<TeamComponent />
		// </TeamApp>
		<div></div>
	);
}
