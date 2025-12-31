export function Capabilities() {
  return (
    <section className="py-[15vh] px-6 md:px-12 lg:px-24 bg-background text-foreground flex flex-col justify-center gap-[15vh]">
      {sections.map(({ title, items }, index) => (
        <div
          key={`capability-section-${index}`}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 px-[6.25vw]"
        >
          <h2 className="text-sub-title leading-[1.1em] md:leading-[3vw] col-span-3">
            {title}
          </h2>
          <div className="col-span-2">
            <ul>
              {items.map((item, itemIndex) => (
                <li key={`capability-item-${itemIndex}`} className="">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
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
    ],
  },
  {
    title: 'Awards & Recognition',
    items: [
      'Full Stack Development',
      'Web Design',
      'Interaction Design',
      'UX/UI Design',
      'Prototyping',
      'CMS Development',
    ],
  },
];
