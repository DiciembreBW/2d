"use client";
import React, {useContext} from "react";
import {LevelContext} from "./LevelContext";
type Props = {children: React.ReactNode};

export default function Header({children}: Props) {
	const level = useContext(LevelContext);
	console.log(level);

	switch (level) {
		case 1:
			return <div className="text-lg">{children}</div>;
		case 2:
			return <div className="text-2xl">{children}</div>;
		case 3:
			return <div className="text-3xl">{children}</div>;
		case 3:
			return <div className="text-4xl">{children}</div>;
		case 4:
			return <div className="text-4xl">{children}</div>;
		case 5:
			return <div className="text-5xl">{children}</div>;
		default:
			return <div>{children}</div>;
	}
}
