import Firebase from "@/libs/firebase/firebase";
import {NextResponse} from "next/server";
import {ProjectType} from "../../dev/project/[id]/context/ProjectType";

// doc
// https://nextjs.org/docs/app/building-your-application/routing/router-handlers
export async function GET(req: Request) {
	const {searchParams} = new URL(req.url);
	const collection = searchParams.get("collection");
	const id = searchParams.get("id");

	// if (collection && id) {
	// 	const db = Firebase<ProjectType>({colName: collection});
	// 	const data = await db.GetDoc({docName: "/" + id});
	// 	return NextResponse.json({res: data});
	// }

	if (collection) {
		const db = Firebase<ProjectType>({colName: collection});
		// get doc with id document
		if (id) {
			const data = await db.GetDoc({docName: "/" + id});
			return NextResponse.json({res: data});
		}

		// get docs collection
		const data = await db.GetDocs();
		return NextResponse.json({res: data});
	}

	// exist's data
	return NextResponse.json({res: []});
}

export async function POST(req: Request) {
	const db = Firebase<ProjectType>({colName: "project"});
	const body = await req.json();

	const id = await db.SetDoc({data: body});
	return NextResponse.json({id});
}
