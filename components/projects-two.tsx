'use client';

import { projects } from '@/data/projects';
import { useRef } from 'react';
import { Windows } from './icons/windows';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function ProjectsTwo() {
  const projectsRef = useRef<HTMLDivElement[]>([]);

  return (
    <div>
      <div className="flex items-center pt-[10dvh] pb-20 gap-20">
        <h2 className="text-[10.5vw] leading-[10vw] font-bold uppercase">
          Projects
        </h2>
        <div className="w-[15vw] mx-auto">
          <Windows />
        </div>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-12 gap-6 py-10 border-t border-white/20 relative overflow-hidden bg-background"
            ref={(el) => {
              if (el && !projectsRef.current.includes(el)) {
                projectsRef.current.push(el);
              }
            }}
          >
            <div className="col-span-4">
              <div className="flex justify-between">
                <p className="number">{String(index + 1).padStart(2, '0')}</p>
                <div className="w-[90%] p-1 border border-white">
                  <video
                    src={project.imageUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <h3 className="text-[3vw] leading-[3vw] text-balance">
                {project.title}
              </h3>
            </div>
            <div className="col-span-5">
              <div className="pl-4 max-w-[500px] mx-auto">
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
