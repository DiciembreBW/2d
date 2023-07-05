export type DraftType = {
	name: string;
	caption: string;
	selected: boolean;
};

export type DesignType = {
	id: string;
	title: string;
	graphic: {name: string};
	drafts?: DraftType[];
};

export type ItemType = {
	label: string;
	chest: number;
	length: number;
	amont: number;
	price: number;
};

export type ProcessUnitType = {
	writer: string;
	auditer: string;
	status: boolean; // "process" | "revised";
};

export type PaymentType = {
	type: "deposit" | "balance" | "pay_all";
	amont: number;
};

export type OrderType = {
	draft_ref: string;
	process: {
		pattern: ProcessUnitType;
		printing: ProcessUnitType;
		transfer: ProcessUnitType;
		combine: ProcessUnitType;
		qc: ProcessUnitType;
		packing: ProcessUnitType;
		in_delivery: {
			address: string;
			passenger: string;
			delivery: ProcessUnitType;
		};
	};
	payment: PaymentType[];
	items: ItemType[];
};

export type ProjectType = {
	id?: number;
	owner?: string;
	name: string | "untitled";
	designs: DesignType[];
	order?: OrderType[];
};

export type ProjectActionType = {
	name?: {
		type: "add" | "update";
		text: string;
	};
	design?: {
		remove?: {index: number};
		add?: {
			value: DesignType;
		};
	};
};

export const initialProjectValue: ProjectType = {name: "untitled", designs: []};
