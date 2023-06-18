import React from "react";

type Props = {};

export default function Preview({}: Props) {
	return (
		<>
			<div className="border basis-1/2 rounded-xl bg-neutral-300/30">01</div>
			<div className="basis-auto ">
				<div className="font-bold">Title Lirema</div>
				<p className="text-neutral-950/50 text-sm ">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
					necessitatibus numquam repudiandae, dolores obcaecati saepe, libero
					repellat, eum est deserunt consequatur possimus? Quam sapiente blanditiis
					distinctio ipsum iusto consequuntur laudantium!
				</p>
			</div>
			<div className="basis-auto flex justify-between">
				<div className="border">
					<div>
						<b>icon</b> Higlith
					</div>
					<div>
						<b>icon</b> Preview
					</div>
				</div>
				<div className="grid grid-rows-2 justify-items-center ">
					<div className="text-center">Change here!</div>
					<div className="flex font-bold justify-center items-center">
						<div className="bg-neutral-950 text-neutral-100 ">
							<button className="px-3 py-2">-</button>
						</div>
						<div className="p-2">2</div>
						<div className="bg-neutral-950 text-neutral-100 ">
							<button className="px-3 py-2">+</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
