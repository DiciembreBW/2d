import React from "react";

type Props = {};

export default function Order({}: Props) {
	return (
		<div>
			<div className="flex justify-between font-bold px-3 py-2 item-center text-xl">
				<div>คำสั่งซื้อ</div>
				<div>+</div>
			</div>

			<div className="grid grid-cols-1 px-3 py-2">
				<OrderItem name="Genrial">แบบร่าง</OrderItem>
				<OrderItem name="genrail Lot-2">แบบร่าง</OrderItem>
				<OrderItem name="Lester Zimmeran">ดำเนินการผลิต</OrderItem>
				<OrderItem name="Horr of titlad">กำลังจัดส่ง</OrderItem>
			</div>
		</div>
	);
}

function OrderItem({
	children,
	name,
}: {
	children: React.ReactNode;
	name: string;
}) {
	return (
		<div className="flex justify-between border-b border-b-neutral-800/10 px-3 py-2">
			<div>
				<div>{name}</div>
				<div className="text-sm">Description</div>
			</div>
			<div>{children}</div>
		</div>
	);
}

function Label() {
	return <div>XL</div>;
}
