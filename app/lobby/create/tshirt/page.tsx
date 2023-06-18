import React from "react";
import DraftComponent from "./DraftComponent";
import ProductComponent from "./ProductComponent";

type Props = {};

export default function CreateTShirtPage({}: Props) {
	return (
		<div className="grid grid-cols-1 gap-3 md:grid-cols-2">
			<DraftComponent />
			<ProductComponent />
		</div>
	);
}
