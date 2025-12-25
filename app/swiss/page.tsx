import { First } from '@/components/first';
import { ProjectsTwo } from '@/components/projects-two';
import { IntroText } from '@/components/intro-text';
import { Process } from '@/components/process';
import { End } from '@/components/end';
import { Fun } from '@/components/fun';
import { Projects3 } from '@/components/projects-3';
import { Grided } from '@/components/intros/grided';
import { ProjectsRow } from '@/components/projects/projects-row';
import { ProjectsScroller } from '@/components/projects/projects-scroller';
import { ProjectGrid } from '@/components/projects/project-grid';
import { BigScroller } from '@/components/projects/projects-big-scroller';
import { Projects } from '@/components/projects';

export default function Home() {
  return (
    <main className="main">
      {/* <First /> */}
      <Grided />
      <IntroText />
      <ProjectsRow />
      <BigScroller />
      <ProjectGrid />
      <ProjectsScroller />
      <ProjectsRow />
      <ProjectsTwo />
      <Process />
      <Projects3 />
      <Fun />
    </main>
  );
}
