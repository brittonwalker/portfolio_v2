import { projects } from '@/data/projects';

const gridCols = {
  1: 'col-span-5 col-start-2',
  2: 'col-span-5 col-start-4',
};

export function ProjectsFloater() {
  return (
    <div className="projects-floater bg-background">
      <div className="grid grid-cols-12">
        {projects.slice(0, 2).map((project, index) => (
          <div
            key={project.slug}
            className={`project-card pt-8 top-[calc(6.25vw*2.4)] ${
              gridCols[index + 1]
            } `}
          >
            <div className="aspect-[3/4]">
              <img
                src={'/images/puter.jpg'}
                className="w-full h-full object-contain rounded-sm"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
