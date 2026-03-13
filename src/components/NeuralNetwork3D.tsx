import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Line } from '@react-three/drei';
import * as THREE from 'three';

const Nodes = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate random nodes for a "neural network" look
  const { nodes, lines } = useMemo(() => {
    const nodes = [];
    const numNodes = 30;
    for (let i = 0; i < numNodes; i++) {
      nodes.push(new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      ));
    }

    const lines = [];
    // Connect nodes that are close to each other
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 2.5) {
          lines.push([nodes[i], nodes[j]]);
        }
      }
    }
    return { nodes, lines };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.2}>
      <group ref={groupRef}>
        {/* Draw lines connecting nodes */}
        {lines.map((line, i) => (
          <Line
            key={`line-${i}`}
            points={line}
            color="#915EFF"
            lineWidth={1}
            transparent
            opacity={0.3}
          />
        ))}
        {/* Draw nodes */}
        {nodes.map((pos, i) => (
          <mesh key={`node-${i}`} position={pos}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#00cea8" emissive="#00cea8" emissiveIntensity={0.5} />
          </mesh>
        ))}
      </group>
    </Float>
  );
};

export default function NeuralNetwork3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 10.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Nodes />
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
