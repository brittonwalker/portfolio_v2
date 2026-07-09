import { useRef } from 'react';
import { Project } from '@/data/projects';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

type ProjectInfoProps = Project & { isActive: boolean };

export function ProjectInfo({
  title,
  description,
  isActive,
}: ProjectInfoProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const split = new SplitText([titleRef.current, descriptionsRef.current], {
      type: 'lines',
      mask: 'lines',
    });

    gsap.fromTo(
      split.lines,
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        opacity: 1,
        yPercent: 0,
      }
    );
  }, [isActive]);

  return (
    <div
      className="absolute inset-0"
      style={{
        opacity: isActive ? 1 : 0,
      }}
    >
      <h2 className="text-[3vw]" ref={titleRef}>
        {title}
      </h2>
      <div className="grid">
        <div ref={descriptionsRef}>{description}</div>
        <div></div>
      </div>
    </div>
  );
}
