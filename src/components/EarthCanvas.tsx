import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const DataGlobe = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.Group>(null);

  // Generate random points on a sphere
  const { positions, lines } = useMemo(() => {
    const count = 100;
    const radius = 2;
    const positions = new Float32Array(count * 3);
    const points: THREE.Vector3[] = [];

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      points.push(new THREE.Vector3(x, y, z));
    }

    // Connect close points to form a network
    const lines: THREE.Vector3[][] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (points[i].distanceTo(points[j]) < 1.2) {
          lines.push([points[i], points[j]]);
        }
      }
    }

    return { positions, lines };
  }, []);

  useFrame((state) => {
    if (pointsRef.current && linesRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      linesRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} stride={3}>
        <PointMaterial transparent color="#00cea8" size={0.05} sizeAttenuation={true} depthWrite={false} />
      </Points>
      <group ref={linesRef}>
        {lines.map((line, index) => (
          <Line key={index} points={line} color="#915EFF" opacity={0.3} transparent lineWidth={1} />
        ))}
      </group>
      <Sphere args={[1.9, 32, 32]}>
        <meshBasicMaterial color="#050816" transparent opacity={0.8} />
      </Sphere>
    </group>
  );
};

export default function NetworkCanvas() {
  return (
    <div className="w-full h-full min-h-[350px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <DataGlobe />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
