import React from "react";
import {useOrderContext} from "../../OrderContext";
import PreJSON from "../Preview/PreJSON";

type Props = {};

export default function MaterialSelected({}: Props) {
	const orders = useOrderContext();

	return (
		<div>
			<div className="text-3xl"> {orders.material.name}</div>
			<div className="text"> {orders.material.caption}</div>
		</div>
	);
}
