'use client';

import { useState } from 'react';
import { projects, Project } from '@/data/projects';
import Link from 'next/link';

type ProjectsByYear = {
  [year: number]: Project[];
};

const projectsList = projects.reduce(
  (acc: ProjectsByYear, project: Project) => {
    if (!acc[project.year || 0]) {
      acc[project.year || 0] = [];
    }
    acc[project.year || 0].push(project);
    return acc;
  },
  {}
);

export default function Home() {
  const [listType, setListType] = useState<'selected' | 'list'>('selected');

  const handleFilter = (project: Project) => {
    if (listType === 'selected') {
      return project?.slug;
    }

    return true;
  };

  const handleSort = (a: Project, b: Project) => {
    if (a.year && b.year) {
      return b.year - a.year;
    }
    if (a.year) return -1;
    if (b.year) return 1;
    return 0;
  };

  const projectTypes = {
    selected: projects.filter((project) => project?.slug),
    list: projectsList,
  };

  return (
    <main className="main pt-[20vh] px-4 lg:px-8 relative">
      <div className="flex justify-between pb-5 lg:pb-10 border-b">
        <h1 className="text-[10vw] leading-[90%] ">Projects</h1>
        <div className="flex gap-4 items-end text-base leading-[1em]">
          <button
            className={`cursor-pointer ${
              listType === 'selected' ? '' : 'opacity-80'
            }`}
            onClick={() => setListType('selected')}
          >
            Selected
          </button>
          <span>/</span>
          <button
            className={`cursor-pointer ${
              listType === 'list' ? '' : 'opacity-80'
            }`}
            onClick={() => setListType('list')}
          >
            Full List
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          className={`grid grid-cols-12 pt-10 lg:pt-20 ${
            listType === 'list' ? '' : 'gap-4'
          }`}
        >
          {listType === 'list' && (
            <div className="col-span-12 grid-cols-12 opacity-80 py-2 hidden lg:grid">
              <div className="col-span-2">Year</div>
              <div className="col-span-3">Client</div>
              <div className="col-span-3">Design</div>
              <div className="col-span-4">Role</div>
            </div>
          )}
          {listType === 'list' &&
            Object.entries(projectTypes.list)
              .reverse()
              .map(([year, projects]) => (
                <div
                  key={year}
                  className="col-span-12 grid lg:grid-cols-12 mb-20"
                >
                  <div className="lg:col-span-2 py-2 lg:border-t text-4xl lg:text-5xl">
                    {year}
                  </div>
                  <div className="lg:col-span-10">
                    {projects.map((project, index) => (
                      <ProjectItem
                        key={index}
                        project={project}
                        index={index}
                        variant={listType}
                        showYear={index === 0}
                      />
                    ))}
                  </div>
                </div>
              ))}
          {listType === 'selected' &&
            projectTypes.selected
              .sort(handleSort)
              .map((project, index, filteredProjects) => (
                <ProjectItem
                  key={index}
                  project={project}
                  index={index}
                  variant={listType}
                  showYear={
                    index === 0 ||
                    project.year !== filteredProjects[index - 1]?.year
                  }
                />
              ))}
        </div>
        <div className="sticky bottom-0 inset-x-0 z-10 flex justify-center pb-8 mt-10 pointer-events-none">
          <div className="bg-foreground text-background w-fit py-2 px-4 rounded-[8px] flex gap-4 text-sm pointer-events-auto">
            <button
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setListType('selected')}
              style={{
                opacity: listType === 'selected' ? 1 : 0.3,
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5 19H8.325V15.675H5V19ZM10.325 19H13.675V15.675H10.325V19ZM15.675 19H19V15.675H15.675V19ZM5 13.675H8.325V10.325H5V13.675ZM10.325 13.675H13.675V10.325H10.325V13.675ZM15.675 13.675H19V10.325H15.675V13.675ZM5 8.325H8.325V5H5V8.325ZM10.325 8.325H13.675V5H10.325V8.325ZM15.675 8.325H19V5H15.675V8.325Z"
                  fill="currentColor"
                ></path>
              </svg>
              Selected
            </button>
            <button
              className="flex items-center gap-2 cursor-pointer"
              style={{
                opacity: listType === 'list' ? 1 : 0.3,
              }}
              onClick={() => setListType('list')}
            >
              <span className="inline-block w-3.5">
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12V10H12V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>{' '}
              Full List
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

const ProjectItem = ({
  project,
  variant = 'selected',
}: {
  project: Project;
  index: number;
  variant?: 'selected' | 'list';
  showYear?: boolean;
}) => {
  if (variant === 'list') {
    if (!project.link) {
      return (
        <div className="grid lg:grid-cols-10 relative border-t lg:border-none">
          <ListRow project={project} />
        </div>
      );
    } else {
      return (
        <Link
          href={`/projects/${project.slug}`}
          className="grid lg:grid-cols-10 relative border-t lg:border-none"
        >
          <ListRow project={project} />
        </Link>
      );
    }
  }

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 mb-10">
      <a href={`/projects/${project.slug}`}>
        <div className="w-full aspect-video mb-4 bg-gray-200 overflow-hidden">
          {project.featuredAsset?.type === 'video' ? (
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
  );
};

const ListRow = ({ project }: { project: Project }) => {
  return (
    <>
      <div className="col-span-3 lg:border-t py-2">{project.title ?? '—'}</div>
      <div className="col-span-3 lg:border-t py-2 hidden lg:block">
        {project.meta?.design ?? '—'}
      </div>
      <div className="col-span-3 lg:border-t py-2 hidden lg:block">
        {project.meta?.role ?? '—'}
      </div>
      <div className="col-span-1 lg:border-t py-2 text-right absolute lg:static right-4 top-1/2 -translate-y-1/2 lg:translate-y-0">
        {project.slug && <>&rarr;</>}
        {project.link && !project.slug && <>&#x2197;</>}
      </div>
    </>
  );
};
