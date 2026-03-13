import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      torusRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.2}>
      <Sphere ref={meshRef} args={[1.2, 64, 64]}>
        <MeshDistortMaterial
          color="#915EFF"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </Sphere>
      <Sphere args={[0.9, 32, 32]}>
        <MeshDistortMaterial
          color="#00cea8"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.1}
          metalness={1}
          opacity={0.8}
          transparent
        />
      </Sphere>
      <TorusKnot ref={torusRef} args={[1.8, 0.05, 128, 16]}>
        <meshStandardMaterial color="#915EFF" roughness={0.1} metalness={0.8} />
      </TorusKnot>
    </Float>
  );
};

export default function Hero3DModel() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 9.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#915EFF" />
        <AnimatedShape />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
}
