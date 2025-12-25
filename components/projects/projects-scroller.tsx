'use client';

import { projects } from '@/data/projects';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useLenis } from 'lenis/react';
import { ProjectInfo } from './project-info';

const initialActiveImage = () => {
  return {
    projectSlug: projects[0]?.slug || null,
    imageIndex: 0,
    title: projects[0]?.title || null,
  };
};

export function ProjectsScroller() {
  const [activeImage, setActiveImage] = useState<{
    projectSlug: string | null;
    imageIndex: number;
    title: string | null;
  }>(initialActiveImage());
  const lenis = useLenis();
  const imageRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const downObserverRef = useRef<IntersectionObserver | null>(null);
  const upObserverRef = useRef<IntersectionObserver | null>(null);
  const lastScrollY = useRef(0);
  const scrollDirection = useRef<'down' | 'up'>('down');

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      // Only update direction if scroll delta is significant (more than 5px)
      if (Math.abs(delta) > 5) {
        scrollDirection.current = delta > 0 ? 'down' : 'up';
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Observer for scrolling DOWN - watches top edge
    downObserverRef.current = new IntersectionObserver(
      (entries) => {
        if (scrollDirection.current !== 'down') return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            const slug = target.dataset.slug;
            const imageIndex = Number(target.dataset.imageIndex);
            const title = target.dataset.title;

            if (slug) {
              setActiveImage({
                projectSlug: slug,
                imageIndex: imageIndex,
                title: title || null,
              });
            }
          }
        });
      },
      {
        // Top of element crosses 45vh line when entering
        rootMargin: '-45% 0px -55% 0px',
        threshold: 0,
      }
    );

    // Observer for scrolling UP - watches bottom edge
    upObserverRef.current = new IntersectionObserver(
      (entries) => {
        if (scrollDirection.current !== 'up') return;

        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            const target = entry.target as HTMLDivElement;
            const slug = target.dataset.slug;
            const imageIndex = Number(target.dataset.imageIndex);
            const title = target.dataset.title;

            if (slug) {
              setActiveImage({
                projectSlug: slug,
                imageIndex: imageIndex - 1 >= 0 ? imageIndex - 1 : 0,
                title: title || null,
              });
            }
          }
        });
      },
      {
        // Bottom of element crosses 45vh line when exiting
        rootMargin: '0% 0px -55% 0px',
        threshold: 0,
      }
    );

    // Observe all elements with both observers
    imageRefs.current.forEach((element) => {
      downObserverRef.current?.observe(element);
      upObserverRef.current?.observe(element);
    });

    return () => {
      downObserverRef.current?.disconnect();
      upObserverRef.current?.disconnect();
    };
  }, []);

  const setRef = (
    el: HTMLDivElement | null,
    slug: string,
    imgIndex: number
  ) => {
    if (!el) return;

    // Store the element
    imageRefs.current.set(`${slug}-${imgIndex}`, el);

    // Observe it immediately with both observers if ready
    if (downObserverRef.current) {
      downObserverRef.current.observe(el);
    }
    if (upObserverRef.current) {
      upObserverRef.current.observe(el);
    }
  };

  const clickImage = (slug: string, imgIndex: number) => {
    const ref = imageRefs.current.get(`${slug}-${imgIndex}`);
    if (ref && lenis) {
      lenis.scrollTo(ref, {
        offset: -window.innerHeight * 0.45,
      });
    }
  };

  return (
    <div className="projects-scroller px-8 relative">
      <div className="sticky top-0 z-10 bg-gradient-to-b from-background via-background to-transparent">
        <h2 className="text-sub-title leading-subtext-sub-title pt-8 pb-4">
          Selected Projects
        </h2>
      </div>
      <div className="grid grid-cols-16 gap-4">
        <div className="col-span-6 hidden xl:flex flex-col gap-y-[10vh] py-[45vh] relative">
          <div className="grid grid-cols-6 gap-x-4">
            <div className="col-span-2 flex flex-col gap-y-20">
              {projects.map((project, index) => (
                <div className="flex flex-col gap-4" key={project.slug}>
                  {project.assets.map((imgUrl, imgIndex) => (
                    <div key={imgIndex}>
                      <div
                        data-slug={project.slug}
                        data-image-index={imgIndex}
                        data-title={project.title}
                        ref={(el) => setRef(el, project.slug, imgIndex)}
                        className="relative"
                        onClick={() => clickImage(project.slug, imgIndex)}
                      >
                        {imgUrl.type === 'video' ? (
                          <video
                            src={imgUrl.url}
                            autoPlay
                            loop
                            muted
                            className="w-full h-auto object-contain"
                          />
                        ) : (
                          <Image
                            src={imgUrl.url}
                            alt={`${project.title} image ${imgIndex + 1}`}
                            width={300}
                            height={200}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="col-span-4 flex-1 min-h-[30vh]">
              <div className="flex sticky body-50 top-[45vh] text-balance transition-opacity duration-300 text-[3vw] leading-[3vw]">
                {activeImage.title}
              </div>
            </div>
          </div>

          {/* {projects.map((project, index) => (
            <div className="grid grid-cols-5 gap-x-4" key={project.slug}>
              <div className="col-span-2 flex flex-col gap-y-4">
                {project.assets.map((imgUrl, imgIndex) => (
                  <div key={imgIndex}>
                    <div
                      data-slug={project.slug}
                      data-image-index={imgIndex}
                      ref={(el) => setRef(el, project.slug, imgIndex)}
                      className="relative"
                      onClick={() => clickImage(project.slug, imgIndex)}
                    >
                      {imgUrl.type === 'video' ? (
                        <video
                          src={imgUrl.url}
                          autoPlay
                          loop
                          muted
                          className="w-full h-auto object-contain"
                        />
                      ) : (
                        <Image
                          src={imgUrl.url}
                          alt={`${project.title} image ${imgIndex + 1}`}
                          width={300}
                          height={200}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-span-3 flex-1 min-h-[30vh]">
                <div
                  className="flex sticky body-50 top-[45vh] text-balance transition-opacity duration-300"
                  style={{
                    opacity: activeImage.projectSlug === project.slug ? 1 : 0,
                  }}
                >
                  {project.title}
                </div>
              </div>
            </div>
          ))} */}
        </div>
        <div className="col-span-10 col-start-7 sticky top-0 flex flex-col xl:flex-row items-end h-full xl:h-screen pt-[62px] pb-8">
          <div className="focus-mobile-wrapper relative w-full h-full flex flex-col">
            {/* <div className="absolute">
              <div className="text-balance transition-opacity duration-300 text-[5vw] leading-[5vw]">
                {activeImage.title}
              </div>
            </div> */}
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className="works-images-right absolute-full hidden flex xl:flex flex-col justify-end"
              >
                {project.assets.map((asset, imgIndex) => (
                  <div
                    key={project.slug + imgIndex}
                    className="works-image-right focus-image xl:absolute xl:bottom-0 xl:left-0 w-full xl:h-full hidden xl:flex justify-center items-end text-[8rem] text-white"
                    style={{
                      opacity:
                        activeImage.projectSlug === project.slug &&
                        activeImage.imageIndex === imgIndex
                          ? 1
                          : 0,
                    }}
                  >
                    <div className="image relative w-full h-full">
                      {asset.type === 'video' ? (
                        <video
                          src={asset.url}
                          autoPlay
                          loop
                          muted
                          className="w-full h-full object-contain object-center"
                        />
                      ) : (
                        <Image
                          src={asset.url}
                          alt={`${project.title} image ${imgIndex + 1}`}
                          fill
                          className="lazy w-full h-full object-contain object-center"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
