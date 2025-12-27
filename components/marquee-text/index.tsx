'use client';

import { useRef, useEffect } from 'react';

export function MarqueeText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef<number>(0);
  const marqueeRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    const marquee = marqueeRefs.current;
    let rafId: number;

    if (!container || !scroller || !marquee) return;

    const marqueeWidths =
      marqueeRefs.current.reduce((acc, el) => {
        if (el) {
          return acc + el.offsetWidth;
        }
        return acc;
      }, 0) / marqueeRefs.current.length;

    const animateScroll = () => {
      const amountToScroll = scrollPosition.current % marqueeWidths;

      scroller.style.transform = `translate3d(-${amountToScroll}px, 0, 0)`;
      scrollPosition.current += 1;

      rafId = requestAnimationFrame(animateScroll);
    };

    animateScroll();

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="marquee-text overflow-hidden whitespace-nowrap pt-[10vh]"
      ref={containerRef}
    >
      <div className="marquee-text-inner " ref={scrollerRef}>
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="inline-block animate-marquee text-[clamp(32px,6.25vw,1000px)] -tracking-[.01em] leading-[.9em] bg-foreground text-background py-5"
              ref={(el) => {
                marqueeRefs.current[i] = el;
              }}
            >
              {text}&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;{text}
              &nbsp;&nbsp;&nbsp;
              {text}&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;{text}
              &nbsp;&nbsp;&nbsp;
            </div>
          ))}
      </div>
    </div>
  );
}
