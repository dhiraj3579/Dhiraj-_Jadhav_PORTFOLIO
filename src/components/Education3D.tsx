import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

const AtomShape = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
    }
    if (ring1Ref.current) ring1Ref.current.rotation.x = t * 0.5;
    if (ring2Ref.current) ring2Ref.current.rotation.y = t * 0.5;
    if (ring3Ref.current) ring3Ref.current.rotation.z = t * 0.5;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.2}>
      <group ref={groupRef}>
        {/* Nucleus */}
        <Sphere args={[0.6, 32, 32]}>
          <meshStandardMaterial color="#915EFF" emissive="#915EFF" emissiveIntensity={0.5} />
        </Sphere>
        
        {/* Electron Rings */}
        <Torus ref={ring1Ref} args={[2, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#00cea8" />
        </Torus>
        <Torus ref={ring2Ref} args={[2, 0.05, 16, 100]} rotation={[0, Math.PI / 2, 0]}>
          <meshStandardMaterial color="#00cea8" />
        </Torus>
        <Torus ref={ring3Ref} args={[2, 0.05, 16, 100]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#00cea8" />
        </Torus>
      </group>
    </Float>
  );
};

export default function Education3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 9.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AtomShape />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
