"use client";
import Button from "@/components/Button";
import React from "react";
import {createProjectItem, getProjectItems} from "../libs/api";
import ProjectPath from "../libs/useRouter";

type Props = {};

export default function ProjectCreate({}: Props) {
	const {router} = ProjectPath();
	async function handleCreate(name?: string) {
		const res = await createProjectItem({
			owner: "boyd",
			name: "thailand",
			designs: [],
		});
		if (res.id) {
			router.push(`/dev/project/${res.id}`);
			router.refresh();
		}
	}
	return (
		<div className="flex">
			<Button variant="primary" onclick={handleCreate}>
				+
			</Button>

			<Button onclick={handleCreate}> get data</Button>
		</div>
	);
}
