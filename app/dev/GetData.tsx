import firebase from "@/libs/firebase/firebase";
import React, {useEffect, useState} from "react";
import {PersonItem} from "./Lists";

type Props = {};

type DataType = {
	name: string;
	id?: string;
	lastname: string;
};

const db = firebase<DataType>({colName: "/cities"});
export default function GetData({}: Props) {
	const [data, setData] = useState<DataType[]>([]);
	useEffect(() => {
		fetch("/api/items?collection=cities").then((res) => {
			if (!res.ok) throw new Error("res is not ok");

			// setData(res.json());
			res.json().then((data) => setData(data));
		});
	}, []);

	function onremove(docName: string): void {
		// console.log(id);
		db.DeleteDoc({docName});
	}

	return (
		<div>
			<PersonItem lists={data} setList={setData} />
		</div>
	);
}
