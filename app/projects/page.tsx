import { projects } from '@/data/projects';

export default function Home() {
  return (
    <main className="main pt-[20vh] px-8">
      <h1 className="text-[10vw] leading-[90%] pb-10 border-b">Projects</h1>
      <div className="grid grid-cols-12 gap-4 pt-20">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="col-span-12 md:col-span-6 lg:col-span-4 mb-10"
          >
            <a href={`/projects/${project.slug}`}>
              <div className="w-full aspect-video mb-4 bg-gray-200 overflow-hidden">
                {project.featuredAsset?.type === 'image' ? (
                  <img
                    src={project.featuredAsset.url}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                ) : project.featuredAsset?.type === 'video' ? (
                  <video
                    src={project.featuredAsset.url}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    muted
                    loop
                    autoPlay
                  />
                ) : null}
              </div>
              <h2 className="text-2xl mb-2">{project.title}</h2>
              <p className="text-base">{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
