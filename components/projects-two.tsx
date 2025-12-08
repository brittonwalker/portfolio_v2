'use client';

import { projects } from '@/data/projects';
import { useRef } from 'react';
import { Windows } from './icons/windows';
import { Button } from './button';
import { Video } from './video';

export function ProjectsTwo() {
  const projectsRef = useRef<HTMLDivElement[]>([]);

  return (
    <section className="projects-two" id="projects">
      <div className="flex items-end pt-10 pb-10 md:pt-[20dvh] md:pb-[10dvh] gap-20">
        <h2 className="text-section-heading leading-section-heading font-bold uppercase">
          Projects*
        </h2>
        <div className="w-[15vw] mx-auto">
          <Windows />
        </div>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid md:grid-cols-12 gap-9 md:gap-6 py-10 border-t border-accent relative overflow-hidden"
            ref={(el) => {
              if (el && !projectsRef.current.includes(el)) {
                projectsRef.current.push(el);
              }
            }}
          >
            <div className="md:col-span-4 order-1 md:order-none">
              <div className="flex flex-col gap-2 md:gap-4 text-sub-title leading-[1.1em] md:leading-[3vw]">
                <p className="number mr-auto inline-block">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="w-full text-balance">{project.title}</h3>
              </div>
            </div>
            <div className="md:col-span-5 order-3 md:order-none">
              <div className="max-w-[500px]">
                <p>{project.description}</p>
                <div className="mt-6">
                  <Button url={project.link}>Visit Site</Button>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 order-2 md:order-none">
              <div className="w-full max-w-[640px] p-1 border border-accent mr-auto">
                <Video src={project.imageUrl} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
