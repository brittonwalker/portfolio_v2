'use client';

import { useState, useRef } from 'react';
import { Button } from './ui/button';
import { colors } from '@/lib/colors';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, SplitText);

export function Header({
  menuOpen,
  setMenuOpenAction,
}: {
  menuOpen: boolean;
  setMenuOpenAction: (open: boolean) => void;
}) {
  const [mood, setMood] = useState(1);

  const handleMood = () => {
    const color = colors[mood % colors.length];
    document.body.style.setProperty('--background', color.background);
    document.body.style.setProperty('--foreground', color.foreground);
    setMood(mood + 1);
  };

  const subMenuRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = subMenuRef.current?.children;
    if (!items) return;
    const split = new SplitText(items, {
      type: 'words, chars',
    });
    const tl = gsap.timeline({ paused: true });
    tl.to(items, { opacity: 1, duration: 0 });
    tl.fromTo(
      split.chars,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1,
        opacity: 1,
        delay: 0.3,
        y: 0,
        stagger: 0.01,
        ease: 'power2.out',
      }
    );
    if (menuOpen) {
      tl.play();
    } else {
      // tl.reverse();
    }
  }, [menuOpen]);

  return (
    <>
      <div className="fixed inset-0 px-8 py-4 z-10 pointer-events-none">
        <div className="z-20 relative pointer-events-auto w-full flex justify-between items-center burger">
          <div className="w-1/3">
            <button
              onClick={() => setMenuOpenAction(!menuOpen)}
              aria-label="Toggle menu"
              className="cursor-pointer pointer-events-auto"
            >
              menu
            </button>
          </div>
          <Button
            variant="ghost"
            className="cursor-pointer"
            onClick={handleMood}
          >
            Change Mood
          </Button>
          <div className="w-1/3 flex justify-center uppercase font-bold">
            <a href="">BW</a>
          </div>
          <div className="w-1/3 flex justify-end">
            <a href="">contact</a>
          </div>
        </div>
        <div className="absolute left-0 pl-8 top-0 w-[30vw] h-dvh z-0">
          <nav className="navigation h-full overflow-hidden">
            <div
              className="flex flex-col space-y-4 h-full pb-8 justify-center text-[5vw] [&>a]:relative"
              ref={subMenuRef}
            >
              <a
                className="opacity-0 block overflow-hidden"
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                className="opacity-0 block overflow-hidden"
                href="#projects"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
              <a
                className="opacity-0 block overflow-hidden"
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

const HamburgerIcon = () => (
  <svg
    width="30"
    height="20"
    viewBox="0 0 30 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="5" y1="4.5" x2="25" y2="4.5" stroke="currentColor" />
    <line x1="5" y1="9.5" x2="25" y2="9.5" stroke="currentColor" />
    <line x1="5" y1="14.5" x2="25" y2="14.5" stroke="currentColor" />
  </svg>
);
