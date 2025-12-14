'use client';

import Machine from './components/machine';
import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { StrictMode } from 'react';

interface SceneProps {
  children: React.ReactNode;
}

export default function Home() {
  return (
    <Scene>
      <Machine />
    </Scene>
  );
}

const Scene = ({ children }: SceneProps) => {
  const [pixelRatio, setPixelRatio] = useState(1);

  useEffect(() => {
    setPixelRatio(window.devicePixelRatio);
  }, []);

  return (
    <div className="h-screen">
      <StrictMode>
        <Canvas
          shadows
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            outputColorSpace: THREE.SRGBColorSpace,
          }}
          dpr={pixelRatio}
          camera={{
            fov: 16,
            near: 0.1,
            far: 100,
            position: [10, 20, 16],
          }}
        >
          {children}
        </Canvas>
      </StrictMode>
    </div>
  );
};
