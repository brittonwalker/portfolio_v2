import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import { Header } from './_components/header';

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects
    .filter((project) => project.slug)
    .map((project) => ({
      slug: project.slug!,
    }));
}

// Optional: Generate metadata for each project
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-[20vh] px-8">
      <Header project={project} />

      {/* Your project content here */}
      <div className="project-content">
        <h1>{project.title}</h1>
        <p>{project.description}</p>

        <div className="assets"></div>
      </div>
    </div>
  );
}
