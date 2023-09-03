import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function ShootingStar() {
  const mesh = useRef();

  // Generate a random direction
  const direction = useMemo(() => {
    return [Math.random(), Math.random(), Math.random()];
  }, []);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.position.x += direction[0] * 0.1;
      mesh.current.position.y += direction[1] * 0.1;
      mesh.current.position.z += direction[2] * 0.1;
    }
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
}

const Shootingstars = () => {
  // Generate an array with 100 elements and render a ShootingStar component for each
  const numStars = 100;
  const stars = new Array(numStars).fill(null);

  return (
    <Canvas>
      {stars.map((_, index) => (
        <ShootingStar key={index} />
      ))}
    </Canvas>
  );
};

export default Shootingstars;
