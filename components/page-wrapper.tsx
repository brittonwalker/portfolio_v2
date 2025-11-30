'use client';

import { useState, useEffect } from 'react';
import { useLenis, ReactLenis } from 'lenis/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Header } from './header-two';

export function PageWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add('navigation--open');
    } else {
      document.documentElement.classList.remove('navigation--open');
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!lenis) return;
    if (menuOpen) {
      ScrollTrigger.normalizeScroll(false);
      lenis.stop();
    } else {
      ScrollTrigger.normalizeScroll(true);
      lenis.start();
    }
  }, [menuOpen, lenis]);

  return (
    <ReactLenis root>
      <Header menuOpen={menuOpen} setMenuOpenAction={setMenuOpen} />
      <div className="page-wrapper relative bg-background text-foreground p-8 overflow-hidden">
        {children}
      </div>
    </ReactLenis>
  );
}
