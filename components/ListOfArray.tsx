import ArrayObjectTemplate from "@/libs/TemplateArrayObject";
import {ShirtProps, RegionProps} from "./Props";
import ButtonPrimaryCircle from "./token/buttons/ButtonPrimaryCircle";
import ButtonSecondaryCircle from "./token/buttons/ButtonSecondaryCircle";
export const ListOfShirtCol_4 = ArrayObjectTemplate<ShirtProps>(
	(el, index, feature) => (
		<div
			className="shrink-0 p-1 basis-1/3
		flex flex-col items-center snap-start snap-always">
			<div className="w-full shadow px-3 py-2 rounded">
				<div className="text-center">
					<div className="font-bold text-xl text-emerald-500">{el.label}</div>
					<div className="font-bold text-xs">รอบอก {el.chest} นิ้ว</div>
					{/* <div className="text-sm text-neutral-800/50">ความยาว {el.chest} นิ้ว</div> */}
				</div>

				<div
					className="text-center rounded-full w-full h-8
			flex flex-row justify-between items-center bg-slate-100
			 ">
					<div className="h-full w-8 flex items-center justify-center">
						<ButtonSecondaryCircle
							onclick={() => feature.stepDown("amont", index)}
							disable={el.amont == 0 ? true : false}>
							-
						</ButtonSecondaryCircle>
					</div>
					<div className="w-1/3 text-xs">
						<input
							type="text"
							value={el.amont}
							onChange={(e) =>
								feature.changeInt("amont", parseInt(e.target.value), index)
							}
							className="bg-transparent outline-none text-center w-full"
						/>
					</div>

					<div className="h-full w-8 flex items-center justify-center">
						{/* <button onClick={() => feature.stepUp("amont", index)}>+</button> */}
						<ButtonSecondaryCircle onclick={() => feature.stepUp("amont", index)}>
							+
						</ButtonSecondaryCircle>
					</div>
				</div>
			</div>
		</div>
	)
);

export const ListOfShirtCol_3 = ArrayObjectTemplate<ShirtProps>(
	(el, index, feature) => (
		<div
			className="flex items-center border-b  px-3 py-2 justify-between"
			key={index}>
			<div className="text-center basis-1/4 w-full h-14 flex flex-col justify-center mr-3 rounded-md">
				<div className="text-3xl font-bold text-emerald-500">{el.label}</div>
			</div>

			<div className="basis-1/2 flex flex-col border-l pl-3">
				<div className="flex flex-col gap-1 text-xs ">
					<div className="font-bold text-sm">รอบออก {el.chest} นิ้ว</div>
					<div className="text-neutral-400">ความยาว {el.length} นิ้ว</div>
				</div>
				<div className="font-bold">$256.00.-</div>
			</div>

			<div className="flex justify-center items-center  basis-1/4 gap-2">
				{/* <button className="p-3 w-full rounded-full">-</button> */}
				<ButtonSecondaryCircle
					onclick={() => feature.stepDown("amont", index)}
					disable={el.amont == 0 ? true : false}>
					-
				</ButtonSecondaryCircle>

				<div className="">
					<input
						type="text"
						value={el.amont}
						onChange={(e) =>
							feature.changeInt("amont", parseInt(e.target.value), index)
						}
						className="bg-transparent focus:outline-none text-center w-12  text-xl font-bold"
					/>
				</div>

				<ButtonSecondaryCircle onclick={() => feature.stepUp("amont", index)}>
					+
				</ButtonSecondaryCircle>
			</div>
		</div>
	)
);

export const ListOfShirtCol_2 = ArrayObjectTemplate<ShirtProps>(
	(el, index, feature) => (
		<div className="border-b border-slate-500/50 flex flex-col justify-between px-3 py-2 items-center">
			<div className="px-1 py-1 w-12 text-center">
				<div className="text-xl ">{el.label}</div>
			</div>
			<div className="flex items-center">
				<input
					type="text"
					value={el.amont}
					onChange={(e) =>
						feature.changeInt("amont", parseInt(e.target.value), index)
					}
					className="bg-transparent focus:outline-none text-center w-24 text-3xl font-bold "
				/>
			</div>

			<div className="flex items-center">
				<div className=" px-3 py-2 text-2xl font-bold">
					<button
						className="h-12 w-12 rounded-full bg-slate-700/25 text-slate-500 active:bg-slate-600 "
						onClick={() => feature.stepDown("amont", index)}>
						-
					</button>
				</div>

				<div className=" px-5 text-slate-400 flex flex-col items-center gap-1">
					{/* <div className="text-xl font-bold">{el.label}</div> */}
					<div className=" text-sm font-light">
						<div>รอบออก {el.chest} นิ้ว</div>
						<div>ความยาว {el.length} นิ้ว</div>

						{/* <div>
							รอบออก {el.chest} นิ้ว | ความยาว {el.length} นิ้ว
						</div> */}
					</div>
				</div>

				<div className=" px-3 py-2 text-2xl font-bold">
					<button
						className="h-12 w-12 rounded-full bg-slate-700/25 text-slate-500 active:bg-slate-600"
						onClick={() => feature.stepUp("amont", index)}>
						+
					</button>
				</div>
			</div>
		</div>
	)
);

export const ListOfShirtCol = ArrayObjectTemplate<ShirtProps>(
	(el, index, feature) => (
		<div className="flex flex-row items-center">
			<div className="text-xl basis-24">{el.label}</div>
			<div className="flex-auto">
				<div className="text-xs/4 text-slate-300/50">
					<div className="">รอบอก {el.chest} นิ้ว</div>
					<p className="">ความยาว {el.length} นิ้ว</p>
				</div>
			</div>
			<div className="flex flex-row items-center">
				<button
					className="p-2 rounded-full hover:bg-slate-100 hover:text-teal-950 active:bg-slate-200 shadow-md active:shadow-sm"
					onClick={() => feature.stepUp("amont", index)}>
					+
				</button>

				<div className="px-1">
					<input
						type="text"
						// className="p-3 text-center m-2 w-32 focus:outline-none bg-transparent"
						className="bg-transparent focus:outline-none text-center w-12"
						value={el.amont}
						onChange={(e) =>
							feature.changeInt("amont", parseInt(e.target.value), index)
						}
					/>
				</div>

				<button
					className="p-2 rounded-full hover:bg-slate-100 hover:text-teal-950 active:bg-slate-200 shadow-md active:shadow-sm"
					onClick={() => feature.stepDown("amont", index)}>
					-
				</button>
			</div>
		</div>
	)
);

export const ListOfShirtRow = ArrayObjectTemplate<ShirtProps>(
	(el, index, feature) => (
		<div className="flex-col text-center px-3 py-2">
			<div className="text-3xl">{el.label}</div>
			<div className="">
				<div className="text-xs/4 text-slate-300/50">
					<div className="">รอบอก {el.chest} นิ้ว</div>
					<p className="">ความยาว {el.length} นิ้ว</p>
				</div>

				<div className="flex flex-row items-center">
					<button
						className="p-2 rounded-full hover:bg-slate-100 hover:text-teal-950 active:bg-slate-200 shadow-md active:shadow-sm"
						onClick={() => feature.stepUp("amont", index)}>
						+
					</button>

					<div className="px-1">
						<input
							type="text"
							// className="p-3 text-center m-2 w-32 focus:outline-none bg-transparent"
							className="bg-transparent focus:outline-none text-center w-12"
							value={el.amont}
							onChange={(e) =>
								feature.changeInt("amont", parseInt(e.target.value), index)
							}
						/>
					</div>

					<button
						className="p-2 rounded-full hover:bg-slate-100 hover:text-teal-950 active:bg-slate-200 shadow-md active:shadow-sm"
						onClick={() => feature.stepDown("amont", index)}>
						-
					</button>
				</div>
			</div>
		</div>
	)
);

export const ListOfShirt = ArrayObjectTemplate<ShirtProps>(
	(el, index, feature) => (
		<div className="flex flex-row items-center my-2">
			<div className="basis-20 text-4xl">{el.label}</div>
			<div className="flex-auto ">
				<div className="text-2xl">รอบออก {el.chest} นิ้ว</div>
				<p className="text-sm text-slate-600">ความยาวเสื้อ {el.length} นิ้ว</p>
			</div>
			<div className="basis-48 flex flex-row">
				{/* <button className="p-3 bg-teal-600 rounded-md">+</button>
				<div>
					<input type="text" className="border" />
				</div>
				<button className="p-3 bg-teal-600 rounded-md">+</button> */}
				<button
					className="p-3 border rounded-full hover:bg-slate-100 active:bg-slate-200 shadow-md active:shadow-sm"
					onClick={() => feature.stepUp("amont", index)}>
					+
				</button>
				<input
					type="text"
					className="p-3 text-center m-2 w-32 focus:outline-none bg-transparent"
					value={el.amont}
					onChange={(e) =>
						feature.changeInt("amont", parseInt(e.target.value), index)
					}
				/>
				<button
					className="p-3 border rounded-full hover:bg-slate-100 active:bg-slate-200 shadow-md active:shadow-sm"
					onClick={() => feature.stepDown("amont", index)}>
					-
				</button>
			</div>
		</div>
	)
);

export const ListOfRegion = ArrayObjectTemplate<RegionProps>(
	(el, index, feature) => (
		<div className="rounded-md flex flex-row">
			<div className="px-3 font-bold : ">Location</div>
			<div>{el.location}</div>
		</div>
	)
);
