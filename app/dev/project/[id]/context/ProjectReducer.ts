import {ProjectActionType, ProjectType} from "./ProjectType";

export default function ProjectReducer(
	project: ProjectType,
	action: ProjectActionType
): ProjectType {
	// return handleDesignDispatch(project, action);
	// const {name} = action;
	// if (action.design) {
	// 	switch (action.design.type) {
	// 		case "add": {
	// 			return {...project, designs: [...project.designs, action.design.value]};
	// 		}
	// 		default: {
	// 			return project;
	// 		}
	// 	}
	// }

	if (action.name) {
		switch (action.name?.type) {
			case "update": {
				return {...project, name: action.name.text};
			}
			default:
				return project;
		}
	}

	// handle design
	const {design} = action;
	const {designs} = project;
	if (design) {
		const {remove, add} = design;

		// handle remove
		if (remove !== undefined) {
			// filter
			const values = designs.filter((item, index) => index !== remove.index);

			// update and return project
			return {...project, designs: values};
		}

		// handle add
		if (add !== undefined) {
			// shirt first
			designs.unshift(add.value);

			// return
			return {...project};
		}
	}

	return project;
}
