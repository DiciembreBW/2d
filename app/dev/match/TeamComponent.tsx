import {useTeamContext, useTeamDispatchContext} from "./MatchContext";

export default function TeamComponent({}: {}) {
	const teams = useTeamContext();
	const dispatch = useTeamDispatchContext();
	function handleToggleBooking(index: number) {
		dispatch({
			type: "toggle",
			index,
		});
	}

	return (
		<div className="flex flex-col gap-2 items-center px-3 py-2">
			<div className="text-3xl">{teams.name}</div>
			<div className="flex justify-center flex-wrap gap-4">
				{teams.members.map((item, index) => (
					<div
						key={index}
						className=" basis-1/4 aspect-square rounded-full
						flex justify-center items-center bg-neutral-400
						hover:cursor-pointer select-none"
						onClick={() => {
							handleToggleBooking(index);
						}}>
						{item.name} {JSON.stringify(item.booking)}
					</div>
				))}
			</div>
		</div>
	);
}
