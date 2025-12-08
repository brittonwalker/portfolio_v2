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
      <div className="flex items-center pt-[10dvh] pb-20 gap-20">
        <h2 className="text-[10.5vw] leading-[10vw] font-bold uppercase">
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
            className="grid grid-cols-12 gap-6 py-10 border-t border-accent relative overflow-hidden"
            ref={(el) => {
              if (el && !projectsRef.current.includes(el)) {
                projectsRef.current.push(el);
              }
            }}
          >
            <div className="col-span-4 ">
              <div className="flex flex-col gap-4 text-[3vw] leading-[3vw]">
                <p className="number mr-auto inline-block">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="w-full text-balance">{project.title}</h3>
              </div>
            </div>
            <div className="col-span-5">
              <div className="max-w-[500px]">
                <p>{project.description}</p>
                <div className="mt-6">
                  <Button url={project.link}>Visit Site</Button>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="w-[640px] max-w-full p-1 border border-accent mr-auto">
                <Video src={project.imageUrl} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
