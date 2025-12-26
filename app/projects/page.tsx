'use client';

import { useState } from 'react';
import { projects, Project } from '@/data/projects';
import Link from 'next/link';

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

  return (
    <main className="main pt-[20vh] px-8">
      <div className="flex justify-between pb-10 border-b">
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

      <div className="grid grid-cols-12 pt-20">
        {listType === 'list' && (
          <div className="col-span-12 grid grid-cols-12 opacity-80 py-4">
            <div className="col-span-1">Year</div>
            <div className="col-span-3">Client</div>
            <div className="col-span-3">Design</div>
            <div className="col-span-4">Role</div>
          </div>
        )}
        {projects
          .filter(handleFilter)
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
    </main>
  );
}

const ProjectItem = ({
  project,
  variant = 'selected',
  showYear = true,
}: {
  project: Project;
  index: number;
  variant?: 'selected' | 'list';
  showYear?: boolean;
}) => {
  if (variant === 'list') {
    if (!project.slug) {
      return (
        <div className="col-span-12 grid grid-cols-12">
          <ListRow project={project} showYear={showYear} />
        </div>
      );
    } else {
      return (
        <Link
          href={`/projects/${project.slug}`}
          className="col-span-12 grid grid-cols-12"
        >
          <ListRow project={project} showYear={showYear} />
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

const ListRow = ({
  project,
  showYear = true,
}: {
  project: Project;
  showYear?: boolean;
}) => {
  return (
    <>
      <div
        className={`col-span-1 border-t py-4 ${showYear ? '' : 'opacity-0'}`}
      >
        {showYear ? project.year ?? '—' : ''}
      </div>
      <div className="col-span-3 border-t py-4">{project.title ?? '—'}</div>
      <div className="col-span-3 border-t py-4">
        {project.meta?.design ?? '—'}
      </div>
      <div className="col-span-4 border-t py-4">
        {project.meta?.role ?? '—'}
      </div>
      <div className="col-span-1 border-t py-4 text-right">
        {project.slug && <>&rarr;</>}
      </div>
    </>
  );
};
