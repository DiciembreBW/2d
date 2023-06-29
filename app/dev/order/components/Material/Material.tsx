import React, {useState} from "react";
import {useOrderContext, useOrderDispatchContext} from "../../OrderContext";
import {MaterialType} from "../../OrderTypes";
import MaterialSelected from "./MaterialSelected";
import MaterialList from "./MaterialList";
import Project from "../Header/Project";

type Props = {};

export default function Material({}: Props) {
	return (
		<div className="px-3 py-2 ring">
			<MaterialList />
			<MaterialSelected />
		</div>
	);
}
