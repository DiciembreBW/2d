import React, {useEffect} from "react";
import {useTeamDispatchContext} from "./MatchContext";

type Props = {id: number};

export default function Seat({id}: Props) {
	const dispatch = useTeamDispatchContext();

	return <div>Seat</div>;
}
