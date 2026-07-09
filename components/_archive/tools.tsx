import { NextLogo } from './logos/next';
import GsapIcon from './logos/gsap';
import { TypeScriptLogo } from './logos/typescript';
import { ReactLogo } from './logos/react';
import { PHPLogo } from './logos/php';
import { TailwindLogo } from './logos/tailwind';
import { WordPressLogo } from './logos/wordpress';
import { FigmaLogo } from './logos/figma';

export function Tools() {
  return (
    <section className="tools min-h-dvh">
      <div className="flex items-center pt-[10dvh] pb-20 gap-20">
        <h2 className="text-[10.5vw] leading-[10vw] font-bold uppercase">
          Toolbox
        </h2>
        <div className="w-[15vw] mx-auto"></div>
      </div>
      <div className="grid grid-cols-6 rounded-4xl gap-1">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center aspect-[16/12] bg-foreground/3"
          >
            {tool.logo && (
              <div className="w-[50%] h-[40%] flex justify-center items-center">
                {tool.logo}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const tools = [
  { name: 'React', logo: <ReactLogo /> },
  { name: 'TypeScript', logo: <TypeScriptLogo /> },
  { name: 'Next.js', logo: <NextLogo /> },
  { name: 'Tailwind CSS', logo: <TailwindLogo /> },
  { name: 'GSAP', logo: <GsapIcon width={`100%`} height={`100%`} /> },
  { name: 'Figma', logo: <FigmaLogo /> },
  { name: 'PHP', logo: <PHPLogo /> },
  { name: 'WordPress', logo: <WordPressLogo /> },
];
