"use client";
import React, {useEffect, useState} from "react";
import path from "../libs/useRouter";
import ProjectProvider from "./context/ProjectProvider";
import NameComponent from "./components/name/NameComponent";
import GetAllProjectProp from "./components/project/GetAllProjectProp";
import Design from "./components/design/Design";
import Order from "./components/orders/Order";

type Props = {};

export default async function IdPage({}: Props) {
	const {id, router} = path();

	const res = await fetch(
		`http://localhost:3000/api/project?collection=project&id=${id}`
	);
	const data = await res.json();

	return (
		<div className="grid grid-cols-1 gap-3 ">
			<ProjectProvider init_value={data.res}>
				<NameComponent />
				<Design />
				<Order />
			</ProjectProvider>
		</div>
	);
}
