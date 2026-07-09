import { projects } from '@/data/projects';

export function ProjectsRow() {
  return (
    <div className="projects-row px-8 pt-[25vh] relative bg-background border-t border-foreground">
      <h2 className="text-[6.25vw] leading-[1.2] text-balance mb-10  top-[6.25vw]">
        Selected Projects
      </h2>
      <div className="flex flex-col gap-y-[10vh] ">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="project-card border-t border-foreground pt-8 top-[calc(6.25vw*2.4)]"
          >
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-5">
                <h3 className="text-sub-title leading-[1.1em] md:leading-[3vw]">
                  {project.title}
                </h3>
              </div>
              <div className="col-span-6 col-start-7 gap-4">
                <div className="">
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-10 flex-nowrap">
              {project?.assets &&
                project.assets.map((asset, index) => (
                  <div key={index} className="max-h-[300px] aspect-video">
                    {asset.type === 'image' ? (
                      <img
                        src={asset.url}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <video
                        src={asset.url}
                        className="h-full w-full object-cover"
                        muted
                        loop
                        autoPlay
                        playsInline
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
