'use client';

import { Canvas as ThreeCanvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrthographicCamera } from '@react-three/drei';
import vertexShader from '@/shaders/vertex.glsl';
import fragmentShader from '@/shaders/fragment.glsl';
import useBodyColor from '@/hooks/use-body-color';
import { useInView } from '@/hooks/use-in-view';

const SHAPE_MAP: Record<string, number> = {
  square: 0,
  circle: 1,
  triangle: 2,
  diamond: 3,
};

const MAX_CLICKS = 10;

function Scene({ isVisible }: { isVisible: boolean }) {
  const { accent: color } = useBodyColor();
  const { size, gl } = useThree();
  const clickIx = useRef(0);
  const pixelSize = 6;
  const shapeType = 'diamond';

  const uniforms = useRef({
    uResolution: { value: new THREE.Vector2() },
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(color) },
    uClickPos: {
      value: Array.from(
        { length: MAX_CLICKS },
        () => new THREE.Vector2(-1, -1)
      ),
    },
    uClickTimes: { value: new Float32Array(MAX_CLICKS) },
    uShapeType: { value: SHAPE_MAP[shapeType] ?? 0 },
    uPixelSize: { value: pixelSize },
  });

  useEffect(() => {
    // Use the actual canvas drawing buffer size (accounts for devicePixelRatio)
    const canvas = gl.domElement;
    uniforms.current.uResolution.value.set(canvas.width, canvas.height);
  }, [size, gl]);

  useEffect(() => {
    uniforms.current.uColor.value.set(color);
  }, [color]);

  useEffect(() => {
    const canvas = gl.domElement;

    const handlePointerDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const fx = (e.clientX - rect.left) * (canvas.width / rect.width);
      const fy =
        (rect.height - (e.clientY - rect.top)) * (canvas.height / rect.height);

      const idx = clickIx.current;
      uniforms.current.uClickPos.value[idx].set(fx, fy);
      uniforms.current.uClickTimes.value[idx] = uniforms.current.uTime.value;
      clickIx.current = (idx + 1) % MAX_CLICKS;
    };

    canvas.addEventListener('pointerdown', handlePointerDown);
    return () => canvas.removeEventListener('pointerdown', handlePointerDown);
  }, [gl]);

  useFrame((state) => {
    if (!isVisible) return;
    uniforms.current.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={uniforms.current}
        glslVersion={THREE.GLSL3}
        transparent={true}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

export function Canvas() {
  const [containerRef, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div ref={containerRef} className="w-full h-full">
      <ThreeCanvas frameloop={isInView ? 'always' : 'never'}>
        <OrthographicCamera
          makeDefault
          near={0.1}
          far={1}
          left={-1}
          right={1}
          top={1}
          bottom={-1}
          position={[0, 0, 0.5]}
        />
        <Scene isVisible={isInView} />
      </ThreeCanvas>
    </div>
  );
}
