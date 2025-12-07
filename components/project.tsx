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
    <div className={clsx('project shrink-0 w-[40.988vw]')}>
      <div className="grid grid-cols-4 gap-4 pb-20">
        <div
          className="project-title relative z-10 p-4 bg-green-500"
          style={{ gridArea: '1/1/2/5' }}
        >
          <div className="text-[3vw] leading-[3.5vw] justify-between h-full col-span-4 grid grid-cols-4">
            <div className="top col-span-4">
              <p className="number">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="text-[5vw] leading-[5.5vw]">{title}</h3>
            </div>
            <p className="text-[1.5vw] leading-[2vw] text-balance mt-auto col-span-3">
              {description}
            </p>
          </div>
        </div>
        <div className="project-image" style={{ gridArea: '1 / 1 / 2 / 5' }}>
          <div className="aspect-square max-h-[60vh]">
            {/* <video
              ref={videoRef}
              src={imageUrl}
              autoPlay={false}
              loop
              muted
              className="w-full h-full object-cover bg-black p-4 rounded-sm border border-current"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
