'use client';

import { useState, useRef } from 'react';
import { colors } from '@/lib/colors';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { useLenis } from 'lenis/react';
import Link from 'next/link';

gsap.registerPlugin(useGSAP, SplitText);

export function Header({
  menuOpen,
  setMenuOpenAction,
}: {
  menuOpen: boolean;
  setMenuOpenAction: (open: boolean) => void;
}) {
  const [mood, setMood] = useState(1);
  const lenis = useLenis();

  const handleMood = () => {
    const color = colors[mood % colors.length];
    document.body.style.setProperty('--background', color.background);
    document.body.style.setProperty('--foreground', color.foreground);
    document.body.style.setProperty('--accent', color.accent);
    document.body.style.setProperty('--safe', color.safe);
    setMood(mood + 1);
  };

  const subMenuRefs = useRef<HTMLAnchorElement[]>([]);

  useGSAP(() => {
    if (!subMenuRefs.current) return;

    if (menuOpen) {
      gsap.to(subMenuRefs.current, {
        xPercent: 0,
        opacity: 1,
        ease: 'power1.inOut',
        stagger: 0.01,
        delay: 0.5,
      });
    } else {
      gsap.to(subMenuRefs.current, {
        xPercent: -100,
        opacity: 0,
        ease: 'power1.inOut',
        stagger: 0.01,
      });
    }
  }, [menuOpen]);

  return (
    <>
      <div className="header fixed inset-0 px-8 py-4 z-10 pointer-events-none">
        <div className="z-20 relative pointer-events-auto w-full flex justify-between items-center burger">
          <div className="w-1/3">
            <button
              onClick={() => setMenuOpenAction(!menuOpen)}
              aria-label="Toggle menu"
              className="cursor-pointer pointer-events-auto uppercase"
            >
              menu
            </button>
          </div>
          <div className="w-1/3 flex justify-center uppercase font-bold">
            <Link href="/">BW</Link>
          </div>
          <div className="w-1/3 flex items-center gap-6 justify-end">
            <a href="" className="uppercase hidden md:inline-block">
              contact
            </a>
            <button
              onClick={handleMood}
              className="px-3 py-1 bg-accent text-background rounded-full leading-[1em] inline-flex items-center cursor-pointer uppercase text-xl"
            >
              Vibe
            </button>
          </div>
        </div>
        <div className="absolute left-0 pl-8 top-0 w-[30vw] h-dvh z-0">
          <nav className="navigation h-full overflow-hidden">
            <div className="flex flex-col space-y-4 h-full pb-8 justify-center text-[5vw] [&>a]:relative">
              {[
                { title: 'Projects', url: '#projects' },
                { title: 'How I Work', url: '#process' },
                {
                  title: 'Contact',
                  url: 'mailto:bwalker1801@gmail.com',
                  noscroll: true,
                },
              ].map(({ title, url, noscroll = false }, index) => (
                <a
                  key={index}
                  className="block overflow-hidden transform opacity-0"
                  href={url}
                  onClick={(e) => {
                    if (noscroll) return;
                    e.preventDefault();
                    setMenuOpenAction(false);
                    if (lenis) {
                      lenis.scrollTo(url, {
                        immediate: true,
                      });
                    }
                  }}
                  ref={(el) => {
                    if (el) subMenuRefs.current[index] = el;
                  }}
                >
                  {title}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
