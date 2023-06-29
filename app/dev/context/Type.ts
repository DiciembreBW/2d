export type ListType = {
	// id: number;
	text: string;
};

export type ActionType = {
	type: "add" | "remove";
	text: string;
	index?: number;
};
