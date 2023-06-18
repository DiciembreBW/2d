"use client";
import {ListOfRegion, ListOfShirt} from "@/components/ListOfArray";
import PreviewJSON from "@/components/PreviewJSON";
import {Input, TextArea} from "@/libs/InputElement";
import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from "react";
import {ShirtProps, RegionProps} from "@/components/Props";

export default function page() {
	const [text, setText] = useState("");
	const PersonState = useState({name: "xxx", age: 12});
	// const [lists, setList] = useState<lists>(Lists);
	const [persons, setPerson] = useState([
		{name: "boyd", age: 31, alive: true},
		{name: "dad", age: 67, alive: false},
	]);

	const [regions, setRegion] = useState<RegionProps[]>([
		{location: "Chiangmai", region: "Thailand"},
		{location: "Nangasaki", region: "Japan"},
	]);

	const [shirts, setShirt] = useState<ShirtProps[]>([
		{
			label: "XS",
			amont: 1,
			chest: 32,
			length: 24,
		},
		{
			label: "S",
			amont: 3,
			chest: 34,
			length: 25,
		},
		{
			label: "M",
			amont: 45,
			chest: 38,
			length: 27,
		},
	]);
	return (
		<div className="px-3 py-2">
			{/* <ListOfPerson lists={persons} setList={setPerson} /> */}
			{/* <ListOfRegion lists={regions} setList={setRegion} /> */}
			<ListOfShirt lists={shirts} setList={setShirt} />
			{/* <PreviewJSON data={shirts} title="state" /> */}
		</div>
	);
}
