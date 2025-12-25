'use client';

import { useRef, useEffect } from 'react';

export function Projects3() {
  const topRefs = useRef<Array<HTMLDivElement>>([]);

  return (
    <section className="projects-3 flex justify-center pt-10 pb-10 md:pt-[20dvh] md:pb-[10dvh]">
      <div className="grid grid-cols-2 gap-10">
        <div className="">
          <div className="sticky top-[10vh] self-start h-dvh">
            <p className="text-[clamp(28px,2.185vw,2.185vw)] leading-[1.2em] text-pretty text-safe">
              To facilitate great work, we must create a holistic system
              informed by engineering constraints, strategic goals, and empathic
              design. We&apos;re not making pretty pictures, we&apos;re building
              things people actually use. Collaboration and shared understanding
              bridge the gap to create work that feels whole, intentional, and
              reliable.
            </p>
          </div>
        </div>
        <div className="">
          {processSteps.map(({ title, description }, index) => (
            <div
              key={`process-step-${index}`}
              className="sticky self-start bg-background pb-[10vh]"
              style={{ top: `${10 + index * 8.5}vh` }}
            >
              <div
                className="border-t py-5"
                ref={(el) => (topRefs.current[index] = el)}
              >
                <h3 className="text-[clamp(28px,2.185vw,2.185vw)] leading-[1.2em] text-balance">
                  {String(index + 1).padStart(2, '0')} {title}
                </h3>
              </div>
              <div className="text-xl md:text-2xl max-w-[880px] pr-[4vw]">
                <p>{description}</p>
              </div>
            </div>
          ))}
          <div
            className="sticky self-start h-[60vh]"
            style={{ top: `${10 + processSteps.length * 8.5}vh` }}
          >
            <div className="bg-gradient-to-b from-transparent to-background h-[20vh]"></div>
            <div className="bg-background h-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

const processSteps = [
  {
    title: 'Systems first, expression always',
    description:
      'Every expressive experience sits on top of a clear structure. I start by shaping patterns, components, animation logic, and design tokens so the work stays coherent as it grows. We aim for reusability over one-offs. Good systems don’t limit creativity. They create the space for it.',
  },
  {
    title: 'Prototype early, shape through making',
    description:
      'I don’t wait for a perfect spec. I build small, fast prototypes so we can feel ideas instead of debating them in the abstract. It shortens the distance between direction and implementation and gets us to stronger solutions, faster.',
  },
  {
    title: 'Performance as a design constraint',
    description:
      'Great experiences feel light, intentional, and fast. I treat performance as part of the design itself. That means balancing visual ambition with technical reality, understanding platform limits, and building surfaces that feel responsive and human.',
  },
  {
    title: 'Interaction as a design tool',
    description:
      'Motion is one part of the system, but it carries an outsized influence on how an experience feels. Used with intention, it reveals hierarchy, guides attention, and shapes how an experience unfolds. Interaction and animation should clarify ideas and bring personality to the work in a way that feels alive rather than ornamental.',
  },
  {
    title: 'Collaboration that closes the gap',
    description:
      "My goal is to give a project its voice and its structure at the same time — bridging craft and implementation in a way that elevates both. I work closely with designers to explore ideas, and with engineers to make them reliable, maintainable, and scalable. We're not the only stakeholders though, so I always aim to get users and clients involved early and often to ensure we're solving the right problems together.",
  },
];
