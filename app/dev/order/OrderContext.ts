import {Dispatch, createContext, useContext} from "react";
import {OrderActionType, OrderType, init_value} from "./OrderTypes";

export const OrdersContext = createContext<OrderType>(init_value);
export const OrderDispatchContext = createContext<Dispatch<OrderActionType>>(
	() => {}
);

export function useOrderContext() {
	return useContext(OrdersContext);
}

export function useOrderDispatchContext() {
	return useContext(OrderDispatchContext);
}
