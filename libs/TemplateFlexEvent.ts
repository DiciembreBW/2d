import {useState} from "react";

export default function FlexEvent<TemplateGeneric>(
	IntialValue: TemplateGeneric,
	penddingCallback: (
		// State
		State: [
			TemplateGeneric,
			(value: React.SetStateAction<TemplateGeneric>) => any
		],
		// On Evenet
		on: {
			Create: (value: TemplateGeneric) => void;
			Confirm: () => void;
		}
	) => React.ReactElement
) {
	//  state
	const State = useState<TemplateGeneric>(IntialValue);
	const [state, setStata] = State;

	//  feature
	const on = {
		Create: (value: TemplateGeneric) => {},
		Confirm: () => console.log(state),
	};

	// Run pendding callback
	return penddingCallback(State, on);
}
