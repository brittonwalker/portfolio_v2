'use client';

import { Video } from './video';
import Link from 'next/link';

export function Fun() {
  return (
    <section className="" id="process">
      <div className="flex items-end pt-[20dvh] pb-[10dvh] gap-20">
        <h2 className="text-[10.5vw] leading-[8vw] font-bold uppercase">
          Fun Stuff
        </h2>
      </div>
      <div className="grid grid-cols-4">
        {labs.map((lab, index) => (
          <Link key={index} href={lab.link} className="border border-accent">
            <Video src={`/video/float-a.webm`} />
          </Link>
        ))}
      </div>
    </section>
  );
}

const labs = [
  {
    title: 'Floating A',
    description:
      'Playing with three.js and WebGL to create interactive 3D experiences.',
    link: '/lab/floating-a',
    video: '/video/float-a.webm',
  },
];
