import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";
import { Html } from "@react-three/drei";
import { Button } from "@mui/material";


function SetCamera({ shouldZoomOut, navigate }) {
  const [zoomStep, setZoomStep] = useState(50);

  useFrame(({ camera }) => {
    camera.position.z = zoomStep;
  });

  useEffect(() => {
    if (shouldZoomOut) {
      const zoomInterval = setInterval(() => {
        if (zoomStep > 500) {
          clearInterval(zoomInterval);
          navigate("/home");
        } else {
          setZoomStep((prev) => prev + 20);
        }
      }, 50);

      return () => {
        clearInterval(zoomInterval);
      };
    }
  }, [shouldZoomOut, zoomStep, navigate]);

  return null;
}

const fragmentShader = `
  varying vec2 vUv;
  void main() {
    vec3 col;
    float dist = distance(vUv, vec2(0.5, 0.5));
    col = mix(vec3(0.082, 0.082, 0.082), vec3(0.149, 0.196, 0.22), smoothstep(0.2, 0.5, dist));
    gl_FragColor = vec4(col, 1.0);
  }
`;

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

function Portal({ setZoomOut }) {
  const [isClicked, setIsClicked] = useState(false);
  const material = useRef();
  const navigate = useNavigate();

  const handlePortalClick = () => {
    setIsClicked(true);
    setZoomOut(true);
  };

  const handlePointerOver = () => {
    material.current.emissive.set("#000033");
  };

  const handlePointerOut = () => {
    material.current.emissive.set("#000022");
  };

  return (
    <>
      <mesh position={[0, 0, 1]}>
        <torusGeometry args={[8, 0.3, 16, 100]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
        />
      </mesh>
      <mesh
        position={[0, 0, 1]}
        onClick={handlePortalClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <circleGeometry args={[8, 32]} />
        <meshStandardMaterial
          ref={material}
          color="#000000" // Black for the center
          emissive="#000022" // Almost black, but with a hint of blue
          emissiveIntensity={0.7} // Lower intensity for the center
          transparent={true}
          opacity={1}
        />
      </mesh>

      {!isClicked && (
        <Html position={[-3.2, 0.8, 2]}>
        <div
          style={{ color: "#aaa", fontFamily: "Nova Square", fontSize: 20 }} // changed from 'white' to '#aaa' (grey)
          onClick={handlePortalClick}
        >
          VISIT
        </div>
      </Html>
      )}
    </>
  );
}

function ShootingStar({ theta, phi, speed }) {
  const mesh = useRef();
  const line = useRef();
  const [position, setPosition] = useState(new THREE.Vector3());
  const [currentTailLength, setCurrentTailLength] = useState(1);

  useEffect(() => {
    const radius = 8;
    const tube = 0.3;
    const x = (radius + tube * Math.cos(phi)) * Math.cos(theta);
    const y = (radius + tube * Math.cos(phi)) * Math.sin(theta);
    const z = tube * Math.sin(phi);
    setPosition(new THREE.Vector3(x, y, z));
  }, [theta, phi]);

  useFrame(() => {
    if (mesh.current && line.current) {
      mesh.current.position.addScaledVector(position, speed);

      const portalRadius = 8;
      const maxTailLength = 100;
      const distance = mesh.current.position.length();

      if (distance > portalRadius) {
        setCurrentTailLength(
          Math.min(currentTailLength + speed, maxTailLength)
        );
      }

      const tailPosition = position
        .clone()
        .multiplyScalar(-currentTailLength * speed);
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
      <mesh ref={mesh} position={position.toArray()} onPointerOver={null}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="cyan" />
      </mesh>
      <line ref={line}>
        <bufferGeometry attach="geometry" />
        <lineBasicMaterial attach="material" color="cyan" />
      </line>
    </>
  );
}

const ShootingStars = () => {
  const [zoomOut, setZoomOut] = useState(false);
  const navigate = useNavigate();
  const numStars = 600;
  const stars = new Array(numStars).fill(null).map(() => ({
    speed: Math.random() * 0.08 + 0.02,
  }));

  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to bottom, #151515 0%, #263238 100%)",
      }}
    >
      <ambientLight intensity={0.5} />
      <SetCamera shouldZoomOut={zoomOut} navigate={navigate} />
      <Portal setZoomOut={setZoomOut} />
      {stars.map((star, index) => {
        const theta = (index / numStars) * Math.PI * 2;
        const phi = Math.acos((index / numStars) * 2 - 1);
        return (
          <ShootingStar
            key={index}
            theta={theta}
            phi={phi}
            speed={star.speed}
          />
        );
      })}
    </Canvas>
  );
};

export default ShootingStars;
