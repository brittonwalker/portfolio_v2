import { useRef } from 'react';
import clsx from 'clsx';

export function Project({
  title,
  description = 'This is a brief description of the project, highlighting its main features and technologies used.',
  imageUrl = '/video/nm-capture-optimized.mp4',
  isFirst,
  index,
}: {
  title?: string;
  description?: string;
  imageUrl?: string;
  index: number;
  isFirst: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className={clsx('project mt-20 w-[40.988vw] shrink-0')}>
      <div className="flex flex-col h-full justify-between">
        <div
          className="project-title relative z-10"
          style={{ gridArea: '1/1/2/6' }}
        >
          <div className="text-[3vw] leading-[3.5vw] flex flex-col justify-between h-full">
            <div className="top">
              <p className="number">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="text-[5vw] leading-[5.5vw]">{title}</h3>
            </div>
          </div>
        </div>
        <div className="project-desc pb-20">
          <p className="text-[1.5vw] leading-[2vw] text-balance mt-auto">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
