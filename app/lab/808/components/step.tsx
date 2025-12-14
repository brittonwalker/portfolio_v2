import { useState, useEffect } from 'react';

export default function Step({ buttonProps, lightProps, onClick, isActive }) {
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
