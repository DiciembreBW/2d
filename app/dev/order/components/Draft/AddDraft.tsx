import React, {useState} from "react";
import {useOrderContext, useOrderDispatchContext} from "../../OrderContext";
import TemplateDialog from "@/libs/TemplateDialog";
import {DraftType} from "../../OrderTypes";
import Button from "@/components/Button";

type Props = {};

export default function AddDraft({}: Props) {
	const dispatch = useOrderDispatchContext();
	function handleAddDraft(draft: DraftType) {
		// if (!draft) return
		// 	dispatch({
		// 		draft: {
		// 			type: "add",
		// 			value: draft,
		// 		},
		// 	});
		if (draft) {
			dispatch({
				draft: {type: "add", value: draft},
			});
		}
	}

	return (
		<div>
			<Add handle={handleAddDraft}>+</Add>
		</div>
	);
}

const intial_draft_value: DraftType = {
	name: "",
	caption: "",
	selected: false,
};
const Add = TemplateDialog<DraftType>({
	PenddingCallbackDialog: (props, elment, [isOpen, setIsOpen]) => {
		const [draft, setDraft] = useState<DraftType>(intial_draft_value);

		function handleSend() {
			//     if name or caption empty do not something
			if (draft.name == "" || draft.caption == "") return;

			//    send dialog
			props.handle(draft);

			// reset draft =
			setDraft(intial_draft_value);

			// close dialog
			setIsOpen(false);
		}
		return (
			<div className="flex flex-col gap-3">
				<div className="px-3 py-2 text-xl border-b-2 border-neutral-200/10">
					addDraft
				</div>
				<div>
					<label htmlFor="name"></label>
					<input
						type="text"
						id="name"
						value={draft.name}
						onChange={(e) =>
							setDraft((value) => {
								return {...value, name: e.target.value};
							})
						}
						className="px-3 bg-neutral-900/20 rounded py-2 w-full text-neutral-400"
					/>
				</div>

				<div>
					<label htmlFor="name"></label>
					<textarea
						id="name"
						value={draft.caption}
						onChange={(e) =>
							setDraft((value) => {
								return {...value, caption: e.target.value};
							})
						}
						className="px-3 bg-neutral-900/20 rounded w-full py-2 h-48 text-neutral-400"
					/>
				</div>

				<div className="flex justify-center">
					<Button variant="secondary" onclick={() => setIsOpen(false)}>
						x
					</Button>

					<Button variant="primary" onclick={handleSend}>
						Send
					</Button>
				</div>

				{/* <pre> {JSON.stringify(draft, null, 3)} </pre> */}
			</div>
		);
	},
});
