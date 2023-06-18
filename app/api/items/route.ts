import firebase from "@/libs/firebase/firebase";
import {NextResponse} from "next/server";

type DataType = {
	name: string;
	id?: string;
	lastname: string;
};

export async function GET(req: Request) {
	const {searchParams} = new URL(req.url);

	const collection = searchParams.get("collection");

	if (collection) {
		const db = firebase<DataType>({colName: collection});
		const data = await db.GetDocs();

		return NextResponse.json(data);
	}
}

export async function POST(req: Request) {
	// reqconst new url
	return NextResponse.json({name: "pass"});
}
