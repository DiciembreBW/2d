import React from "react";

type Props = {};

export default function LinkPreview({}: Props) {
	return (
		<div className="m-3">
			<div className="flex">
				<a href="" className="text-lime-400">
					Link here to http://localhost:3000/dashboard/design
				</a>
			</div>

			<div className="w-1/5 m-1">
				<div className="flex flex-col bg-neutral-800 rounded-lg p-3">
					<div className="h-56 flex justify-center items-center">Image</div>
					<div>
						<div className="text-xl">Daily Mix 1</div>
						<div className="text-sm text-neutral-400">
							25 hours, NANON, Musketers amd more
						</div>
					</div>
				</div>
			</div>

			<div className="text-slate-100">
				<div className="text-xl">Header text-2xl</div>
				<div className="text-lg">sub heading text-lg</div>
				<div className="text-sm text-neutral-400">
					caption text-sm text-neutral-400
				</div>

				<p className="text-base">
					paragraph text-base Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Minima tempore perferendis quam explicabo sequi quae nulla at iste
					libero aspernatur, inventore necessitatibus quibusdam non sed totam.
					Consectetur optio sed placeat!
				</p>
			</div>
		</div>
	);
}
