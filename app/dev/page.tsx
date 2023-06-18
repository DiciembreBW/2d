import React from "react";

type Props = {};

export default function page({}: Props) {
	return <div>page</div>;
}
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
