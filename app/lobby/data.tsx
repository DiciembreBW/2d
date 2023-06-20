import TemplateArrayObject from "@/libs/TemplateArrayObject";

import {ItemsType} from "./props";
import Link from "next/link";

export const Items = TemplateArrayObject<ItemsType>((el, index, feature) => (
	<div
		key={index}
		className="flex flex-row justify-between  py-3 border-b border-neutral-600/50 last:border-none">
		<div className="flex flex-col">
			<div className="font-bold text-lime-400">
				<Link href="/lobby/create/tshirt">{el.name}</Link>
			</div>
			<div className="text-sm text-neutral-200/50">{el.description}</div>
		</div>
		<div className="">
			<div className="text-lg">{el.amont} ตัว</div>
		</div>
	</div>
));
