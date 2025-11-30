'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export function IntroText() {
  const [showGif, setShowGif] = useState(false);
  const textRefs = useRef<HTMLParagraphElement[]>([]);
  const splitRefs = useRef<SplitText[]>([]);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (textRefs.current) {
      const split = new SplitText(textRefs.current, {
        type: 'lines',
        mask: 'lines',
      });
      split.lines.forEach((line) => {
        gsap.fromTo(
          line,
          { yPercent: 100 },
          {
            yPercent: 0,
            ease: 'power1.out',
            duration: 0.7,
            scrollTrigger: {
              trigger: line,
              start: 'bottom bottom',
            },
          }
        );
      });
      splitRefs.current.push(split);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      splitRefs.current.forEach((split) => split.revert());

      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      className="min-h-dvh text-[max(21px,3vw)] leading-[4vw] py-20 relative"
      ref={containerRef}
    >
      <div className="text-container pr-[20%]">
        <p
          ref={(el) => {
            if (el) textRefs.current[0] = el;
          }}
        >
          I&apos;m{' '}
          <span
            onMouseEnter={() => setShowGif(true)}
            onMouseLeave={() => setShowGif(false)}
            className="border-b"
          >
            Britton
          </span>
          , a developer working where design and engineering meet. I build web
          experiences that behave with intention, clarity, and grounded in
          performance. My work centers on usability and thoughtful interaction.
        </p>
        <div className="mt-[1.3em]">
          <p
            ref={(el) => {
              if (el) textRefs.current[1] = el;
            }}
          >
            I collaborate with designers and engineers to shape the patterns,
            interactions, and systems that make products scale. The goal is
            always the same: elevate the message and create experiences that
            feel considered and meaningful.
          </p>
        </div>
      </div>
      <div className="absolute top-0 right-[5%]">
        <div
          className="aspect-square w-[10dvw] bg-black p-1 rounded-sm border border-current transition-all duration-300"
          style={{
            clipPath: showGif ? 'inset(0%)' : 'inset(0% 0% 100% 0%)',
          }}
        >
          <video
            src={'/video/bboys-optimized.mp4'}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
