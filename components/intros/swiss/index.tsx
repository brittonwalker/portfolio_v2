'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { useLoading } from '@/context/loading-context';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './styles.css';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export function Swiss() {
  const { isReady } = useLoading();
  const frameRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const frame = frameRef.current;
    const text = textRef.current;
    const video = videoRef.current;

    if (!frame || !text || !video) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      gsap
        .timeline({
          defaults: {
            ease: 'none',
          },
          scrollTrigger: {
            trigger: frame,
            start: 'clamp(top bottom)',
            end: 'bottom top',
            scrub: true,
          },
        })
        .to(frame, {
          yPercent: 35,
          scale: 0.95,
          startAt: { filter: 'brightness(100%) blur(0px)' },
          filter: 'blur(3px)',
        })
        .to(text, { yPercent: -100 }, 0)
        .to(video, { yPercent: -30 }, 0);
    });
  }, []);

  return (
    <div
      className="lg:min-h-svh relative px-4 lg:px-8 pt-20 swiss"
      ref={frameRef}
    >
      <div className="swiss-top-left mt-[32px]">
        <h1 className="heading">
          B<span className="text-accent">.</span> Walker
        </h1>
      </div>
      <div className="swiss-bottom-left mt-[32px] w-full h-full flex flex-col justify-end">
        <p className="lg:max-w-[586px] lg:mb-16" ref={textRef}>
          I’m Britton, a Brooklyn-based developer building thoughtful digital
          experiences where design and engineering meet. I bring 10 years of
          experience working with cross-functional teams, focused on building
          clear, reliable digital systems.
        </p>
      </div>
      <div className="swiss-bottom-right flex flex-col items-end mt-[32px] relative">
        <div className="w-1/2">
          <video
            ref={videoRef}
            src={'/video/bboys-ocean.webm'}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
