'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Project, projects } from '@/data/projects';
import Link from 'next/link';
import { Video } from '../video';

export function ProjectsLeft() {
  return (
    <div className="projects-left px-4 lg:px-8 pt-20 lg:pt-[15vh] relative bg-background border-t border-foreground">
      <div className="projects-content flex flex-col gap-20 lg:gap-[10vw] lg:px-[6.25vw]">
        {projects
          .filter((project) => project.isFeatured)
          .map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        <Link
          href="/projects"
          className="text-sub-title leading-[1.1em] md:leading-[3vw] text-balance mt-10 border-offset-4 pb-2 text-center"
        >
          <div className="flex justify-center relative group">
            <div className="aspect-square rounded-full bg-foreground w-[400px] group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-foreground mix-blend-difference group-hover:scale-105 transition-transform duration-500">
              View Project Archive
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom',
        },
      });

      const duration = 0.7;
      const ease = 'cubic-bezier(.87,0,.13,1)';

      tl.fromTo(
        cardRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, ease: ease, duration: duration }
      );

      const title = cardRef.current.querySelector('h3');
      const description = cardRef.current.querySelector(
        'p.project-card__description'
      );
      const indexEl = cardRef.current.querySelector('.project-card__index');
      tl.fromTo(
        [indexEl, title, description],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: ease,
          duration: 0.4,
          stagger: 0.125,
          delay: 0.2,
        },
        '0'
      );

      const asset = cardRef.current.querySelector('.project-card__asset');
      if (asset) {
        tl.call(
          () => {
            asset.classList.add('reveal');
          },
          undefined,
          '0'
        );
      }

      return () => {
        tl.kill();
      };
    }
  }, [index]);

  return (
    <Link href={project?.link || '#'} target="_blank" rel="noopener noreferrer">
      <div
        ref={cardRef}
        className="project-card grid grid-cols-1 lg:grid-cols-5 gap-[3vw] overflow-hidden"
      >
        <div className="project-card__caption lg:col-span-2 order-2 lg:order-none">
          <div className="project-card__index leading-[1em] mb-4 hidden lg:block">
            {String(index + 1).padStart(2, '0')}
          </div>
          <h3 className="text-sub-title leading-[1.1em] md:leading-[3vw] text-balance">
            {project.title}
          </h3>
          <p className="project-card__description mt-4 hidden lg:block">
            {project.description}
          </p>
        </div>
        <div className="lg:col-span-3 order-1 lg:order-none">
          <div className="project-card__asset  bg-accent">
            {project?.featuredAsset?.type === 'video' &&
              project.featuredAsset?.url && (
                <Video
                  src={project.featuredAsset.url}
                  className="w-full h-full object-cover"
                />
              )}
          </div>
        </div>
      </div>
    </Link>
  );
};
