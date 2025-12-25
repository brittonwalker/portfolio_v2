'use client';
import { useRef, useEffect, useState } from 'react';
import { projects, Project } from '@/data/projects';

export function BigScroller() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const titleRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const downObserverRef = useRef<IntersectionObserver | null>(null);
  const upObserverRef = useRef<IntersectionObserver | null>(null);
  const lastScrollY = useRef(0);
  const scrollDirection = useRef<'down' | 'up'>('down');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (Math.abs(delta) > 5) {
        scrollDirection.current = delta > 0 ? 'down' : 'up';
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    downObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && scrollDirection.current === 'down') {
            const slug = entry.target.getAttribute('data-slug');
            setActiveProject(slug);
          }
        });
      },
      {
        rootMargin: ' -20% 0px -80% 0px',
        threshold: 0,
      }
    );

    upObserverRef.current = new IntersectionObserver(
      (entries) => {
        // entries.forEach((entry) => {
        //   if (entry.isIntersecting && scrollDirection.current === 'up') {
        //     const slug = entry.target.getAttribute('data-slug');
        //     const index = projects.findIndex((p) => p.slug === slug);
        //     setActiveIndex(index);
        //   }
        // });
      },
      {
        rootMargin: ' -20% 0px -80% 0px',
        threshold: 0,
      }
    );

    titleRefs.current.forEach((el, slug) => {
      downObserverRef.current?.observe(el);
      upObserverRef.current?.observe(el);
    });

    return () => {
      downObserverRef.current?.disconnect();
      upObserverRef.current?.disconnect();
    };
  }, []);

  const transformRef = (el: HTMLDivElement | null, slug: string) => {
    if (el) {
      titleRefs.current.set(slug, el);
    }
  };

  return (
    <section className="px-8 py-[10vh]">
      <div className="h-screen flex justify-center items-center">
        <h2 className="text-[6.25vw] leading-[1.2] text-balance max-w-1/2">
          Selected Projects
        </h2>
      </div>
      {projects.map((project: Project) => (
        <Item
          key={project.slug}
          project={project}
          active={activeProject === project.slug}
          ref={(el) => transformRef(el, project.slug)}
        />
      ))}
    </section>
  );
}

interface ProjectProps {
  project: Project;
  active: boolean;
  ref: (el: HTMLDivElement | null) => void;
}

const Item = ({ project, active, ref }: ProjectProps) => {
  return (
    <div
      className={`flex relative h-screen justify-center text-center items-center relative ${
        active ? 'active' : ''
      }`}
      data-slug={project.slug}
      ref={ref}
    >
      <h3
        className="text-[6.25vw] leading-[1.2] text-balance max-w-1/2"
        style={{ color: active ? 'red' : '' }}
      >
        {project.title}
      </h3>
      <div className="absolute inset-0 grid parallax-grid">
        {project.assets.map(({ url, type }, index) => (
          <div key={index} className="grid-item">
            {type === 'video' ? (
              <video
                src={url}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto object-cover"
              />
            ) : (
              <img src={url} alt={`${project.title} image ${index + 1}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
