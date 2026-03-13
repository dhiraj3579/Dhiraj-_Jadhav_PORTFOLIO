import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Icosahedron, Torus } from '@react-three/drei';
import * as THREE from 'three';

const AbstractShape = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.2}>
      <group ref={groupRef}>
        <Icosahedron args={[1.5, 0]}>
          <meshStandardMaterial color="#915EFF" wireframe />
        </Icosahedron>
        <Icosahedron args={[1, 0]}>
          <meshStandardMaterial color="#00cea8" opacity={0.8} transparent />
        </Icosahedron>
        <Torus args={[2.2, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#ffffff" opacity={0.3} transparent />
        </Torus>
      </group>
    </Float>
  );
};

export default function Experience3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 10.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#915EFF" />
        <AbstractShape />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
