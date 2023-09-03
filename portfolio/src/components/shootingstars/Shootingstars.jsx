import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Portal() {
  // Create a torus geometry for the portal
  return (
    <mesh position={[0, 0, 0]}>
      <torusGeometry args={[10, 0.5, 16, 100]} />
      <meshBasicMaterial color="purple" />
    </mesh>
  );
}

function ShootingStar() {
  const mesh = useRef();
  const line = useRef();

  // Generate a random point on the border of a torus (which acts as our portal)
  const randomTorusPoint = (radius, tube) => {
    const theta = 2 * Math.PI * Math.random();
    const phi = 2 * Math.PI * Math.random();
    const x = (radius + tube * Math.cos(phi)) * Math.cos(theta);
    const y = (radius + tube * Math.cos(phi)) * Math.sin(theta);
    const z = tube * Math.sin(phi);
    return { x, y, z };
  };

  const initialPosition = randomTorusPoint(10, 0.5);
  const [position] = useState(initialPosition);

  // Initial tail geometry
  const initialTailGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(initialPosition.x, initialPosition.y, initialPosition.z),
    new THREE.Vector3(initialPosition.x, initialPosition.y, initialPosition.z),
  ]);

  useFrame(() => {
    if (mesh.current && line.current) {
      const speed = 0.02;
      mesh.current.position.x += position.x * speed;
      mesh.current.position.y += position.y * speed;
      mesh.current.position.z += position.z * speed;

      // Update tail geometry to make it longer
      const tailLength = 3;
      const newTailGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(mesh.current.position.x, mesh.current.position.y, mesh.current.position.z),
        new THREE.Vector3(
          mesh.current.position.x - position.x * tailLength * speed,
          mesh.current.position.y - position.y * tailLength * speed,
          mesh.current.position.z - position.z * tailLength * speed
        ),
      ]);
      line.current.geometry.dispose();
      line.current.geometry = newTailGeometry;

      const distance = Math.sqrt(
        mesh.current.position.x ** 2 +
        mesh.current.position.y ** 2 +
        mesh.current.position.z ** 2
      );

      if (distance > 100) {
        mesh.current.position.set(0, 0, 0); // Reset to origin
      }
    }
  });

  return (
    <>
      <mesh ref={mesh} position={[initialPosition.x, initialPosition.y, initialPosition.z]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="skyblue" />
      </mesh>
      <line ref={line} geometry={initialTailGeometry}>
        <lineBasicMaterial attach="material" color="white" />
      </line>
    </>
  );
}

const ShootingStars = () => {
  const numStars = 500;
  const stars = new Array(numStars).fill(null);

  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
      <Portal />
      {stars.map((_, index) => (
        <ShootingStar key={index} />
      ))}
    </Canvas>
  );
};

export default ShootingStars;
