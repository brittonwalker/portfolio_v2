import { Thinker } from './icons/thinker';
import { Systems } from './icons/systems';

export function Process() {
  return (
    <section className="min-h-dvh">
      <div className="flex items-end pt-[20dvh] pb-[10dvh] gap-20">
        <h2 className="text-[10.5vw] leading-[10vw] font-bold uppercase">
          How I Work
        </h2>
        <div className="w-[15vw] mx-auto">
          <Thinker />
        </div>
      </div>
      <div className="bg-primary rounded-3xl p-4">
        <div className="grid grid-cols-12 gap-6 relative overflow-hidden pt-10 pb-14">
          <div className="col-span-8 col-start-4">
            <p className="text-[2.185vw] leading-[2.7vw] text-pretty">
              For good work to happen, we must create a wholistic system
              informed by engineering constraints, strategic goals, and empathic
              design. We&apos;re not making pretty pictures, we're building
              things people actually use. Collaboration and shared understanding
              bridge the gap to create work that feels whole, intentional, and
              reliable.
            </p>
          </div>
        </div>
        <div className="bg-background rounded-2xl p-4">
          <div className="flex flex-col divide-y divide-white/10">
            {processSteps.map(({ title, description }, index) => (
              <div
                key={`process-step-${index}`}
                className="grid grid-cols-12 gap-6 py-10 relative overflow-hidden"
              >
                <div className="col-span-3">
                  <div className="flex justify-between">
                    <p className="text-[2.185vw]">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                  </div>
                </div>
                <div className="col-span-6 col-start-4">
                  <h3 className="text-[2.185vw] mb-6">{title}</h3>
                  <p>{description}</p>
                </div>
                <div className="col-span-2">
                  <div className="w-[10vw] mx-auto">{/* <Systems /> */}</div>
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
