export type PlayerType = {
	name?: string;
	booking: boolean;
};

export type MembersType = PlayerType[];

export type TeamType = {
	name: string;
	members: MembersType;
};

export type ActionType = {
	type: "toggle";
	index?: number;
};
