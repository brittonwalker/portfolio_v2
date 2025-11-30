import { useEffect, useState } from 'react';

export default function useBodyColor() {
  const [colors, setColors] = useState({
    background: '#000000',
    foreground: '#ffffff',
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
