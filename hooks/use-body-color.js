import { useEffect, useState } from 'react';

export default function useBodyColor() {
  const [colors, setColors] = useState({
    background: '#1a1a1a',
    foreground: '#f5f5f5',
    accent: '#3dbd5d',
  });

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        setColors({
          background: getComputedStyle(mutation.target).getPropertyValue(
            '--background'
          ),
          foreground: getComputedStyle(mutation.target).getPropertyValue(
            '--foreground'
          ),
          accent: getComputedStyle(mutation.target).getPropertyValue(
            '--accent'
          ),
        });
      }
    });

    // Start observing the target node
    observer.observe(document.body, {
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  return colors;
}
