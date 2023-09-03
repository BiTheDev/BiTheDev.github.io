import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ShootingStar() {
  const mesh = useRef();
  const line = useRef();

  // Generate a random point on a circle in the X-Z plane
  const randomCirclePoint = (radius) => {
    const theta = 2 * Math.PI * Math.random();
    const x = radius * Math.cos(theta);
    const y = 0;  // y-coordinate remains the same to keep it in a plane
    const z = radius * Math.sin(theta);
    return { x, y, z };
  };

  const initialPosition = randomCirclePoint(10);  // Starting circle with radius 10
  const [position, setPosition] = useState(initialPosition);
  
  // Initial tail geometry
  const initialTailGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(initialPosition.x, initialPosition.y, initialPosition.z),
    new THREE.Vector3(initialPosition.x, initialPosition.y, initialPosition.z),
  ]);

  useFrame(() => {
    if (mesh.current && line.current) {
      const speed = 0.003;
      mesh.current.position.x += position.x * speed;
      mesh.current.position.y += position.y * speed;
      mesh.current.position.z += position.z * speed;

      // Update tail geometry
      const newTailGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(mesh.current.position.x, mesh.current.position.y, mesh.current.position.z),
        new THREE.Vector3(
          mesh.current.position.x - position.x * 0.1,
          mesh.current.position.y - position.y * 0.1,
          mesh.current.position.z - position.z * 0.1
        ),
      ]);
      line.current.geometry.dispose();  // dispose of old geometry
      line.current.geometry = newTailGeometry;

      const distance = Math.sqrt(
        mesh.current.position.x ** 2 +
        mesh.current.position.y ** 2 +
        mesh.current.position.z ** 2
      );

      if (distance > 40) {
        mesh.current.position.set(0, 0, 0); // Reset to origin
      }
    }
  });

  return (
    <>
      <mesh ref={mesh} position={[initialPosition.x, initialPosition.y, initialPosition.z]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="white" />
      </mesh>
      <line ref={line} geometry={initialTailGeometry}>
        <lineBasicMaterial attach="material" color="white" />
      </line>
    </>
  );
}

const Shootingstars = () => {
  const numStars = 500;
  const stars = new Array(numStars).fill(null);

  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
      {stars.map((_, index) => (
        <ShootingStar key={index} />
      ))}
    </Canvas>
  );
};

export default Shootingstars;
