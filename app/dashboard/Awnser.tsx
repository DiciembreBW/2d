import React from "react";
import ButtonSecondary from "@/components/token/buttons/ButtonSecondary";

type Props = {};

export default function Awnser({}: Props) {
	return (
		<>
			<div className="py-3 rounded-xl">
				<div className="flex items-center justify-between gap-8 border-b border-slate-200/50 py-2">
					<div className="flex gap-3">
						<div className="border rounded-full w-11 h-11 flex justify-center items-center">
							img
						</div>
						<div>
							<div>UI Component</div>
							<div>Woradet B.</div>
						</div>
					</div>

					<div className="text-2xl basis-2/6">Draft - 1</div>
				</div>
				<div className="py-3">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab porro
					</p>
				</div>
			</div>

			<div className="flex justify-between">
				<div>
					<a href="" className="text-emerald-500 text-sm">
						แขนสั้น คอกลม
					</a>
					<div className="text-sm ">
						<div>8/6/23 16:22</div>
					</div>
				</div>
				<div>
					<ButtonSecondary>อนุมัติ</ButtonSecondary>
				</div>
			</div>
		</>
	);
}
