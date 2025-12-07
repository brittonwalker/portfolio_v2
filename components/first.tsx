'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export function First() {
  const [duration] = useState(1);
  const messageRefs = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: 'power1.in', duration: duration },
    });

    const lines = messageRefs.current.map((ref) => {
      const split = new SplitText(ref, {
        type: 'words',
        mask: 'words',
      });

      return { ref, words: split.words };
    });

    lines.forEach(({ ref, words }, index) => {
      gsap.set(ref, { opacity: 1 });

      const delay = index === 0 ? 0 : duration * 1.2;

      tl.fromTo(
        words,
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          ease: 'power1.inOut',
          stagger: 0.5,
        },
        `-=${delay}`
      );

      if (index < lines.length - 1) {
        tl.to(words, {
          yPercent: -100,
          stagger: 0.5,
          opacity: 0,
        });
      }
    });

    tl.play();
  }, [duration]);

  useGSAP(() => {
    if (!containerRef.current) return;
    const element = containerRef.current;
    gsap.to(element, {
      opacity: 0,
      yPercent: -30,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'center center',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  const messages = [
    ['BRITTON', 'WALKER'],
    ['DESIGN', 'ENGINEER'],
  ];

  return (
    <div className="h-svh flex items-center">
      <div
        className="text-[10.5vw] leading-[10vw] font-bold uppercase relative w-full"
        ref={containerRef}
      >
        {messages.map(([line1, line2], index) => (
          <div
            key={index}
            className="flex flex-col w-full absolute -translate-y-[50%] opacity-0"
            ref={(el) => {
              if (el) messageRefs.current[index] = el;
            }}
          >
            <span className="">{line1}</span>
            <span className=" ml-auto">{line2}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
