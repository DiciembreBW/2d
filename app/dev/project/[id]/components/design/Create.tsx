import Button from "@/components/Button";
import React, {useEffect, useState} from "react";
import {useProjectDispatchContext} from "../../context/ProjectContext";
import DesignItems from "./Items";
import UtilitieDialog from "../../../utilities/Dialog";
import {DesignType} from "../../context/ProjectType";
import {randomId, randomName} from "../../../libs/random";

type Props = {};

export default function Create({}: Props) {
	return (
		<div className="flex justify-between text-xl font-bold text-neutral-800 px-3 py-2 items-center">
			<div>Design</div>
			<HandleCreateDesign>+</HandleCreateDesign>
		</div>
	);
}

const HandleCreateDesign = UtilitieDialog<DesignType>(
	({element, setIsOpen}) => {
		const dispatch = useProjectDispatchContext();
		const [design, setDesign] = useState<DesignType>({
			id: "",
			title: randomName(),
			graphic: {name: "boyd"},
		});

		function createDesign() {
			const value = {...design, id: randomId({length: 4})};

			dispatch({
				design: {
					add: {
						value,
					},
				},
			});

			setIsOpen(false);
			setDesign((value) => {
				return {...value, title: randomName()};
			});
		}

		function handleTitle(text: string) {
			// console.log();
			setDesign((value) => {
				return {...value, title: text};
			});
		}
		return (
			<div className="bg-neutral-200 h-screen px-2">
				<div className="px-3 py-2">Create Design</div>
				<div className="px-3 py-2">
					<input
						type="text"
						className="px-3 py-2 text-center w-full focus:outline-none"
						value={design.title}
						onChange={(e) => handleTitle(e.target.value)}
					/>
				</div>
				<div className="flex justify-center">
					<Button variant="primary" onclick={createDesign}>
						+
					</Button>
					<Button onclick={() => setIsOpen(false)}>X</Button>
				</div>
			</div>
		);
	}
);
