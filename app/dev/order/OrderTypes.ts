export type DraftType = {
	name: string;
	caption: string;
	selected: boolean;
};

export type MaterialType = {
	name: string;
	caption: string;
};

export type ItemType = {
	label: string;
	amont: number;
	chest: number;
	length: number;
};

export type OrderType = {
	project: string | "empty";
	title: string | "untited";
	draft: DraftType[];
	material: MaterialType; // fetch data from api
	item: ItemType[] | [];
};

export type OrderActionType = {
	// type: "add" | "edit" | "select";
	header?: {
		type: "update";
		key_name: string;
		text: string;
	};
	draft?: {
		type: "add" | "edit" | "delete" | "select";
		value?: DraftType;
		id?: number;
	};

	material?: {
		type: "select";
		value: MaterialType;
	};

	item?: {
		type: "init";
		data: ItemType;
	};
};

export const init_value: OrderType = {
	project: "empty",
	title: "untited",
	draft: [],
	material: {name: "", caption: ""},
	item: [],
};
