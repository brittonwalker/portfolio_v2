'use client';

import { Canvas as ThreeCanvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import useBodyColor from '@/hooks/use-body-color';

function Scene() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const bodyColor = useBodyColor();

  return (
    <mesh position={[0, 0, 0]} scale={1.0}>
      <planeGeometry args={[10, 10, 1, 1]} />
      <meshBasicMaterial
        ref={materialRef}
        color={bodyColor.foreground}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function Canvas() {
  return (
    <ThreeCanvas>
      <Scene />
    </ThreeCanvas>
  );
}
