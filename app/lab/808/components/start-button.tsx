import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

interface StartButtonProps {
  buttonProps: {
    geometry: THREE.BufferGeometry;
    material: THREE.Material | THREE.Material[];
    position: THREE.Vector3;
    castShadow?: boolean;
    receiveShadow?: boolean;
  };
  onClick: () => void;
}

export default function StartButton({
  buttonProps,
  onClick,
}: StartButtonProps) {
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
    </group>
  );
}
