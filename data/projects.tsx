type Project = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

export const projects: Project[] = [
  {
    title: 'New Museum',
    description:
      'Redesigned and built by Athletics to enhance their digital storytelling capabilities with a focus on exhibition and live events. Built with Next.js on WPVIP.',
    imageUrl: '/video/nm-capture-optimized.mp4',
    link: 'https://www.newmuseum.org/',
  },
  {
    title: 'Athletics',
    imageUrl: '/video/athletics-capture-optimized.mp4',
    description:
      'A complete redesign and rebuild of Athletics’ agency website to better showcase their work and capabilities. Built with Next.js.',
    link: 'https://athleticsnyc.com/',
  },
  {
    title: 'New York Review of Books',
    description:
      'A complete redesign and rebuild of the NYRB website to better serve their 200k users and 60+ year archive.',
    imageUrl: '/video/nyrb-optimized.mp4',
    link: 'https://www.nybooks.com/',
  },
  {
    title: 'The Counter',
    description:
      'The Counter needed a system that could elevate their storytelling in food journalism. Collaborating with Athletics, I helped build a custom CMS and front-end experience to bring their stories to life.',
    imageUrl: '/video/the-counter-optimized.mp4',
    link: 'https://thecounter.org/',
  },
];
