import React, {useReducer} from "react";
import {OrderDispatchContext, OrdersContext} from "./OrderContext";
import {init_value} from "./OrderTypes";
import OrderReducer from "./OrderReducer";

type Props = {
	children: React.ReactNode;
};

export default function OrderProvider({children}: Props) {
	const [orders, dispatch] = useReducer(OrderReducer, init_value);
	return (
		<OrdersContext.Provider value={orders}>
			<OrderDispatchContext.Provider value={dispatch}>
				{children}
			</OrderDispatchContext.Provider>
		</OrdersContext.Provider>
	);
}
