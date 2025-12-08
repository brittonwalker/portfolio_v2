'use client';

import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Environment } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';

const WordMark = ({ z }) => {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/new-wordmark-transformed.glb');
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);
  const currentRotation = Math.PI / 2;
  const [isHovering, setIsHovering] = useState(false);

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(1),
    y: THREE.MathUtils.randFloatSpread(height),
    rx: Math.random() * Math.PI,
    ry: Math.random() * Math.PI,
    rz: Math.random() * Math.PI,
    currentRotation,
  });

  useFrame((state) => {
    ref.current.position.set(data.x * width, (data.y += 0.02), z);
    if (data.y > height) {
      data.y = -height;
    }
  }, []);

  useEffect(() => {
    if (isHovering) {
      gsap.to(ref.current.rotation, {
        duration: 2,
        y: ref.current.rotation.y + 2 * Math.PI, // Add 360° spin
        ease: 'power3.inOut',
        onComplete: () => setIsHovering(false),
      });
    }
  }, [isHovering]);

  return (
    <group dispose={null} ref={ref} scale={20}>
      <mesh
        geometry={nodes.Curve001.geometry}
        material={materials.SVGMat}
        position={[0, 0, 0]}
        rotation={[currentRotation, 0, 0]}
        onPointerEnter={() => setIsHovering(true)}
      />
    </group>
  );
};

const FloatingA = ({ count = 100 }) => {
  return (
    <div className="h-screen">
      <Canvas
        gl={{ antialias: true }}
        camera={{ near: 0.1, far: 100, position: [0, 0, 6] }}
        shadows
      >
        <directionalLight position={[0, 0, 105]} intensity={5} />
        <directionalLight position={[-50, 0, 5]} intensity={5} />

        <Environment preset="dawn" intensity={100} />
        <Suspense fallback={null}>
          {Array.from({ length: count }).map((_, i) => (
            <WordMark key={i} z={-i} />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingA;
