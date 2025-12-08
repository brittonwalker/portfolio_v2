import { First } from '@/components/first';
import { ProjectsTwo } from '@/components/projects-two';
import { IntroText } from '@/components/intro-text';
import { Process } from '@/components/process';
import { End } from '@/components/end';
import { Fun } from '@/components/fun';

export default function Home() {
  return (
    <main className="main">
      <First />
      <IntroText />
      <ProjectsTwo />
      <Process />
      <Fun />
      <End />
    </main>
  );
}
