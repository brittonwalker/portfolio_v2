'use client';

import { button, useControls } from 'leva';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Step from './step';
import StartButton from './start-button';
import * as Tone from 'tone';
import useSequencer from '../hooks/use-sequencer';

import {
  OrbitControls,
  BakeShadows,
  SoftShadows,
  Center,
} from '@react-three/drei';

export default function Machine() {
  const {
    updateVolume,
    tracks,
    togglePlay,
    toggleStep,
    currentTrack,
    setCurrentTrack,
    setBpm,
    resetTrack,
  } = useSequencer();
  // const directionalLightRef = useRef(null);
  const machine = useLoader(GLTFLoader, '/model/808-merge-test.glb');
  const { nodes, materials } = machine;

  useControls({
    trackSelect: {
      value: currentTrack,
      options: ['kick', 'snare', 'hihat_closed', 'hihat_open'],
      onChange: (value) => {
        setCurrentTrack(value);
      },
    },
    transportBpm: {
      value: 120,
      min: 60,
      max: 240,
      step: 1,
      onChange: (value) => {
        setBpm(value);
      },
    },
    trackVolume: {
      value: 0,
      min: -24,
      max: 6,
      step: 1,
      onChange: (value) => {
        updateVolume(currentTrack, value);
      },
    },
    clearTrack: button(() => {
      resetTrack(currentTrack);
    }),
    toggleStart: button(() => {
      Tone.start();
      togglePlay();
    }),
  });

  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1);

  const steps = [];
  for (let i = 1; i <= 16; i++) {
    steps.push({
      button: {
        castShadow: true,
        receiveShadow: true,
        geometry: (nodes[`step${i}`] as THREE.Mesh).geometry,
        material: (nodes[`step${i}`] as THREE.Mesh).material,
        position: nodes[`step${i}`].position,
      },
      light: {
        castShadow: true,
        receiveShadow: true,
        geometry: (nodes[`step${i}Light`] as THREE.Mesh).geometry,
        material: (nodes[`step${i}Light`] as THREE.Mesh).material,
        position: nodes[`step${i}`].position,
      },
    });
  }

  return (
    <>
      <OrbitControls makeDefault enableZoom={false} />

      <BakeShadows />
      <SoftShadows size={50} samples={17} />

      <directionalLight
        position={[0, 10, 10]}
        intensity={3}
        // ref={directionalLightRef}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
        shadow-camera-near={1}
        shadow-camera-far={10}
      />

      <ambientLight intensity={0.5} />

      <Center>
        <primitive object={nodes.base} />

        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.soundSelector as THREE.Mesh).geometry}
          material={materials.knobBase}
        />

        <StartButton
          buttonProps={{
            castShadow: true,
            receiveShadow: true,
            geometry: (nodes.start as THREE.Mesh).geometry,
            material: (nodes.start as THREE.Mesh).material,
            position: nodes.start.position,
          }}
          onClick={() => {
            console.log('click');
            Tone.start();
            togglePlay();
          }}
        />

        {steps.map((step, index) => {
          const isActive =
            tracks[currentTrack as keyof typeof tracks].steps[index];
          return (
            <Step
              key={index}
              buttonProps={step.button}
              lightProps={step.light}
              onClick={() => {
                console.log(Tone.Transport);
                toggleStep(index);
              }}
              isActive={isActive}
            />
          );
        })}
      </Center>
    </>
  );
}
