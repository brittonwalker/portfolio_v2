import { HomepageIntro } from '@/components/homepage-intro';
import { MarqueeText } from '@/components/marquee-text';
import { ProjectsLeft } from '@/components/projects/projects-left';
import { Capabilities } from '@/components/capabilities';

export default function Home() {
  return (
    <main className="main">
      <HomepageIntro />
      <MarqueeText text="Selected Projects" />
      <ProjectsLeft />
      <Capabilities />
    </main>
  );
}
