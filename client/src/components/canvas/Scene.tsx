import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Stars } from "@react-three/drei";
import { Suspense } from "react";

function FloatingShape() {
  return (
    <mesh position={[0, 0, 0]}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#64FFDA"
        wireframe
        emissive="#64FFDA"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

export function Scene() {
  return (
    <Canvas style={{ height: "100vh" }}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <FloatingShape />
      </Suspense>
    </Canvas>
  );
}
