'use client';

import { use, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export function First() {
  const heading1ref = useRef<HTMLDivElement>(null);
  const heading2ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (heading1ref.current && heading2ref.current) {
      const firstSplit = new SplitText(heading1ref.current, {
        type: 'words',
        mask: 'words',
      });
      const secondSplit = new SplitText(heading2ref.current, {
        type: 'words',
        mask: 'words',
      });
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'power1.out', duration: 0.7 },
      });
      tl.fromTo(
        firstSplit.words,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          stagger: 0.02,
        }
      );
      tl.to(firstSplit.words, {
        yPercent: -100,
        delay: 0.6,
      });
      tl.fromTo(
        secondSplit.words,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          stagger: 0.02,
        },
        '<'
      );
      gsap.set([heading1ref.current, heading2ref.current], { opacity: 1 });
      tl.play();
    }
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;
    const element = containerRef.current;
    gsap.to(element, {
      opacity: 0,
      yPercent: -20,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'center center',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="h-svh flex items-center">
      <div
        className="text-[10.5vw] leading-[10vw] font-bold uppercase relative w-full"
        ref={containerRef}
      >
        <div
          className="flex flex-col w-full absolute opacity-0"
          ref={heading1ref}
        >
          <span className="">BRITTON</span>
          <span className=" ml-auto">WALKER</span>
        </div>
        <div className="flex flex-col w-full opacity-0" ref={heading2ref}>
          <span className="">DESIGN</span>
          <span className=" ml-auto">ENGINEER</span>
        </div>
      </div>
    </div>
  );
}
