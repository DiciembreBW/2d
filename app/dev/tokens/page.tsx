"use client";
import Button from "@/components/Button";
import ListItem from "@/components/ListItem";
import React, {useState} from "react";

type Props = {};

export default function TokenPage({}: Props) {
	const [items, setItem] = useState<string[]>(["a", "b", "c", "d", "e"]);

	function click() {
		console.log("pass");
	}
	return (
		<div>
			<div>TokenPage</div>
			<div className="flex">
				<Button variant="primary" onclick={click}>
					Save
				</Button>
				<Button variant="secondary" onclick={click}>
					Remove
				</Button>

				<Button onclick={click}>Default</Button>
			</div>

			<div className="grid grid-cols-1  rounded-lg">
				{items.map((item, index) => (
					<ListItem
						key={index}
						className="bg-neutral-700/30 hover:bg-neutral-700/40"
						onclick={click}>
						{item}
					</ListItem>
				))}
			</div>
		</div>
	);
}
