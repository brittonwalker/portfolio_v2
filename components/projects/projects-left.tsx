'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Project, projects } from '@/data/projects';
import Link from 'next/link';

export function ProjectsLeft() {
  return (
    <div className="projects-left px-4 lg:px-8 pt-20 lg:pt-[15vh] relative bg-background border-t border-foreground">
      <div className="projects-content flex flex-col gap-20 lg:gap-[10vw] lg:px-[6.25vw]">
        {projects
          .filter((project) => project.slug)
          .map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        <a
          href="/projects"
          className="text-sub-title leading-[1.1em] md:leading-[3vw] text-balance block text-center p-8 bg-foreground text-background rounded-[8px]"
        >
          See All Projects ↗
        </a>
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
    <Link href={`/projects/${project.slug}`}>
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
                <video
                  src={project.featuredAsset.url}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
          </div>
        </div>
      </div>
    </Link>
  );
};
