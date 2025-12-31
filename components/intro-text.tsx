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
  const hoverRef = useRef<HTMLSpanElement>(null);
  const splitRefs = useRef<SplitText[]>([]);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (textRefs.current) {
      const split = new SplitText(textRefs.current, {
        type: 'lines',
        mask: 'lines',
        linesClass: 'split-line',
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

    return () => {
      splitRefs.current.forEach((split) => split.revert());
      splitRefs.current = [];
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
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

  useEffect(() => {
    // Use querySelector as fallback if ref is lost
    const hoverEl =
      hoverRef.current ||
      containerRef.current?.querySelector('[data-hover="name"]');
    if (!hoverEl) return;

    const handleMouseEnter = () => {
      setShowGif(true);
    };
    const handleMouseLeave = () => {
      setShowGif(false);
    };

    hoverEl.addEventListener('mouseenter', handleMouseEnter);
    hoverEl.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      hoverEl.removeEventListener('mouseenter', handleMouseEnter);
      hoverEl.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      className="md:text-[max(21px,3vw)] md:leading-[1.2em] pt-[15vh] relative"
      ref={containerRef}
    >
      <div className="text-container md:max-w-[80vw] pl-[6.25vw]">
        <p
          ref={(el) => {
            if (el) textRefs.current[0] = el;
          }}
        >
          I&apos;m{' '}
          <span
            className="border-b-2 border-foreground"
            ref={hoverRef}
            data-hover="name"
          >
            Britton
          </span>
          , a design engineer who works in the space where interaction,
          storytelling, and system architecture meet. I care about motion,
          clarity, and the systems that support them. They form the invisible
          structure that makes the work feel effortless and the message
          instantly understood.
        </p>
        <div className="mt-[1.3em]">
          <p
            ref={(el) => {
              if (el) textRefs.current[1] = el;
            }}
          >
            I prototype early, work directly with designers, and build the
            systems that turn expressive ideas into experiences that scale. My
            aim is simple: create interfaces that feel intentional, responsive,
            and unmistakably human.
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 pointer-events-none">
        <div
          className="aspect-square w-[20dvw] transition-all duration-300"
          style={{
            clipPath: showGif ? 'inset(0%)' : 'inset(100% 0% 0% 0%)',
          }}
        >
          <video
            src={'/video/bboys-ocean.webm'}
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
