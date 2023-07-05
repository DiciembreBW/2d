import {usePathname, useRouter} from "next/navigation";
export default function UseRouter() {
	const pathName = usePathname();
	const arr = pathName.split("/");
	return {
		id: arr[arr.length - 1],
		router: useRouter(),
	};
}
