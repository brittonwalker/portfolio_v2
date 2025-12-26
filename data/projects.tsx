export type Project = {
  title: string;
  year?: number;
  slug?: string;
  description?: string;
  imageUrl?: string;
  link?: string;
  images?: string[];
  gridArea?: string;
  featuredAsset?: {
    type: 'image' | 'video';
    url: string;
  };
  meta?: {
    client?: string;
    design?: string;
    role?: string;
    services?: string[];
  };
  assets?: {
    type: 'image' | 'video';
    url: string;
  }[];
};

export const projects: Project[] = [
  {
    title: 'Athletics',
    slug: 'athletics',
    year: 2024,
    imageUrl: '/video/athletics-capture-optimized.mp4',
    gridArea: 'first',
    description:
      'A complete redesign and rebuild of Athletics’ agency website to better showcase their work and capabilities. Built with Next.js.',
    link: 'https://athleticsnyc.com/',
    meta: {
      client: 'Athletics',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    featuredAsset: {
      type: 'video',
      url: '/projects/athletics/home.webm',
    },
    assets: [
      {
        type: 'image',
        url: '/projects/athletics/first.jpg',
      },
      {
        type: 'image',
        url: '/projects/athletics/second.jpg',
      },
      {
        type: 'image',
        url: '/projects/athletics/third.jpg',
      },
    ],
  },
  {
    title: 'New Museum',
    year: 2024,
    slug: 'new-museum',
    gridArea: 'second',
    description:
      'Redesigned and built by Athletics to enhance their digital storytelling capabilities with a focus on exhibition and live events. Built with Next.js on WPVIP.',
    imageUrl: '/video/nm-capture-optimized.mp4',
    link: 'https://www.newmuseum.org/',
    meta: {
      client: 'New Museum',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    featuredAsset: {
      type: 'video',
      url: '/projects/new-museum/fef95ab7.mp4',
    },
    assets: [
      {
        type: 'image',
        url: '/projects/new-museum/NMcase_Site_Events01-scaled-1.jpg',
      },
      {
        type: 'video',
        url: '/projects/new-museum/NMcase_Site_Interactions_Footer.mp4',
      },
      {
        type: 'video',
        url: '/projects/new-museum/NMcase_Site_Interactions_Slideshow.mp4',
      },
      {
        type: 'video',
        url: '/projects/new-museum/fef95ab7.mp4',
      },
      {
        type: 'image',
        url: '/projects/new-museum/NMcase_Site_Events02-scaled-1.jpg',
      },
    ],
  },

  {
    title: 'New York Review of Books',
    slug: 'nyrb',
    year: 2020,
    description:
      'A complete redesign and rebuild of the NYRB website to better serve their 200k users and 60+ year archive.',
    imageUrl: '/video/nyrb-optimized.mp4',
    gridArea: 'third',
    link: 'https://www.nybooks.com/',
    meta: {
      client: 'New York Review of Books',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    featuredAsset: {
      type: 'video',
      url: '/projects/nyrb/2329492039.mp4',
    },
    assets: [
      {
        type: 'video',
        url: '/projects/nyrb/2329492039.mp4',
      },
      {
        type: 'image',
        url: '/projects/nyrb/NYRev_Articles_New2-scaled.jpg',
      },
      {
        type: 'image',
        url: '/projects/nyrb/NYRev_LanderElements_1-scaled.jpg',
      },
      {
        type: 'image',
        url: '/projects/nyrb/NYRev_Mobile-scaled.jpg',
      },
      {
        type: 'video',
        url: '/projects/nyrb/content-block.mp4',
      },
    ],
  },
  {
    title: 'The Counter',
    slug: 'the-counter',
    year: 2020,
    description:
      'The Counter needed a system that could elevate their storytelling in food journalism. Collaborating with Athletics, I helped build a custom CMS and front-end experience to bring their stories to life.',
    imageUrl: '/video/the-counter-optimized.mp4',
    gridArea: 'fourth',
    link: 'https://thecounter.org/',
    meta: {
      client: 'The Counter',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    featuredAsset: {
      type: 'video',
      url: '/projects/the-counter/1801556876.mp4',
    },
    assets: [
      {
        type: 'image',
        url: '/projects/the-counter/explore-2.png',
      },
      {
        type: 'image',
        url: '/projects/the-counter/homepage-5.png',
      },
    ],
  },
  {
    title: 'Abbreviated Projects',
    meta: {
      client: 'New York Review of Books',
      design: 'Abbreviated Projects',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2022,
  },
  {
    title: 'Zander Abranowicz',
    meta: {
      client: 'New York Review of Books',
      design: 'Abbreviated Projects',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2022,
  },
  {
    title: 'Soor Ploom',
    meta: {
      client: 'New York Review of Books',
      design: 'Malcolm Buick',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2019,
  },
  {
    title: 'The Nation',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2024,
  },
  {
    title: 'Turf',
    meta: {
      client: 'Turf',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2022,
  },
  {
    title: 'Guild',
    meta: {
      client: 'Guild',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2023,
  },
  {
    title: 'Reaktor',
    year: 2021,
    meta: {
      client: 'Reaktor',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
  },
  {
    title: 'Otto for Square',
    year: 2020,
    meta: {
      client: 'Otto for Square',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
  },
  {
    title: 'Meet NYU',
    year: 2019,
    meta: {
      client: 'Meet NYU',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
  },
  {
    title: 'Carlen Parfums',
    year: 2018,
    meta: {
      client: 'Carlen Parfums',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
  },
  {
    title: 'Good Council',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2017,
  },
  {
    title: 'Trahan Architects',
    meta: {
      client: 'The Nation',
      design: 'For Office Use Only',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2017,
  },
  {
    title: 'MKCA - Michael K Chen Architecture',
    meta: {
      client: 'The Nation',
      design: 'For Office Use Only',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2017,
  },
  {
    title: 'Hotel Vermont',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2018,
  },
  {
    title: 'Pulitzer Arts Foundation',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2017,
  },
  {
    title: 'ASKA',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2018,
  },
  {
    title: 'JPMorgan Fintech',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2017,
  },
  {
    title: 'Soft City Press',
    meta: {
      client: 'The Nation',
      design: 'Brendon Avalos',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2016,
  },
  {
    title: 'Criterion Top Ten',
    meta: {
      client: 'The Nation',
      design: 'Britton Walker',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2022,
  },
  {
    title: 'GOCA',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2025,
  },
  {
    title: 'Kieren Timberlake',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2026,
  },
  {
    title: 'A. Savage',
    meta: {
      client: 'The Nation',
      design: 'Brendon Avalos',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2019,
  },
  {
    title: 'WPVIP',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2021,
  },
  {
    title: 'American Theatre Wing',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2016,
  },
  {
    title: 'Urban Omnibus',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2019,
  },
  {
    title: 'Architectural League of NY',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2019,
  },
  {
    title: 'Aimsun',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2018,
  },
  {
    title: 'Courage Museum',
    meta: {
      client: 'The Nation',
      design: 'Biba Washburn',
      role: 'Front-end Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2026,
  },
  {
    title: 'Amazon Developer Experience',
    meta: {
      client: 'Amazon',
      design: 'Athletics',
      role: 'Design, Prototyping',
      services: ['Web Design', 'Development'],
    },
    year: 2025,
  },
];
