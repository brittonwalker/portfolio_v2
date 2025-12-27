import * as THREE from 'three';
import { useState, useEffect } from 'react';

interface VolKnobProps {
  children: {
    geometry: THREE.BufferGeometry;
    material: THREE.Material | THREE.Material[];
    position: THREE.Vector3;
    castShadow?: boolean;
    receiveShadow?: boolean;
  }[];
}

export default function VolKnob({ children }: VolKnobProps) {
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);
  return (
    <group
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {children.map((child, idx) => {
        return <mesh key={idx} {...child} />;
      })}
    </group>
  );
}
