import {ChangeEvent} from "react";

type Props = {
	lists: any[];
	setList: Function;
};

type Features = {
	changeStr: (keys: string, value: string, index: number) => void;
	changeInt: (keys: string, value: number, index: number) => void;
	toggle: (keys: string, index: number) => void;
	stepUp: (keys: string, index: number) => void;
	stepDown: (keys: string, index: number) => void;
};

const config = function Template<T>(
	penddingCallback: (
		el: T,
		index: number,
		feature: Features
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

		//   feature of template
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
		// return jsx
		return (
			<div>
				{props.lists.map((el, index) => (
					<div key={index}>{penddingCallback(el, index, feature)}</div>
				))}
			</div>
		);
	};
};

// export List
type Person = {
	name?: string;
	age?: number;
	alive?: boolean;
};

type Region = {
	location: string;
	region: string;
};

type Shirt = {
	label: string;
	amont: number;
};

export const ListOfShirt = config<Shirt>((el, index, featuers) => (
	<div>
		<span>{el.label}</span>
		<button
			className="p-2 border"
			onClick={() => featuers.stepUp("amont", index)}>
			+
		</button>
		<input
			type="text"
			className="border px-3 py-2 w-16 text-center"
			onChange={(e) =>
				featuers.changeInt("amont", parseInt(e.target.value), index)
			}
			value={el.amont}
		/>

		<button
			className="p-2 border"
			onClick={() => featuers.stepDown("amont", index)}>
			-
		</button>
	</div>
));

export const ListOfPerson = config<Person>((el, index, feature) => (
	<div>
		<div>
			<input
				type="text"
				className="border"
				value={el.name}
				onChange={(e) => {
					feature.changeStr("name", e.target.value, index);
				}}
			/>
		</div>

		<div>
			<input
				type="text"
				className="border"
				value={el.age}
				onChange={(e) => {
					feature.changeInt("age", parseInt(e.target.value), index);
				}}
			/>
		</div>

		<div>
			<button
				className="border px-3 py-2 bg-blue-600 text-slate-50"
				onClick={() => {
					feature.toggle("alive", index);
				}}>
				{JSON.stringify(el.alive)}
			</button>
		</div>
	</div>
));

export const ListOfRegion = config<Region>((el, index, feature) => (
	<div>
		<div>
			<input
				type="text"
				className="border"
				value={el.region}
				onChange={(e) => {
					feature.changeStr("region", e.target.value, index);
				}}
			/>
		</div>

		<div>
			<input
				type="text"
				className="border"
				value={el.location}
				onChange={(e) => {
					feature.changeStr("location", e.target.value, index);
				}}
			/>
		</div>
	</div>
));
