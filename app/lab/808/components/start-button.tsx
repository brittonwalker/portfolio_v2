import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function StartButton({ buttonProps, onClick }) {
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
