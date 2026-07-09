'use client';

import { Thinker } from './icons/thinker';
import { Gears } from './icons/gears';
import { Video } from './video';

export function Process() {
  return (
    <section className="" id="process">
      <div className="flex items-end pt-10 pb-10 md:pt-[20dvh] md:pb-[10dvh] gap-20">
        <h2 className="text-section-heading leading-section-heading uppercase">
          How I Work
        </h2>
      </div>
      <div className="bg-foreground rounded-3xl p-2 md:p-4">
        <div className="grid md:grid-cols-12 gap-6 relative overflow-hidden py-4 md:pt-10 md:pb-14">
          <div className="md:col-span-3 flex justify-center items-center">
            <div className="w-[10vw] mx-auto">
              <Thinker />
            </div>
          </div>
          <div className="md:col-span-8 md:col-start-4">
            <p className="text-[clamp(28px,2.185vw,2.185vw)] leading-[1.2em] text-pretty text-safe">
              For good work to happen, we must create a holistic system informed
              by engineering constraints, strategic goals, and empathic design.
              We&apos;re not making pretty pictures, we&apos;re building things
              people actually use. Collaboration and shared understanding bridge
              the gap to create work that feels whole, intentional, and
              reliable.
            </p>
          </div>
        </div>
        <div className="bg-background rounded-2xl p-4">
          <div className="flex flex-col divide-y divide-foreground">
            {processSteps.map(({ title, description }, index) => (
              <div
                key={`process-step-${index}`}
                className="grid md:grid-cols-12 gap-6 py-10 relative overflow-hidden"
              >
                <div className="md:col-span-3">
                  <div className="flex justify-between">
                    <p className="text-[clamp(18px,2.185vw,2.185vw)] leading-[1.2em]">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                  </div>
                </div>
                <div className="md:col-span-6 md:col-start-4">
                  <h3 className="text-[clamp(28px,2.185vw,2.185vw)] leading-[1.2em] mb-6 text-balance">
                    {title}
                  </h3>
                  <div className="text-xl md:text-2xl max-w-[880px]">
                    <p>{description}</p>
                  </div>
                </div>
                <div className="hidden md:col-span-3">
                  {/* <Video src="/video/process.webm" /> */}
                </div>
              </div>
            ))}
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
