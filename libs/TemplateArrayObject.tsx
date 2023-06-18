type Props = {
	lists: any[];
	setList: Function;
	children?: React.ReactNode;
	onclick?: Function;
};

type Features = {
	changeStr: (keys: string, value: string, index: number) => void;
	changeInt: (keys: string, value: number, index: number) => void;
	toggle: (keys: string, index: number) => void;
	stepUp: (keys: string, index: number) => void;
	stepDown: (keys: string, index: number) => void;
	select: (key: string, index: number) => void;
};

// Main Function
export default function <T>(
	penddingCallback: (
		el: T,
		index: number,
		feature: Features,
		props?: Props
	) => React.ReactElement
): (props: Props) => React.ReactElement {
	// function template

	//  Return
	// JSX function
	return function (props: Props) {
		const isExistObject = (index: number, keys: string) => {
			if (props.lists[index][keys] == undefined) {
				throw new Error("this object exist'n");
			}
		};

		const isNanInt = (value: number) => {
			if (isNaN(value)) return;
		};

		//   Feature of template
		const feature: Features = {
			changeStr: (keys: string, value: string, index: number) => {
				isExistObject(index, keys);

				// update string
				props.lists[index][keys] = value;

				// update state
				props.setList([...props.lists]);
			},

			changeInt: (keys: string, value: number, index: number) => {
				// console.log();

				const amont = isNaN(value) ? 0 : value;
				isExistObject(index, keys);

				props.lists[index][keys] = amont;
				// update state
				props.setList([...props.lists]);
			},

			toggle: (keys: string, index: number) => {
				isExistObject(index, keys);
				let value = props.lists[index][keys];

				props.lists[index][keys] = !value;

				props.setList([...props.lists]);
			},

			select: (keys: string, index: number) => {
				isExistObject(index, keys);
				// console.log(keys);

				let value = props.lists.map((value, index_value) => {
					// console.log(value[keys]);
					// reset all status
					value[keys] = false;

					if (index_value == index) {
						value[keys] = true;
					}

					return value;
				});

				// console.log(props.lists);

				props.setList([...value]);
			},

			stepUp: (keys: string, index: number) => {
				const value = props.lists[index][keys];
				isExistObject(index, keys);
				isNanInt(value);

				props.lists[index][keys] = value + 1;

				props.setList([...props.lists]);
			},

			stepDown: (keys: string, index: number) => {
				const value = props.lists[index][keys];
				if (value < 1) return;
				isExistObject(index, keys);

				// console.log();

				props.lists[index][keys] = value - 1;

				props.setList([...props.lists]);
			},
		};

		// Return jsx wrapper
		return (
			// <div className="relative">
			// <div className="flex flex-col bg-neutral-50">
			// <div className="arry_wrapper">
			<>
				{props.lists.map((el, index) =>
					// <div key={index}>{penddingCallback(el, index, feature)}</div>
					penddingCallback(el, index, feature, props)
				)}
			</>
		);
	};
}
