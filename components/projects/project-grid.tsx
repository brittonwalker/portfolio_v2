import { projects } from '@/data/projects';

export function ProjectGrid() {
  return (
    <section className="px-8 pt-20">
      <h2 className="text-[8vw]">Project Grid</h2>
      <div className="grid project-grid mt-10">
        {projects.map((project, index) => (
          <div
            key={project.slug}
            style={{
              gridArea: project.gridArea,
            }}
          >
            {project.assets.map((asset, assetIndex) => {
              if (assetIndex > 0) return null; // Show only the first asset for brevity
              if (asset.type === 'video') {
                return (
                  <video
                    key={assetIndex}
                    src={asset.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto"
                  />
                );
              } else if (asset.type === 'image') {
                return (
                  <img
                    key={assetIndex}
                    src={asset.url}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
