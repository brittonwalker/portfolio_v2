import * as THREE from 'three';
import { useState, useEffect } from 'react';

interface StepProps {
  buttonProps: {
    geometry: THREE.BufferGeometry;
    material: THREE.Material | THREE.Material[];
    position: THREE.Vector3;
    castShadow?: boolean;
    receiveShadow?: boolean;
  };
  lightProps: {
    geometry: THREE.BufferGeometry;
    position: THREE.Vector3;
  };
  onClick: () => void;
  isActive: boolean;
}

export default function Step({
  buttonProps,
  lightProps,
  onClick,
  isActive,
}: StepProps) {
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto';
  }, [hovered]);
  return (
    <group
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh {...buttonProps} />
      <mesh {...lightProps}>
        <meshBasicMaterial color={isActive ? '#bc1d1d' : '#000000'} />
      </mesh>
    </group>
  );
}
