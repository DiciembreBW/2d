import Chance from "chance";

const change = new Chance();
export function randomId({length}: {length: number}): string {
	// console.log("random");
	return change.string({
		length: length,
		casing: "lower",
		alpha: true,
		numeric: true,
	});
}

export function randomName(): string {
	return change.name();
}
