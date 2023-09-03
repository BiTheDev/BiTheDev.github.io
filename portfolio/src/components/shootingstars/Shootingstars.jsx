import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SetCamera() {
  useFrame(({ camera }) => {
    camera.position.z = 50;
  });
  return null;
}

function Portal() {
  return (
    <mesh position={[0, 0, 0]}>
      <torusGeometry args={[10, 0.5, 16, 100]} />
      <meshStandardMaterial color="purple" emissive="purple" emissiveIntensity={0.5} />
    </mesh>
  );
}

function ShootingStar({ theta, phi }) {
  const mesh = useRef();
  const line = useRef();
  const [position, setPosition] = useState(new THREE.Vector3());
  const [currentTailLength, setCurrentTailLength] = useState(1);

  useEffect(() => {
    const radius = 10;
    const tube = 0.5;
    const x = (radius + tube * Math.cos(phi)) * Math.cos(theta);
    const y = (radius + tube * Math.cos(phi)) * Math.sin(theta);
    const z = tube * Math.sin(phi);
    setPosition(new THREE.Vector3(x, y, z));
  }, [theta, phi]);

  useFrame(() => {
    if (mesh.current && line.current) {
      const speed = 0.05;
      mesh.current.position.addScaledVector(position, speed);

      const portalRadius = 5;
      const maxTailLength = 150;
      const distance = mesh.current.position.length();

      if (distance > portalRadius) {
        setCurrentTailLength(Math.min(currentTailLength + 0.9, maxTailLength));
      }

      const tailPosition = position.clone().multiplyScalar(-currentTailLength * speed);
      tailPosition.add(mesh.current.position);

      const newTailGeometry = new THREE.BufferGeometry().setFromPoints([
        mesh.current.position.clone(),
        tailPosition,
      ]);
      line.current.geometry.dispose();
      line.current.geometry = newTailGeometry;

      if (distance > 100) {
        mesh.current.position.copy(position);
        setCurrentTailLength(1);
      }
    }
  });

  return (
    <>
      <mesh ref={mesh} position={position.toArray()}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="skyblue" />
      </mesh>
      <line ref={line}>
        <bufferGeometry attach="geometry" />
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
      <ambientLight intensity={0.5} />
      <SetCamera />
      <Portal />
      {stars.map((_, index) => {
        const theta = (index / numStars) * Math.PI * 2;
        const phi = Math.acos((index / numStars) * 2 - 1);
        return <ShootingStar key={index} theta={theta} phi={phi} />;
      })}
    </Canvas>
  );
};

export default ShootingStars;
