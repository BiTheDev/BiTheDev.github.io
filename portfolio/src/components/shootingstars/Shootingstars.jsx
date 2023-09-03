import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ShootingStar() {
  const mesh = useRef();
  const line = useRef();

  // Generate a random point on a sphere
  const randomSpherePoint = (radius) => {
    const theta = 2 * Math.PI * Math.random();
    const phi = Math.acos(2 * Math.random() - 1);
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    return { x, y, z };
  };

  const initialPosition = randomSpherePoint(20);
  const [position, setPosition] = useState(initialPosition);

  useFrame(() => {
    if (mesh.current) {
      const speed = 0.03;
      mesh.current.position.x += position.x * speed;
      mesh.current.position.y += position.y * speed;
      mesh.current.position.z += position.z * speed;

      const tailGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(mesh.current.position.x, mesh.current.position.y, mesh.current.position.z),
        new THREE.Vector3(
          mesh.current.position.x - position.x * 2 * speed,
          mesh.current.position.y - position.y * 2 * speed,
          mesh.current.position.z - position.z * 2 * speed
        ),
      ]);
      line.current.geometry = tailGeometry;

      const distance = Math.sqrt(
        mesh.current.position.x ** 2 +
        mesh.current.position.y ** 2 +
        mesh.current.position.z ** 2
      );

      if (distance > 40) {
        const newPosition = randomSpherePoint(20);
        mesh.current.position.x = newPosition.x;
        mesh.current.position.y = newPosition.y;
        mesh.current.position.z = newPosition.z;
        setPosition(newPosition);
      }
    }
  });

  return (
    <>
      <mesh ref={mesh} position={[position.x, position.y, position.z]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="black" />
      </mesh>
      <line ref={line}>
        <bufferGeometry attach="geometry" />
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