'use client';

import { useLoading } from '@/context/loading-context';
import { useEffect, useState } from 'react';

export function PageLoader() {
  const { isLoading } = useLoading();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 bg-foreground flex items-center justify-center transition-opacity duration-500 ${
        isLoading
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
      style={{ transitionDelay: isLoading ? '0ms' : '0ms' }}
    >
      <div className="relative">
        {/* Simple animated dot loader */}
        <div className="flex gap-2">
          <div
            className="w-3 h-3 bg-background rounded-full animate-bounce"
            style={{ animationDelay: '0ms' }}
          />
          <div
            className="w-3 h-3 bg-background rounded-full animate-bounce"
            style={{ animationDelay: '150ms' }}
          />
          <div
            className="w-3 h-3 bg-background rounded-full animate-bounce"
            style={{ animationDelay: '300ms' }}
          />
        </div>
      </div>
    </div>
  );
}
