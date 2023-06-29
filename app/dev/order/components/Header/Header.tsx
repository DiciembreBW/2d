import React from "react";
import Project from "./Project";
import Title from "./Title";

type Props = {children: React.ReactNode};

export default function Header({children}: Props) {
	return <div className="flex gap-2 justify-center ring">{children}</div>;
}
