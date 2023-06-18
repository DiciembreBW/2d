"use client";
import {
	OrbitControls,
	AccumulativeShadows,
	PresentationControls,
	Example,
	TransformControls,
	Grid,
	CameraControls,
	PerspectiveCamera,
	ArcballControls,
	Stage,
	Backdrop,
	Shadow,
	MeshReflectorMaterial,
	Decal,
	GradientTexture,
	Environment,
	Lightformer,
	Float,
	Bounds,
	ContactShadows,
	Html,
} from "@react-three/drei";
import {Canvas, Vector3, useFrame, useThree} from "@react-three/fiber";
import React, {Suspense} from "react";
import {AxesHelper, PointLight} from "three";

const LightPosition = [10, 10, 10];

export default function () {
	return (
		<div className="h-full">
			<Canvas camera={{fov: 30, position: [0, 0, 3]}}>
				<group position={[0, 0, 0]}>
					<pointLight intensity={0.5} position={[2.2, 2.2, 3]} />
					<pointLight intensity={0.5} position={[-2.2, -2.2, -3]} />
					<ambientLight intensity={0.5} />

					<Suspense fallback={null}>
						<Float
							speed={1} // Animation speed, defaults to 1
							rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
							floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
							floatingRange={[0, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
						>
							<MyBox size={[2, 2, 2]} />
						</Float>
					</Suspense>
				</group>
				{/* doc */}
				{/* https://codesandbox.io/s/9keg6?file=/src/App.js */}
				{/* <Environment preset="dawn" blur={0.8} /> */}
				<ContactShadows blur={2} far={4.5} />
				<OrbitControls
					minPolarAngle={Math.PI / 2.3}
					maxPolarAngle={Math.PI / 2.2}
				/>
				<axesHelper args={[100]} />
			</Canvas>
		</div>
	);
}
function MyBox({size}: {size: any}) {
	return (
		<mesh castShadow scale={0.36} position={[0, 0.3, 0]}>
			<boxGeometry scale={size} />
			<meshStandardMaterial color="hotgreen" />
		</mesh>
	);
}

function PresetationControl({children}: {children: React.ReactNode}) {
	return (
		<PresentationControls enabled global zoom={1}>
			{children}
			<axesHelper args={[100]} />
		</PresentationControls>
	);
}

function ArcballC() {
	return <ArcballControls enablePan enableZoom />;
}
