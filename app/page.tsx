import { First } from '@/components/first';
import { Projects } from '@/components/projects';
import { IntroText } from '@/components/intro-text';

export default function Home() {
  return (
    <main className="">
      <First />
      <IntroText />
      <Projects />
    </main>
  );
}
