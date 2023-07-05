import {ProjectType} from "../[id]/context/ProjectType";

export async function getProjectItems(collectionName: string) {
	const res = await fetch(
		`http://localhost:3000/api/project?collection=${collectionName}`,
		{
			next: {revalidate: 0},
			// cache: "no-store",
			// next: {revalidate: 0},
			// cache: "no-store",
		}
	);

	if (!res.ok) {
		throw new Error("fail load data");
	}

	return res;
}

export async function createProjectItem(
	data: ProjectType
): Promise<{id: number}> {
	// console.log("pass");
	const res = await fetch("http://localhost:3000/api/project", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	// console.log(await res.json());
	return await res.json();
}

export async function getProjectItem({
	collection,
	doc,
}: {
	collection: string;
	doc: string;
}) {
	const res = await fetch(
		`http://localhost:3000/api/project?collection=${collection}&id=${doc}`
	);

	return await res.json();
}
