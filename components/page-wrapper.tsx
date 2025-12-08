'use client';

import { useState, useEffect } from 'react';
import { useLenis, ReactLenis } from 'lenis/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Header } from './header';
import { useLoading } from '@/context/loading-context';

export function PageWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isReady } = useLoading();
  const lenis = useLenis();

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add('navigation--open');
    } else {
      document.documentElement.classList.remove('navigation--open');
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!lenis || !isReady) return;
    if (menuOpen) {
      ScrollTrigger.normalizeScroll(false);
      lenis.stop();
    } else {
      ScrollTrigger.normalizeScroll(true);
      lenis.start();
    }
  }, [menuOpen, lenis, isReady]);

  // Initialize scroll after loading is complete
  useEffect(() => {
    if (!lenis || !isReady) return;

    lenis.start();
    ScrollTrigger.refresh();
  }, [isReady, lenis]);

  return (
    <ReactLenis root>
      <Header menuOpen={menuOpen} setMenuOpenAction={setMenuOpen} />

      <div className="page-wrapper relative bg-background text-foreground overflow-hidden duration-1000 ease-in-out top-0 transition-transform transition-top">
        {children}
      </div>
    </ReactLenis>
  );
}
