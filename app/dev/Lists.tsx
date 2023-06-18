import TemplateArrayObject from "@/libs/TemplateArrayObject";
type DataType = {
	name: string;
	id?: string;
	lastname: string;
};
export const PersonItem = TemplateArrayObject<DataType>(
	(el, index, feature) => (
		<div
			className="flex border px-3 py-2 rounded shadow justify-between items-center
						bg-neutral-50"
			key={el.id}>
			<div className="basis-1/2">
				<div className="text-2xl">{el.id}</div>
			</div>
			<div className="basis-1/4 flex items-center gap-4">
				<div>
					<div className="text-xl/tight font-bold">{el.name}</div>
					<div className="text-neutral-800/50">{el.lastname}</div>
				</div>
			</div>

			<div className="basis-1/4 flex justify-center gap-3">
				<div
					className="ring h-6 aspect-square text-center rounded-full"
					// onClick={() => ondelete()}
				>
					-
				</div>
				<div className="ring h-6 aspect-square text-center rounded-full">+</div>
			</div>
		</div>
	)
);
