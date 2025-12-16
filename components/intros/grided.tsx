'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { Canvas } from '../canvas';
import { useLoading } from '@/context/loading-context';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export function Grided() {
  const { isReady } = useLoading();
  const messageRefs = useRef<HTMLDivElement[]>([]);
  const lineRefs = useRef<
    { el: HTMLDivElement; direction: 'horizontal' | 'vertical' }[]
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!isReady) return;

    const tl = gsap.timeline({
      defaults: {
        ease: 'power1.inOut',
        duration: 1,
      },
    });

    gsap.to(canvasRef.current, { opacity: 1, duration: 1 });

    gsap.set(
      lineRefs.current.map(({ el }) => el),
      { opacity: 1 }
    );

    lineRefs.current.forEach(({ el, direction }) => {
      if (direction === 'horizontal') {
        tl.fromTo(
          el,
          {
            scaleX: 0,
            transformOrigin: 'left center',
          },
          {
            scaleX: 1,
            transformOrigin: 'left center',
            ease: 'power2.out',
            duration: 1.6,
          },
          '<'
        );
      } else {
        tl.fromTo(
          el,
          {
            scaleY: 0,
            transformOrigin: 'center top',
          },
          {
            scaleY: 1,
            transformOrigin: 'center top',
            ease: 'power2.out',
            duration: 1.6,
          },
          '<'
        );
      }
    });

    const split = new SplitText(messageRefs.current, {
      type: 'lines',
      mask: 'lines',
    });

    gsap.set(messageRefs.current, {
      opacity: 1,
    });

    tl.from(
      split.lines,
      {
        yPercent: 100,
        stagger: 0.1,
        ease: 'power2.out',
      },
      '<'
    );
  }, [isReady]);

  return (
    <div className="min-h-svh flex items-center relative">
      <div
        className="absolute top-0 bottom-0 right-0 left-0 w-full h-full opacity-0"
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
              className="text-[clamp(32px,12vw,1000px)] -tracking-[.01em] leading-[.9em] text-pretty opacity-0 mt-[32px]"
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
                className="text-[clamp(32px,12vw,1000px)] -tracking-[.01em] leading-[1.1em] text-pretty opacity-0 pointer-events-none"
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
            <div className="h-full mt-[32px] relative">
              <div
                className="absolute bg-white right-0 top-0 w-full h-[1px] opacity-0"
                ref={(el) => {
                  if (el) lineRefs.current[0] = { el, direction: 'horizontal' };
                }}
              />
              <div
                className="absolute bg-white right-0 top-0 w-[1px] h-full opacity-0"
                ref={(el) => {
                  if (el) lineRefs.current[1] = { el, direction: 'vertical' };
                }}
              ></div>
            </div>
          </div>
          <div className="relative pt-8" style={{ gridArea: 'bottom' }}>
            <div
              className="absolute bg-white left-0 bottom-0 w-full h-[1px] opacity-0"
              ref={(el) => {
                if (el) lineRefs.current[2] = { el, direction: 'horizontal' };
              }}
            ></div>
            <div
              className="absolute bg-white left-0 bottom-0 w-[1px] h-full opacity-0"
              ref={(el) => {
                if (el) lineRefs.current[3] = { el, direction: 'vertical' };
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
