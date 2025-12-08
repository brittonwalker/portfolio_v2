import { useEffect, useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';

export function Video({ src, className }: { src: string; className?: string }) {
  const [ref, isInView] = useInView<HTMLVideoElement>({ threshold: 0.5 });
  const playPromiseRef = useRef<Promise<void> | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (isInView) {
      playPromiseRef.current = ref.current.play().catch((error) => {
        console.error('Error playing video:', error);
      });
    } else {
      if (playPromiseRef.current) {
        playPromiseRef.current.then(() => {
          ref.current?.pause();
        });
      } else {
        ref.current.pause();
      }
    }
  }, [isInView, ref]);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    />
  );
}
