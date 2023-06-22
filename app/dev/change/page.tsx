"use client";
import Button from "@/components/Button";
import ListItem from "@/components/ListItem";
import TemplateEvent from "@/libs/TemplateEvent";
import React, {useEffect, useState} from "react";

type Props = {};

import {ShirtProps, shirt_data} from "./PropType";
import TemplateDialog from "@/libs/TemplateDialog";
export default function ChangePage() {
	const [items, setItem] = useState<ShirtProps[]>(shirt_data);
	return (
		<div className="grid grid-cols-1 gap-6">
			<App products={items} />
		</div>
	);
}

const App = TemplateEvent<ShirtProps>({
	ShowItem: (el, buckets, on) => (
		<>
			<div className="px-3 hover:cursor-pointer hover:bg-neutral-700 py-2 bg-neutral-800 m-1 text-neutral-200 rounded shadow">
				{/* {el.label} */}
				<Edit
					resault={(value: number) => {
						if (buckets.find((item) => item.label == el.label)) {
							// replace
							on.Replace2((item) => {
								if (item.label == el.label) {
									item.amont = value;
								}
								return item;
							});

							return;
						}

						// create
						on.Create({...el, amont: value});
					}}
					element={el}>
					<>{el.label}</>
				</Edit>
			</div>
		</>
	),
	Bucket: (el, index, bucket, on) => (
		<div className="flex justify-between items-center px-2 py-2 border-b border-neutral-800/10">
			<div>
				<div>{el.label}</div>

				<Edit
					element={el}
					resault={(value: number) => on.Update({...el, amont: value}, index)}>
					{/* {el.amont} */}
					<div className="text-sm/tight text-emerald-700 font-bold">แก้ไข</div>
				</Edit>
			</div>

			<div>{el.amont}</div>
			{/* {el.label} | {el.amont} <Button onclick={() => on.Remove(index)}>x</Button> */}
		</div>
	),
	Confirm: (el) => (
		<>
			{/* <pre> {JSON.stringify(el, null, 3)} </pre> */}
			<Button onclick={() => console.log(el)}>Confirm</Button>
		</>
	),
});

const Edit = TemplateDialog<ShirtProps>({
	PenddingCallbackDialog: (props, element, [isOpen, setIsOpen]) => {
		const [a, setA] = useState<number | string>(element.amont);
		// console.log(element.amont);

		useEffect(() => {
			setA(element.amont);
		}, [element.amont]);

		function onchange(value: number) {
			const newValue = isNaN(value) ? "" : value;
			setA(newValue);
		}

		function onclick() {
			props.resault(a);
			setIsOpen(false);
		}
		return (
			<div className="text-center px-6">
				<div className="text-3xl">
					<div>ไซส์ : {element.label}</div>
				</div>
				<div>รอบออก {element.chest} นิ้ว</div>
				<div>ความยาว {element.length} นิ้ว</div>

				<div className="py-6">
					<input
						type="number"
						value={a}
						onChange={(e) => onchange(parseInt(e.target.value))}
						className="bg-transparent text-center text-xl w-20"
					/>
				</div>

				<div className="flex justify-center">
					<Button variant="secondary" onclick={() => setIsOpen(false)}>
						close
					</Button>

					<Button onclick={() => onclick()} variant="primary">
						Save
					</Button>

					{/* {props.penddingCallback} */}
				</div>
			</div>
		);
	},
});
// export default function ChangePage({}: Props) {
// 	const [items, setItem] = useState<ItemType[]>([
// 		{
// 			name: "apple",
// 			// selected: false,
// 		},
// 		{
// 			name: "banana",
// 			// selected: false,
// 		},
// 		{
// 			name: "pine aplle",
// 			// selected: false,
// 		},
// 		{name: "mango"},
// 	]);

// 	const [shirt, setShirt] = useState<ShirtType[]>([
// 		{label: "XS", amont: 0},
// 		{label: "S", amont: 0},
// 		{label: "M", amont: 3},
// 	]);

// 	// return <Event products={items} />;
// 	return <Shirt products={shirt} />;
// }

// const Shirt = TemplateEvent<ShirtType>({
// 	ShowItem: (el, buckets, on) => (
// 		<div className="flex justify-between px-3 py-2">
// 			<div className="">{el.label}</div>
// 			<div className="">{el.amont}</div>
// 			<Button
// 				onclick={() => {
// 					buckets.find((item) => item.label == el.label)
// 						? on.Replace(
// 								buckets.map((item, item_index) => {
// 									if (item.label == el.label) {
// 										item = {...item, amont: 999};
// 									}
// 									return item;
// 								})
// 						  )
// 						: on.Create(el);
// 				}}>
// 				save
// 			</Button>
// 			{/* <ItemJSX /> */}
// 		</div>
// 	),
// 	Bucket: (el, index, bucket, on) => (
// 		<B
// 			value={el.amont}
// 			label={el.label}
// 			onEnter={(amont) => on.Update({...el, amont: amont}, index)}
// 		/>
// 	),
// 	Confirm: (el) => (
// 		<div>
// 			<Button variant="primary" onclick={() => console.log(el)}>
// 				Save
// 			</Button>
// 		</div>
// 	),
// });

// function ItemJSX() {
// 	return <>001</>;
// }

// function B({
// 	value,
// 	label,
// 	onEnter,
// }: {
// 	value: number;
// 	label: string;
// 	onEnter: (value: number) => void;
// }) {
// 	const [amont, setAmont] = useState<number | string>(value);
// 	useEffect(() => {
// 		setAmont(value);
// 	}, [value]);
// 	return (
// 		<div>
// 			{label}
// 			<input
// 				type="text"
// 				value={amont}
// 				onChange={(e) => setAmont(e.target.value)}
// 				onKeyDown={(e) => (e.key == "Enter" ? onEnter(amont) : false)}
// 			/>
// 		</div>
// 	);
// }
// // ********************************
// const Event = TemplateEvent<ItemType>({
// 	ShowItem: (el, buckets, on) => (
// 		<>
// 			<div
// 				onClick={() => {
// 					if (buckets.find((item) => item.name == el.name)) {
// 						// replace
// 						// console.log(false);
// 						// buckets.map()
// 						buckets.map((item, item_key) => {
// 							if (item == el) {
// 								console.log(item);
// 							}
// 							return item;
// 						});

// 						return;
// 					}

// 					// else crealte new Value
// 					on.Create(el);
// 				}}
// 				className="hover:cursor-pointer">
// 				<div>{el.name}</div>
// 			</div>
// 		</>
// 	),
// 	Bucket: (el, index, buckets, on) => {
// 		return (
// 			<BucketJSX
// 				value={el.name}
// 				onclick={() => on.Remove(index)}
// 				onEnter={(v) => on.Update({name: v}, index)}
// 			/>
// 		);
// 	},
// 	Confirm: (el) => (
// 		<div>
// 			<Button onclick={() => console.log(el)}>Confirm</Button>
// 		</div>
// 	),
// });

// function BucketJSX({
// 	value,
// 	onEnter,
// 	onclick,
// }: {
// 	value: string;
// 	onEnter?: (value?: any) => void;
// 	onclick: () => void;
// }) {
// 	// const t = value;
// 	const [text, setText] = useState<string>(value);

// 	useEffect(() => {
// 		setText(value);
// 	}, [value]);
// 	return (
// 		<div className="flex justify-center items-center gap2">
// 			{/* {value} */}
// 			<input
// 				type="text"
// 				value={text}
// 				className="ring"
// 				onChange={(e) => setText(e.target.value)}
// 				onKeyDown={(e) => (e.key == "Enter" && onEnter ? onEnter(text) : false)}
// 			/>

// 			<div>
// 				<Button onclick={() => onclick()}>X</Button>
// 			</div>
// 			{/* {text} */}
// 		</div>
// 	);
// }
