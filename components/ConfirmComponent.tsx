"use client";
import TemplateFom from "@/libs/TemplateForm";

export const ButtonConfirm = TemplateFom(
	(props, features) => (
		<button
			type="submit"
			className="rounded bg-emerald-500 shadow px-3 py-2"
			onClick={() => features.onclick()}>
			{props.children}
		</button>
	),
	({}, feature) => (
		<div className="flex gap-2">
			<button
				onClick={() => feature.onconfirm(0)}
				className="border px-3 py-2 rounded ">
				ปิด
			</button>
			<button
				onClick={() => feature.onconfirm(1)}
				className="border px-3 py-2 rounded bg-emerald-500">
				ตกลง
			</button>
		</div>
	)
);

export const InputConfirm = TemplateFom<{name: string}>(
	(props, features) => (
		<div className="modal_text" onClick={() => features.onclick()}>
			{props.children}
		</div>
	),
	(props, feature, [value, setValue]) => (
		// <div className="flex gap-2 flex-col text-center w-3/4  mx-auto">
		<div className="flex gap-2 flex-col text-center ">
			{/* <div className="mb-6">
				<div className="text-3xl">{}</div>
				<div className="font-bold text-lg">รอบออก {el?.name} นิ้ว</div>
				<div className="text-black/50">ความยาว 38 นิ้ว</div>
			</div> */}
			<div className="">
				<input
					type="number"
					className="px-3 py-2 text-xl font-bold w-full rounded ring focus:outline-none text-center bg-transparent"
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
					}}
					onKeyDown={(e) => {
						if (e.key == "Enter") {
							feature.onconfirm(parseInt(value));
						}
					}}
				/>
			</div>
		</div>
	)
);
// const Form_2 = Template();
