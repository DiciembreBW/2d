import {OrderActionType, OrderType} from "./OrderTypes";

export default function OrderReducer(
	orders: OrderType,
	action: OrderActionType
): OrderType {
	// case header
	switch (action.header?.type) {
		case "update": {
			return {
				...orders,
				[action.header.key_name]: action.header.text,
			};
		}
	}

	// case material
	switch (action.material?.type) {
		case "select": {
			return {
				...orders,
				material: action.material.value,
			};
		}
	}

	// case item
	switch (action.item?.type) {
		case "init": {
			return {
				...orders,
				item: [...orders.item, {...action.item.data}],
			};
		}
	}

	// case draft
	switch (action.draft?.type) {
		case "add": {
			if (action.draft && action.draft.value) {
				return {
					...orders,
					draft: [action.draft.value, ...orders.draft],
				};
			}
		}

		case "delete": {
			return {
				...orders,
				draft: orders.draft.filter((item, index) => index !== action.draft?.id),
			};
		}

		case "select": {
			return {
				...orders,
				draft: orders.draft.map((item, index) => {
					//   reset all draft select false
					item.selected = false;
					// set draft = true
					if (index == action.draft!.id) {
						item.selected = true;
					}
					// return all draft
					return item;
				}),
			};
		}
		default:
			return orders;
	}
}
