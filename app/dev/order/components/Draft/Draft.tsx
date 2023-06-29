import React from "react";
import AddDraft from "./AddDraft";
import DraftList from "./DraftList";

type Props = {};

export default function Draft({}: Props) {
	return (
		<div className="ring px-3">
			<div className="flex justify-between py-2">
				<div>Draft</div>
				<AddDraft />
			</div>

			<div className="py-2">
				<DraftList />
			</div>
		</div>
	);
}
