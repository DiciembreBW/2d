import Chance from "chance";
const chance = new Chance();

export const Id = (length: number) => {
	return chance.string({alpha: true, length, casing: "lower", numeric: true});
};
