import React from "react";

type Props = {};

export default function page({}: Props) {
	return <div>page</div>;
}

type OnPart = {
	design?: string;
	color?: string;
};

type Part = {
	material: string;
	on_part?: OnPart;
};

// sleeve
type Concave = {
	ragular?: OnPart;
	curve?: OnPart;
};

type SleeveType = {
	short?: OnPart;
	long?: OnPart;
	sleeveless?: OnPart;
	concave?: Concave;
};

// neck
type Neck = {
	round?: Part;
	collar?: Part;
	v_neck?: Part;
	square_neck?: Part;
};

// sleeve type
type Sleeves = {
	material: string;
	left: OnPart;
	right: OnPart;
	sleeve_type: SleeveType;
};

// body type
type Bodies = {
	material: string;
	front: OnPart;
	back: OnPart;
};

// *** Shirt Type
type ShirtType = {
	body: Bodies;
	sleeves: Sleeves;
	neck: Neck;
};

const t_shirt_short_sleeve: ShirtType = {
	body: {
		material: "",
		front: {},
		back: {},
	},

	sleeves: {
		material: "",
		sleeve_type: {concave: {}},
		left: {},
		right: {},
	},
	neck: {round: {material: ""}},
};

const t_shirt_long_sleeve: ShirtType = {
	body: {
		material: "",
		back: {},
		front: {},
	},
	sleeves: {
		material: "",
		left: {},
		right: {},
		sleeve_type: {long: {}},
	},
	neck: {round: {material: ""}},
};

// const polo_short: ShirtType = {
// 	front: {material: ""},
// 	back: {material: ""},
// 	neck: {collar: {material: ""}},
// 	sleeve_right: {short: {material: ""}},
// 	sleeve_left: {short: {material: ""}},
// };

// const polo_long: ShirtType = {
// 	front: {material: ""},
// 	back: {material: ""},
// 	neck: {collar: {material: ""}},
// 	sleeve_right: {long: {material: ""}},
// 	sleeve_left: {long: {material: ""}},
// };

// const sleevless: ShirtType = {
// 	front: {material: ""},
// 	back: {material: ""},
// 	neck: {round: {material: ""}},
// 	sleeve_left: {sleeveless: {material: ""}},
// 	sleeve_right: {sleeveless: {material: ""}},
// };

// const tangtop_concave_curve: ShirtType = {
// 	front: {material: ""},
// 	back: {material: ""},
// 	neck: {square_neck: {material: ""}},
// 	sleeve_left: {concave: {curve: {material: ""}}},
// 	sleeve_right: {concave: {curve: {material: ""}}},
// };

// "use client";
// import React, {useEffect, useState} from "react";
// import firebase from "@/libs/firebase/firebase";
// import GetData from "./GetData";

// type Props = {};
// type DataType = {
// 	name: string;
// 	id?: string;
// 	lastname: string;
// };

// const db = firebase<DataType>({colName: "/cities"});

// export default function page({}: Props) {
// 	const data = useState<DataType>({name: "", lastname: ""});

// 	function onsave() {
// 		db.SetDoc({data: data[0]});
// 	}

// 	return (
// 		<div className="grid grid-cols-1 gap-2">
// 			<div className=" px-3 py-2 flex gap-1 flex-col">
// 				<Input state={data} key_name="name" value={data[0].name} />
// 				<Input state={data} key_name="lastname" value={data[0].lastname} />
// 				<Button onclick={onsave}>​Save</Button>
// 			</div>

// 			{/* preview data */}
// 			<GetData />
// 		</div>
// 	);
// }

// function Button({
// 	onclick,
// 	children,
// }: {
// 	onclick: Function;
// 	children: React.ReactNode;
// }) {
// 	return (
// 		<button
// 			className="px-3 py-2  font-bold rounded w-full bg-emerald-500 text-slate-700"
// 			onClick={() => onclick()}>
// 			{children}
// 		</button>
// 	);
// }

// function Input({
// 	// state: {data, setData},
// 	key_name,
// 	value,
// 	state: [data, setData],
// }: {
// 	state: [DataType, Function];
// 	// data: DataType;
// 	// setData: Function;
// 	key_name: string;
// 	value: string;
// }) {
// 	return (
// 		<div>
// 			<input
// 				type="text"
// 				placeholder={key_name}
// 				className="border p-2 focus:outline-none w-full"
// 				onChange={(e) => {
// 					setData({...data, [key_name]: e.target.value});
// 				}}
// 				value={value}
// 			/>
// 		</div>
// 	);
// }
