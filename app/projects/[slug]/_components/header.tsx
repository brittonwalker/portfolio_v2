import { Project } from '@/data/projects';

export function Header({ project }: { project: Project }) {
  return (
    <div className="my-18">
      <div className="border-b pb-8 my-8">
        <h1 className="text-[10vw] leading-[90%] ">{project.title}</h1>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-7 grid grid-cols-2 gap-4">
          <div className="col-span-2 mb-10">
            Athletics is a top tier design and branding studio based in
            Brooklyn, NY. Spoiler alert, it's where I've forged my career. In
            2024, I collaborated with the whole team to refresh their website
            using a custom headless WordPress built with Next.js, Three.js, and
            GraphQL. The site features a sleek, modern design that showcases
            their impressive portfolio of work and technology chops.
          </div>
          <div className="col-span-2">
            <div className="bg-gray-300 flex justify-center items-center aspect-video">
              <video
                src="/projects/new-museum/NMcase_Site_Interactions_Slideshow.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-[73%]"
              />
            </div>
          </div>
          <div className="col-span-1">
            <video
              src="/projects/nyrb/2329492039.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full"
            />
          </div>
          <div className="col-span-1">
            <img
              src="/projects/nyrb/NYRev_Articles_New2-scaled.jpg"
              alt="New York Review of Books Article"
              className="w-full"
            />
          </div>
        </div>
        <div className="col-span-4 col-start-9 font-mono">
          <ul>
            <li>
              <strong>Role:</strong> Lead Developer
            </li>
            <li>
              <strong>Technologies:</strong> Next.js, Three.js, GraphQL,
              WordPress, GSAP
            </li>
            <li>
              <strong>Date:</strong> 2024
            </li>
            <li>
              <strong>Link:</strong>{' '}
              <a
                href="https://www.athletics.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                athletics.com ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
