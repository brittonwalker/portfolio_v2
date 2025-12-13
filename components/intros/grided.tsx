'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { Canvas } from '../canvas';
import { useLoading } from '@/context/loading-context';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export function Grided() {
  const { isReady } = useLoading();
  const [duration] = useState(0.8);
  const messageRefs = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-svh flex items-center relative">
      <div
        className="absolute top-0 bottom-0 right-0 left-0 w-full h-full opacity-0 transition-opacity"
        ref={canvasRef}
      >
        <Canvas />
      </div>
      <div className="h-screen w-full">
        <div className="grid w-full h-full grided p-[30px]">
          <div
            style={{
              gridArea: 'name',
            }}
          >
            <div
              className="text-[clamp(32px,12vw,1000px)] -tracking-[.01em] leading-[.9em] text-pretty p-8"
              ref={(el) => {
                if (el) messageRefs.current[0] = el;
              }}
            >
              <h1>Britton Walker</h1>
            </div>
          </div>
          <div
            style={{
              gridArea: 'foot',
            }}
          >
            <div
              className="flex justify-end flex-col h-full"
              ref={containerRef}
            >
              <div
                className="text-[clamp(32px,12vw,1000px)] -tracking-[.01em] leading-[.9em] text-pretty p-8 "
                ref={(el) => {
                  if (el) messageRefs.current[1] = el;
                }}
              >
                <p>
                  Design
                  <br />
                  Engineer
                </p>
              </div>
            </div>
          </div>
          <div className="" style={{ gridArea: 'top' }}>
            <div className="h-full border-t border-r mt-[32px]"></div>
          </div>
          <div className="" style={{ gridArea: 'bottom' }}>
            <div className="h-full border-l border-b"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
