"use client";
import React from "react";
import {LevelContext} from "./LevelContext";

type Props = {children: React.ReactNode; level: number};

export default function Section({children, level}: Props) {
	return <LevelContext.Provider value={level}>{children}</LevelContext.Provider>;
	// return <section>{children}</section>;
}
