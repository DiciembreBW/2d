export function ShirtItem() {
	return (
		<div className="shrink-0 flex bg-slate-200">
			<div className="border shrink-0 basis-full bg-slate-100 flex p-6 justify-center items-center">
				<div className="shrink-0 basis-1/3 text-center text-5xl font-bold">XL</div>
				<div className="shrink-0 basis-1/3 gap-2 flex flex-col text-center">
					<div>
						<div className="font-bold">รอบอก 38 นิ้ว</div>
						<div className="text-xs">ความยาว 32 นิ้ว</div>
					</div>
					<_stepper />
				</div>
				<div className="shrink-0 basis-1/3">
					<div className="text-lg text-center font-bold text-black/25">
						ราคาตัวละ
					</div>
					<div className="font-bold text-3xl text-center">356.-</div>
				</div>
			</div>
		</div>
	);
}

//
function _stepper() {
	return (
		<div className="w-full h-full flex items-center justify-between rounded-full gap-2">
			<button className="h-full w-1/4 border rounded-full">-</button>
			<div className="w-1/2">
				<input
					type="text"
					value={3000}
					className="w-full font-bold text- text-xl text-center bg-transparent focus:outline-none "
				/>
			</div>
			<button className="h-full w-1/4 border rounded-full">+</button>
		</div>
	);
}
