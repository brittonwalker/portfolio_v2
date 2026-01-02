export function Capabilities() {
  return (
    <section className="px-6 md:px-12 lg:px-24 bg-background text-foreground my-20 lg:my-[15vh]">
      <div className="flex flex-col justify-center gap-10 lg:gap-[15vh] relative py-20 lg:py-[15vh]">
        <div className="absolute top-0 w-full h-full pointer-events-none grid-cols-1 md:grid-cols-5 md:px-[6.25vw] left-0 right-0 hidden md:grid gap-[3vw]">
          <div className="col border-l border-white/30"></div>
          <div className="col border-l border-white/30"></div>
          <div className="col border-l border-white/30"></div>
          <div className="col border-l border-white/30"></div>
          <div className="col border-l border-r border-white/30"></div>
        </div>
        <div className="absolute top-0 w-full h-[15vh] pointer-events-none left-0 right-0 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 w-full h-[15vh] pointer-events-none left-0 right-0 bg-gradient-to-t from-background to-transparent"></div>
        {sections.map(({ title, items }, index) => (
          <div
            key={`capability-section-${index}`}
            className="grid grid-cols-1 md:grid-cols-5 gap-[3vw] md:px-[6.25vw]"
          >
            <h2 className="text-sub-title leading-[1.1em] md:leading-[3vw] col-span-3 pl-4">
              {title}
            </h2>
            <div className="col-span-2">
              <ul className="pl-4">
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
    ],
  },
  {
    title: 'Awards & Recognition',
    items: ['2x Webby Winner', '4x Webby Nominee', '5x Webby Honoree'],
  },
];
