'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function End() {
  const container = useRef<HTMLElement>(null);
  const message = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top center',
        end: 'center center',
        scrub: true,
      },
    });
    tl.to(message.current, {
      y: 0,
      delay: 2,
    });
  });

  return (
    <section className="end min-h-dvh flex flex-col" ref={container}>
      <div className="ml-auto max-w-[600px] mt-auto mb-[15dvh] text-[22px]">
        <p className="text-pretty">
          In my free time, I go to the cinema every sunday and I love to read. I
          drink two cappuccinos a day, every day. I stan Swiss design, Snoopy,
          Bruce Lee, leopard print, and revolutionary thinkers. I hate overhead
          lighting and the doctor who said I can't eat a pint of ice cream every
          day.
        </p>
        <p className="text-pretty mt-[1em]">
          I play in the world renowned Brooklyn punk band B Boys. I'm a martial
          artist and train and compete in Brazilian Jiu Jitsu. I'm early in my
          career building a candlemaking empire.
        </p>
        <p className="text-pretty mt-[1em]">I'm the worlds fastest swimmer.</p>
      </div>
      <div
        className="translate-y-full flex items-end justify-between"
        ref={message}
      >
        <h2 className="text-[10.5vw] leading-[10vw] font-bold uppercase ">
          Thank You
        </h2>
        <div className="flex gap-4">
          <a href="https://github.com/brittonwalker/" target="_blank">
            Github
          </a>
          <a href="https://www.linkedin.com/in/britton-walker/" target="_blank">
            LinkedIn
          </a>
          <a
            href="mailto:bwalker1801@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
