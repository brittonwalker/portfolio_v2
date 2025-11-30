'use client';

import { Project } from './project';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const ammountToScroll =
      projectsRef.current?.scrollWidth - containerRef.current?.offsetWidth || 0;

    ScrollTrigger.normalizeScroll(true);

    gsap.to(projectsRef.current, {
      x: -ammountToScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${ammountToScroll}`,
        scrub: 1,
        pin: true,
        pinType: 'transform',
      },
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="min-h-dvh"
      style={{
        height: projects.length * 100 - 53 + 'dvw',
      }}
    >
      <div className="projects" ref={containerRef}>
        <h2 className="text-[10.5vw] leading-[10vw] font-bold uppercase pt-[10dvh]">
          Projects
        </h2>
        <div className="project-wrapper flex z-10" ref={projectsRef}>
          {projects.map((project, index) => (
            <Project key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: 'New Museum',
    description:
      'Redesigned and built by Athletics to enhance their digital storytelling capabilities with a focus on exhibition and live events. Built with Next.js on WPVIP.',
    imageUrl: '/video/nm-capture-optimized.mp4',
  },
  {
    title: 'Athletics',
    imageUrl: '/video/athletics-capture-optimized.mp4',
    description:
      'A complete redesign and rebuild of Athletics’ agency website to better showcase their work and capabilities. Built with Next.js.',
  },
  {
    title: 'New York Review of Books',
    description:
      'A complete redesign and rebuild of the NYRB website to better serve their 200k users and 60+ year archive.',
    imageUrl: '/video/nyrb-optimized.mp4',
  },
  {
    title: 'The Counter',
    description:
      'The Counter needed a system that could elevate their storytelling in food journalism. Collaborating with Athletics, I helped build a custom CMS and front-end experience to bring their stories to life.',
    imageUrl: '/video/the-counter-optimized.mp4',
  },
];
