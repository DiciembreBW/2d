"use client";
import Button from "@/components/Button";
import React, {ChangeEvent, useReducer, useState} from "react";

type Props = {};

type PersonType = {
	firstname?: string;
	lastname?: string;
	age?: number | null;
};

type ActionType = {
	type: "add" | "remove";
	value: PersonType;
};

function personReducer(person: PersonType[], action: ActionType): PersonType[] {
	switch (action.type) {
		// add
		case "add": {
			return [...person, action.value];
		}

		// remove
		case "remove": {
			return person.filter((p) => p.firstname !== action.value.firstname);
		}

		// "nothing todo..";
		default:
			return person;
	}
}

export default function ReducerPage({}: Props) {
	const [person, dispatch] = useReducer(personReducer, initialPersonData);
	const personState = useState<PersonType>({
		firstname: "",
		lastname: "",
		age: 0,
	});

	const [input, setInput] = personState;

	function handleRemove(firstname: string) {
		dispatch({
			type: "remove",
			value: {
				firstname: firstname,
			},
		});
	}

	function handleAdd(value: PersonType) {
		dispatch({
			type: "add",
			value: value,
		});
	}

	return (
		<div>
			<div>Reduce page..</div>

			<InputCreate<string>
				value={input.firstname!}
				pendding={(e) => {
					setInput((v) => {
						return {...v, firstname: e.target.value};
					});
				}}
			/>

			<InputCreate<string>
				value={input.lastname!}
				pendding={(e) =>
					setInput((v) => {
						return {...v, lastname: e.target.value};
					})
				}
			/>

			<InputCreate
				value={input.age}
				pendding={(e) =>
					setInput((v) => {
						return {...v, age: parseInt(e.target.value)};
					})
				}
			/>

			<div className="flex">
				<Button variant="primary" onclick={() => handleAdd(input)}>
					Save
				</Button>
			</div>

			{/* <pre> {JSON.stringify(input, null, 3)} </pre> */}

			<PersonList person={person} onclick={(v) => handleRemove(v)} />

			<pre> {JSON.stringify(person, null, 3)} </pre>
			<div>{/* <Button onclick={handleRemove}>Click</Button> */}</div>
		</div>
	);
}

const initialPersonData: PersonType[] = [
	{firstname: "woradet", lastname: "boonsutat", age: 31},
];

function PersonList({
	person,
	onclick,
}: {
	person: PersonType[];
	onclick: (fistname: string) => void;
}) {
	return (
		<div className="px-3 py-2">
			{person.map((p, i) => (
				<div
					key={i}
					className="flex justify-between px-3 py-2 border-b border-neutral-500">
					<div>
						{p.firstname} | {p.lastname}
						<div>{p.age}</div>
					</div>

					<Button onclick={() => onclick(p.firstname!)}>-</Button>
				</div>
			))}
		</div>
	);
}

function InputCreate<T>({
	// state: [input, setInput],
	pendding,
	value,
}: {
	// state: [PersonType, (setState: React.SetStateAction<PersonType>) => void];
	pendding: (e: ChangeEvent<HTMLInputElement>) => void;
	value: T | any;
}) {
	return (
		<div className="my-2">
			<input
				className="px-3 py-2 rounded w-full"
				type="text"
				value={value}
				onChange={(e) => pendding(e)}
			/>
		</div>
	);
}
