"use client";

import {
	ContactShadows,
	Float,
	Html,
	OrbitControls,
	useGLTF,
	useProgress,
} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import React, {Suspense, useState} from "react";

import Duck from "@/components/Duck";
import Shirt from "@/components/Shirt";

type Props = {};
export default function page({}: Props) {
	return (
		<div className="h-full">
			<Canvas camera={{fov: 30, position: [6, 6, 6]}}>
				<pointLight intensity={1} position={[3, 3, 5]} />
				<ambientLight intensity={1} />
				<Suspense fallback={<Loader />}>
					<group>
						<Float rotationIntensity={0} floatingRange={[0.2, 1]}>
							<Duck />
						</Float>
					</group>
				</Suspense>

				<ContactShadows far={10} blur={3} opacity={0.5} resolution={72} />
				<OrbitControls
					// rotateSpeed={0.5}
					minPolarAngle={Math.PI / 3}
					maxPolarAngle={Math.PI / 2.5}
				/>
			</Canvas>
		</div>
	);
}

function Loader(): React.ReactElement {
	const {progress, active, errors, item, loaded, total} = useProgress();
	console.log(progress);

	return <Html center>{progress} % loaded</Html>;
}
