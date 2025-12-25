import { Swiss } from '@/components/intros/swiss';
import { MarqueeText } from '@/components/marquee-text';
import { ProjectsLeft } from '@/components/projects/projects-left';

export default function Home() {
  return (
    <main className="main">
      <Swiss />
      <MarqueeText text="Selected Projects" />
      <ProjectsLeft />
    </main>
  );
}
