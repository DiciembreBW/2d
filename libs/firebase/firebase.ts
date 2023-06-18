import {
	DocumentSnapshot,
	QueryDocumentSnapshot,
	QuerySnapshot,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	setDoc,
} from "firebase/firestore";
import {Id} from "@/libs/generate";
import app from "./init";
const db = getFirestore(app);

export function SetDoc({docName, data}: {docName: string; data: object}): void {
	const docRef = doc(db, docName);
	console.log("pass");
	setDoc(docRef, data);
}

export function SetDocMerge({
	docName,
	data,
}: {
	docName: string;
	data: object;
}): void {
	const docRef = doc(db, docName);
	setDoc(docRef, data, {merge: true});
}

export async function DeleteDoc({docName}: {docName: string}) {
	const docRef = doc(db, docName);
	await deleteDoc(docRef).then((r) => console.log(r));
}

export async function GetDoc({docName}: {docName: string}) {
	const docRef = doc(db, docName);
	const docSnap = await getDoc(docRef);

	return docSnap.exists() ? docSnap.data() : null;
}

export async function GetDocs(
	docName: string,
	penddingCallback: (query: QueryDocumentSnapshot) => void
) {
	const docRef = collection(db, docName);

	const querySnapshot = await getDocs(docRef);
	querySnapshot.forEach((query) => penddingCallback(query));
}

//

function getQuerySnapshot<T>(querySnapshot: QuerySnapshot): T {
	let data: T | any = [];
	querySnapshot.forEach((query) => {
		if (query.exists()) {
			// data.push(query.data());
			data.push(query.data());
		}
	});

	return data;
}

function getQueryDoc<T>(query: DocumentSnapshot): T {
	let data: T | any = query.exists() ? query.data() : null;
	return data;
}

export default function <T>({colName}: {colName: string}) {
	const colRef = collection(db, colName);

	return {
		//   get docs
		GetDocs: async function (): Promise<T[]> {
			const querySnapshot = await getDocs(colRef);
			return getQuerySnapshot(querySnapshot);
		},

		// get doc
		GetDoc: async function ({docName}: {docName: string}): Promise<T> {
			const docRef = doc(db, colName + docName);
			const docSnap = await getDoc(docRef);

			// return docSnap.data();
			return getQueryDoc(docSnap);
		},

		// set doc
		SetDoc: function ({data, id}: {data: T; id?: string}): void {
			let newData = {id: id || Id(8), ...data};

			const docRef = doc(db, colName + "/" + newData.id);
			setDoc(docRef, newData);
		},

		// remove
		DeleteDoc: async function ({docName}: {docName: string}) {
			const docRef = doc(db, colName + "/" + docName);
			await deleteDoc(docRef).then((r) => console.log(r));
		},
	};
}
