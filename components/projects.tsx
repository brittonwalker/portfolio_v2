'use client';

import { Project } from './project';
// import { Project } from './project2';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { projects } from '@/data/projects';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Projects() {
  const [scroll, setScroll] = useState({
    amountToScroll: 0,
    height: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!scroll.amountToScroll) return;

    ScrollTrigger.normalizeScroll(true);

    gsap.to(projectsRef.current, {
      x: -scroll.amountToScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${scroll.amountToScroll}`,
        scrub: 1,
        pin: true,
        pinType: 'transform',
      },
    });
  }, [scroll.amountToScroll]);

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const projectSrollWidth = projectsRef.current?.scrollWidth || 0;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const totalScrollWidth = projectSrollWidth - containerWidth;

    setScroll({
      amountToScroll: totalScrollWidth,
      height: window.innerHeight + totalScrollWidth,
    });
  }, []);

  return (
    <div
      className="projects-container pt-20 px-[30px]"
      style={{
        height: scroll.height + 'px',
      }}
    >
      <div className="projects" ref={containerRef}>
        <h2
          className="text-[6.25vw] leading-[1.2] text-balance mb-10  top-[6.25vw]"
          ref={titleRef}
        >
          Selected Projects
        </h2>
        <div
          className="project-wrapper h-full flex z-10 gap-10 pl-[20vw]"
          ref={projectsRef}
        >
          {projects.map((project, index) => (
            <Project
              key={index}
              {...{ ...project, isFirst: index === 0 }}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
