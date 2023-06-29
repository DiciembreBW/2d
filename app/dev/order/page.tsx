"use client";
import React from "react";
import OrderProvider from "./OrderProvider";
import PreJSON from "./components/Preview/PreJSON";
import Draft from "./components/Draft/Draft";
import Header from "./components/Header/Header";
import Material from "./components/Material/Material";
import Items from "./components/Items/Items";
import Project from "./components/Header/Project";
import Title from "./components/Header/Title";

type Props = {};

export default function OrderPage({}: Props) {
	return (
		<div>
			<OrderProvider>
				<div className="grid grid-cols-1 gap-3">
					<Header>
						<Project /> / <Title />
					</Header>
					<Draft />
					<Material />
					<Items />

					<PreJSON />
				</div>
			</OrderProvider>
		</div>
	);
}

// type OnPart = {
// 	design?: string;
// 	color?: string;
// };

// type Part = {
// 	material: string;
// 	on_part?: OnPart;
// };

// // sleeve
// type Concave = {
// 	ragular?: OnPart;
// 	curve?: OnPart;
// };

// type SleeveType = {
// 	short?: OnPart;
// 	long?: OnPart;
// 	sleeveless?: OnPart;
// 	concave?: Concave;
// };

// // neck
// type Neck = {
// 	round?: Part;
// 	collar?: Part;
// 	v_neck?: Part;
// 	square_neck?: Part;
// };

// // sleeve type
// type Sleeves = {
// 	material: string;
// 	left: OnPart;
// 	right: OnPart;
// 	sleeve_type: SleeveType;
// };

// // body type
// type Bodies = {
// 	material: string;
// 	front: OnPart;
// 	back: OnPart;
// };

// // *** Shirt Type
// type ShirtType = {
// 	body: Bodies;
// 	sleeves: Sleeves;
// 	neck: Neck;
// };
