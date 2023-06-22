import {useState} from "react";

export default function TemplateEvent<TemplateGeneric>({
	ShowItem,
	Bucket,
	Confirm,
}: {
	ShowItem: (
		el: TemplateGeneric,
		buckets: TemplateGeneric[],
		on: {
			Create: (el: TemplateGeneric) => void;
			Replace: (buckets: TemplateGeneric[]) => void;
			Replace2: (
				// buckets: TemplateGeneri[],
				PenddingCallback: (item: TemplateGeneric) => TemplateGeneric
			) => void;
			onEvent?: any;
		},
		index?: number
	) => React.ReactElement;
	Bucket: (
		el: TemplateGeneric,
		index: number,
		buckets: TemplateGeneric[],
		on: {
			Create: (el: TemplateGeneric) => void;
			Remove: (index: number) => void;
			Update: (el: TemplateGeneric, index: number) => void;
			Replace: (buckets: TemplateGeneric[]) => void;
		}
	) => React.ReactElement;
	Confirm: (buckets: TemplateGeneric[]) => React.ReactElement;
}) {
	return function RenderJSX({
		products,
		onEvent,
	}: {
		products: TemplateGeneric[];
		onEvent?: Function;
	}): React.ReactElement {
		const [buckets, setBucket] = useState<TemplateGeneric[]>([]);

		const On = {
			Create: function (el: TemplateGeneric) {
				buckets.unshift(el);
				setBucket([...buckets]);
			},
			Remove: function (index: number) {
				setBucket(buckets.filter((item, item_key) => item_key !== index));
			},

			Update: function (el: TemplateGeneric, index: number) {
				setBucket(
					buckets.map((item, item_key) => {
						if (item_key == index) {
							item = el;
						}
						return item;
					})
				);
			},

			Replace: function (buckets: TemplateGeneric[]) {
				setBucket(buckets);
			},

			Replace2: function (
				penddingCallback: (item: TemplateGeneric) => TemplateGeneric
			) {
				// setBucket(buckets);
				setBucket(
					buckets.map((item) => {
						return penddingCallback(item);
					})
				);
			},

			onEvent,
		};
		return (
			<div className="flex flex-col gap-2">
				<div>
					<div className="bg-neutral-800 text-neutral-200 px-3 py-2">Show Item</div>

					<div className="flex flex-wrap">
						{products.map((el, index) => (
							<div key={index}>{ShowItem(el, buckets, On, index)}</div>
						))}
					</div>
				</div>

				<div>
					<div className="bg-neutral-800 text-neutral-200 px-3 py-2">Bucket</div>
					{buckets.map((el, index) => (
						<div key={index}>{Bucket(el, index, buckets, On)}</div>
					))}
				</div>

				<div>
					<div className="bg-neutral-800 text-neutral-200 px-3 py-2">confirm</div>
					{Confirm(buckets)}
				</div>
			</div>
		);
	};
}
