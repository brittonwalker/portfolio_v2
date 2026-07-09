'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Clock } from './clock';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function End() {
  const container = useRef<HTMLElement>(null);

  return (
    <section
      className="end min-h-dvh grid lg:grid-cols-2 relative"
      ref={container}
    >
      <div className="h-full flex lg:order-2">
        <div className="mx-auto max-w-[600px] my-auto text-[22px]">
          <p className="text-pretty">
            Cinema every Sunday. A lot of reading. Two cappuccinos a day, no
            exceptions. I stan Swiss design, Snoopy, Bruce Lee, leopard print,
            and revolutionary thinkers. I hate overhead lighting and the doctor
            who said I can&rsquo;t eat a pint of ice cream every day.
          </p>
          <p className="text-pretty mt-[1em]">
            I play in the world-renowned Brooklyn punk band B Boys. I train and
            compete in Brazilian Jiu-Jitsu. I&rsquo;m early in my career,
            building a candle-making empire.
          </p>
          <p className="text-pretty mt-[1em]">
            I&rsquo;m the world&rsquo;s fastest swimmer.
          </p>
        </div>
      </div>
      <div className="lg:h-full flex items-center justify-center lg:order-1 my-10">
        <div className="max-w-2/3 lg:max-w-1/2 w-full">
          <Clock />
        </div>
      </div>
      <div className="lg:absolute left-0 right-0 bottom-0">
        <div className="flex items-end justify-center lg:justify-end pb-6 lg:px-8">
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
