'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function End() {
  const container = useRef<HTMLElement>(null);
  const message = useRef(null);

  return (
    <section className="end min-h-dvh flex flex-col relative" ref={container}>
      <div className="ml-auto max-w-[600px] my-auto text-[22px]">
        <p className="text-pretty">
          Cinema every Sunday. A lot of reading. Two cappuccinos a day, no
          exceptions. I stan Swiss design, Snoopy, Bruce Lee, leopard print, and
          revolutionary thinkers. I hate overhead lighting and the doctor who
          said I can’t eat a pint of ice cream every day.
        </p>
        <p className="text-pretty mt-[1em]">
          I play in the world-renowned Brooklyn punk band B Boys. I train and
          compete in Brazilian Jiu-Jitsu. I’m early in my career, building a
          candle-making empire.
        </p>
        <p className="text-pretty mt-[1em]">I'm the world's fastest swimmer.</p>
      </div>
      <div className="absolute left-0 right-0 bottom-0">
        <div className="flex items-end justify-end pb-8 px-8">
          <div className="flex gap-4 items-end">
            <a href="https://github.com/brittonwalker/" target="_blank">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/britton-walker/"
              target="_blank"
            >
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
      </div>
    </section>
  );
}
