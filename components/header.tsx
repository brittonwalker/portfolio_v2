'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { colors } from '@/lib/colors';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Header() {
  const [mood, setMood] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMood = () => {
    const color = colors[mood % colors.length];
    document.body.style.setProperty('--background', color.background);
    document.body.style.setProperty('--foreground', color.foreground);
    setMood(mood + 1);
  };

  const subMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (menuOpen) {
      if (subMenuRef.current && navRef.current) {
        const navHeight = navRef.current.scrollHeight;
        gsap.to(subMenuRef.current, {
          height: navHeight,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    } else {
      if (subMenuRef.current) {
        gsap.to(subMenuRef.current, {
          height: 0,
          duration: 0.3,
          ease: 'power2.in',
        });
      }
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        subMenuRef.current &&
        !subMenuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 pt-4 z-10">
      <div className="text-2xl w-[700px] p-5 bg-foreground text-background rounded-2xl">
        <div className="flex justify-between items-center">
          <a href="">BRITTON WALKER</a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
            aria-label="Change Color Theme"
          >
            <HamburgerIcon />
          </button>
        </div>
        <div
          ref={subMenuRef}
          className="h-0 overflow-hidden transition-all duration-300"
        >
          <nav ref={navRef} className="space-x-8 uppercase font-medium">
            <div className="pt-10" />
            <ul className="flex flex-col gap-4">
              <li className="flex gap-5 items-center">
                <div className="w-20 h-20 bg-background rounded-[10px]"></div>
                <a href="#projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li className="flex gap-5 items-center">
                <div className="w-20 h-20 bg-background rounded-[10px]"></div>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li className="flex gap-5 items-center">
                <div className="w-20 h-20 bg-background rounded-[10px]"></div>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
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
