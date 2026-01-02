import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/use-in-view';

export function Video({ src, className }: { src: string; className?: string }) {
  const [ref, isInView] = useInView<HTMLVideoElement>({ threshold: 0.5 });
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!ref.current || !isMounted) return;

    const video = ref.current;

    if (isInView) {
      // Add a small delay before playing to ensure proper initialization
      const timeout = setTimeout(() => {
        if (!video) return;

        playPromiseRef.current = video.play().catch((error) => {
          // Silently handle autoplay errors on mobile
          if (error.name !== 'AbortError') {
            console.error('Error playing video:', error);
          }
        });
      }, 150);

      return () => clearTimeout(timeout);
    } else {
      if (playPromiseRef.current) {
        playPromiseRef.current.then(() => {
          if (video && !video.paused) {
            video.pause();
          }
        }).catch(() => {
          // Ignore errors during pause
        });
      } else if (!video.paused) {
        video.pause();
      }
    }
  }, [isInView, ref, isMounted]);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      webkit-playsinline="true"
      x5-playsinline="true"
      disablePictureInPicture
      disableRemotePlayback
      preload="metadata"
      className={className}
      style={{ pointerEvents: 'none' }}
    />
  );
}
