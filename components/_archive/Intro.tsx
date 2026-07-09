'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, SplitText);

export default function Intro() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!headingRef.current) return;

    const split = new SplitText(headingRef.current, {
      type: 'words',
    });
    const subSplit = new SplitText(subtitleRef.current, {
      type: 'lines',
    });

    gsap.set(headingRef.current, { opacity: 1, yPercent: 100 });

    const tl = gsap.timeline();

    tl.to(headingRef.current, {
      duration: 1,
      yPercent: 0,
    })

      .from(
        split.words,
        {
          duration: 1,
          opacity: 0,
          yPercent: 100,
          stagger: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            split.revert();
          },
        },
        '<'
      )
      .set(subtitleRef.current, { opacity: 1 })
      .from(subSplit.lines, {
        duration: 0.3,
        opacity: 0,
        stagger: 0.05,
        ease: 'power2.out',
      })
      .to(
        subtitleRef.current,
        {
          scale: 1,
          duration: 2,
          ease: 'elastic.out(1, 0.3)',
        },
        '-=.1'
      )
      .to(containerRef.current, {
        height: () => window.innerHeight * 0.3,
        duration: 1,
        ease: 'power2.inOut',
      });

    return () => {
      split.revert();
      subSplit.revert();
      tl.kill();
    };
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      ref={containerRef}
    >
      <div className="text-center overflow-hidden">
        <h1
          className="font-heading text-[clamp(48px,15vw,200px)] leading-[100%] opacity-0"
          ref={headingRef}
        >
          Britton Walker
        </h1>
      </div>
      <p
        className="text-[clamp(18px,3vw,200px)] mt-4 opacity-0 scale-50"
        ref={subtitleRef}
      >
        is a badass Frontend Engineer
      </p>
    </div>
  );
}
