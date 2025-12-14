import { useState, useEffect } from 'react';

export default function VolKnob({ children }) {
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
