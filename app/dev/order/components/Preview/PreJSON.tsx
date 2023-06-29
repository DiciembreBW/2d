import React from "react";
import {useOrderContext} from "../../OrderContext";

type Props = {tab?: number; data?: any};

export default function PreJSON({tab, data}: Props) {
	const order = useOrderContext();
	return <pre>{JSON.stringify(data || order, null, tab || 3)}</pre>;
}
