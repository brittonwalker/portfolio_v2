export function Capabilities() {
  return (
    <section className="px-6 md:px-12 lg:px-24 bg-background text-foreground mt-20 lg:mt-[15vh]">
      <div className="flex flex-col justify-center gap-10 lg:gap-[15vh] relative py-28 lg:py-[15vh] text-[22px] lg:text-[max(32px,1vw)] leading-[1.3em]">
        <div className="absolute top-0 w-full h-full pointer-events-none grid-cols-3 md:grid-cols-5 md:px-[6.25vw] left-0 right-0 grid gap-[3vw]">
          <div className="col border-l border-foreground/30"></div>
          <div className="col border-l border-foreground/30"></div>
          <div className="col border-l border-foreground/30"></div>
          <div className="hidden lg:block col border-l border-foreground/30"></div>
          <div className="hidden lg:block col border-l border-r border-foreground/30"></div>
        </div>
        <div className="absolute top-0 w-full h-[15vh] pointer-events-none left-0 right-0 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 w-full h-[15vh] pointer-events-none left-0 right-0 bg-gradient-to-t from-background to-transparent"></div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[3vw] md:px-[6.25vw]">
          <div className="col-span-3 pl-3 lg:pl-4">
            <h2 className="text-sub-title leading-[1.1em] md:leading-[3vw] text-accent">
              Who I am
            </h2>
            <div className="mt-[1.3em]">
              <p>
                A design-savvy engineer who works in the space where
                interaction, storytelling, and system architecture meet. I care
                about motion, clarity, and the systems that support them. They
                form the invisible structure that makes the work feel effortless
                and the message instantly understood.
              </p>
            </div>
            <div className="mt-[1.3em]">
              <p>
                I prototype early, work directly with designers, and build the
                systems that turn expressive ideas into experiences that scale.
                I can also take your idea and run with it because my aim is
                simple: create interfaces that feel intentional, responsive, and
                unmistakably human.
              </p>
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>
        {sections.map(({ title, items }, index) => (
          <div
            key={`capability-section-${index}`}
            className="grid grid-cols-1 md:grid-cols-5 gap-[3vw] md:px-[6.25vw]"
          >
            <h2 className="text-sub-title leading-[1.1em] md:leading-[3vw] col-span-3 pl-3 lg:pl-4 lg:mb-[1.3em] text-accent">
              {title}
            </h2>
            <div className="col-span-2">
              <ul className="pl-3 lg:pl-4">
                {items.map((item, itemIndex) => (
                  <li key={`capability-item-${itemIndex}`} className="">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const sections = [
  {
    title: 'What I do',
    items: [
      'Full Stack Development',
      'Web Design',
      'Interaction Design',
      'UX/UI Design',
      'Prototyping',
      'CMS Development',
      'Custom Tools',
      'Design Systems',
      'Component Libraries',
    ],
  },
  {
    title: 'How I do it',
    items: [
      'Next.js',
      'Node.js',
      'PHP',
      'WordPress',
      'Webgl',
      'Tailwind CSS',
      'Headless CMS',
      'Figma',
      'Design Thinking',
      'Without ego',
      'With empathy',
      'Collaboratively',
    ],
  },
  {
    title: 'Awards & Recognition',
    items: ['2x Webby Winner', '4x Webby Nominee', '5x Webby Honoree'],
  },
];
