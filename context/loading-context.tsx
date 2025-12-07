'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type LoadingContextType = {
  isLoading: boolean;
  isReady: boolean;
};

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  isReady: false,
});

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Wait for fonts and initial page load
    Promise.all([
      document.fonts.ready,
      new Promise((resolve) => {
        if (document.readyState === 'complete') {
          resolve(true);
        } else {
          window.addEventListener('load', () => resolve(true));
        }
      }),
    ]).then(() => {
      // Minimum loading time for smooth experience
      setTimeout(() => {
        setIsLoading(false);
        // Small delay to let the loader exit animation complete
        setTimeout(() => setIsReady(true), 500);
      }, 1000);
    });
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, isReady }}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext);
