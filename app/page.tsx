import { First } from '@/components/first';
import { Projects } from '@/components/projects';
import { ProjectsTwo } from '@/components/projects-two';
import { IntroText } from '@/components/intro-text';
import { Tools } from '@/components/tools';
import { Process } from '@/components/process';
import { End } from '@/components/end';

export default function Home() {
  return (
    <main className="">
      <First />
      <IntroText />
      <ProjectsTwo />
      <Process />
      <End />
    </main>
  );
}
