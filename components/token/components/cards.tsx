import {ShirtItem} from "./items";
export function CardSlideComponent() {
	return (
		<div
			className="h-full flex
				overflow-x-auto snap-x snap-mandatory justify-center items-center text-center text-3xl">
			<div className="shrink-0 basis-full snap-center snap-always">
				<ShirtItem />
			</div>
		</div>
	);
}

export function CardShirtComponent() {
	return (
		<>
			<div>ราคา 25646.-</div>
			<ShirtItem />
			<ShirtItem />
			<ShirtItem />
			<ShirtItem />
			<ShirtItem />
			<ShirtItem />
			<ShirtItem />
			<ShirtItem />
			<ShirtItem />
		</>
	);
}
