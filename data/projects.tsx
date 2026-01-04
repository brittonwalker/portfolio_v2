export type Project = {
  title: string;
  year?: number;
  slug?: string;
  comingSoon?: boolean;
  description?: string;
  imageUrl?: string;
  link?: string;
  isFeatured?: boolean;
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
    isFeatured: true,
    year: 2024,
    imageUrl: '/video/athletics-capture-optimized.mp4',
    gridArea: 'first',
    description:
      'A complete redesign and rebuild of Athletics’ agency website to better showcase their work and capabilities. Together we prototyped a lot of ideas to improve the user experience and bring delight to prospective clients. Built with Next.js.',
    link: 'https://athleticsnyc.com/',
    meta: {
      client: 'Athletics',
      design: 'Athletics',
      role: 'Developer',
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
    isFeatured: true,
    gridArea: 'second',
    description:
      'Redesigned and built by Athletics to enhance their digital storytelling capabilities with a focus on exhibition and live events. I migrated their existing web properties into one and created a design system and component library for a full brand experience. Built with Next.js on WPVIP.',
    imageUrl: '/video/nm-capture-optimized.mp4',
    link: 'https://www.newmuseum.org/',
    meta: {
      client: 'New Museum',
      design: 'Athletics',
      role: 'Developer',
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
    isFeatured: true,
    year: 2020,
    description:
      'A complete redesign and rebuild by Athletics of the NYRB website to better serve their 200k users and 60+ year archive. From dynamic paywalls to custom editorial tools, their team can now manage content more efficiently and provide a better experience for their readers.',
    imageUrl: '/video/nyrb-optimized.mp4',
    gridArea: 'third',
    link: 'https://www.nybooks.com/',
    meta: {
      client: 'New York Review of Books',
      design: 'Athletics',
      role: 'Developer',
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
    isFeatured: true,
    year: 2020,
    description:
      'The Counter needed a system that could elevate their storytelling in food journalism. Collaborating with Athletics, I helped build a custom CMS and front-end experience to bring their stories to life.',
    imageUrl: '/video/the-counter-optimized.mp4',
    gridArea: 'fourth',
    link: 'https://thecounter.org/',
    meta: {
      client: 'The Counter',
      design: 'Athletics',
      role: 'Developer',
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
      role: 'Developer, UX',
      services: ['Web Design', 'Development'],
    },
    year: 2022,
  },
  {
    title: 'Zander Abranowicz',
    meta: {
      client: 'New York Review of Books',
      design: 'Abbreviated Projects',
      role: 'Developer, UX',
      services: ['Web Design', 'Development'],
    },
    year: 2022,
  },
  {
    title: 'Soor Ploom',
    link: 'https://soorploomclothier.com/',
    meta: {
      client: 'New York Review of Books',
      design: 'Malcolm Buick',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2019,
  },
  {
    title: 'The Nation',
    link: 'https://www.thenation.com/',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2023,
  },
  {
    title: 'Turf',
    link: 'https://turf.design/',
    meta: {
      client: 'Turf',
      design: 'Athletics',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2022,
  },
  {
    title: 'Guild',
    link: 'https://guild.com/',
    meta: {
      client: 'Guild',
      design: 'Athletics',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2023,
  },
  {
    title: 'Reaktor',
    year: 2023,
    link: 'https://www.reaktor.com/',
    meta: {
      client: 'Reaktor',
      design: 'Athletics',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
  },
  {
    title: 'Otto for Square',
    year: 2020,
    meta: {
      client: 'Otto for Square',
      design: 'Athletics',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
  },
  {
    title: 'Meet NYU',
    year: 2019,
    link: 'https://meet.nyu.edu/',
    meta: {
      client: 'Meet NYU',
      design: 'Athletics',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
  },
  {
    title: 'Carlen Parfums',
    year: 2017,
    link: 'https://carlenparfums.com/',
    meta: {
      client: 'Carlen Parfums',
      design: 'Athletics',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
  },
  {
    title: 'Good Council',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2017,
  },
  {
    title: 'Trahan Architects',
    link: 'https://trahanarchitects.com/',
    meta: {
      client: 'The Nation',
      design: 'For Office Use Only',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2016,
  },
  {
    title: 'Michael K Chen Architecture',
    link: 'https://mkca.com/',
    meta: {
      client: 'The Nation',
      design: 'For Office Use Only',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2016,
  },
  {
    title: 'Hotel Vermont',
    link: 'https://hotelvt.com/',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2018,
  },
  {
    title: 'Pulitzer Arts Foundation',
    link: 'https://pulitzerarts.org/',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2017,
  },
  {
    title: 'ASKA',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Developer, UX',
      services: ['Web Design', 'Development'],
    },
    year: 2018,
  },
  {
    title: 'JPMorgan Fintech',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2017,
  },
  {
    title: 'Soft City Press',
    meta: {
      client: 'The Nation',
      design: 'Brendon Avalos',
      role: 'Developer, Design, UX',
      services: ['Web Design', 'Development'],
    },
    year: 2016,
  },
  {
    title: 'Criterion Top Ten',
    isFeatured: true,
    description:
      "Over a holiday break, I needed to know must see films from a reputable source. I gathered all the data from Criterion's Top Ten Lists's to find the top ten films and directors mentioned, hoping to kill decision paralysis. Built with React and Typescript on Vercel.",
    link: 'https://criterion-top-ten.vercel.app/',
    featuredAsset: {
      type: 'video',
      url: '/projects/criterion-top-ten/featured.webm',
    },
    meta: {
      client: 'The Nation',
      design: 'Britton Walker',
      role: 'Design, Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2022,
  },
  {
    title: 'GOCA',
    link: 'https://www.goca.gallery/',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Developer, Prototyping',
      services: ['Web Design', 'Development'],
    },
    year: 2025,
  },
  {
    title: 'Kieren Timberlake (coming soon)',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Developer, Prototyping, UX',
      services: ['Web Design', 'Development'],
    },
    year: 2025,
    comingSoon: true,
  },
  {
    title: 'A. Savage',
    meta: {
      client: 'The Nation',
      design: 'Brendon Avalos',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2019,
  },
  {
    title: 'WPVIP',
    link: 'https://wpvip.com/',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2021,
  },
  {
    title: 'Urban Omnibus',
    link: 'https://urbanomnibus.net/',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2019,
  },
  {
    title: 'Architectural League of NY',
    link: 'https://archleague.org/',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2019,
  },
  {
    title: 'Aimsun',
    link: 'https://www.aimsun.com/',
    meta: {
      client: 'The Nation',
      design: 'Athletics',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2018,
  },
  {
    title: 'Courage Museum (coming soon)',
    meta: {
      client: 'Courage Museum',
      design: 'Athletics, Biba Washburn',
      role: 'Developer, Prototyping, UX',
      services: ['Web Design', 'Development'],
    },
    year: 2025,
    comingSoon: true,
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
  {
    title: 'Le Livre',
    meta: {
      client: 'Athletics',
      design: 'Athletics',
      role: 'Design, Developer, Prototyping',
      services: ['Web Design', 'Development'],
    },
    year: 2018,
  },
  {
    title: 'One Meditation',
    meta: {
      client: 'Athletics',
      design: 'John Soat',
      role: 'Developer, Prototyping',
      services: ['Web Design', 'Development'],
    },
    year: 2018,
  },
  {
    title: 'Amobee',
    meta: {
      client: 'Athletics',
      design: 'Athletics',
      role: 'Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2018,
  },
  {
    title: 'Blanket Forts',
    meta: {
      client: 'Athletics',
      design: 'Britton Walker',
      role: 'Design, Developer',
      services: ['Web Design', 'Development'],
    },
    year: 2021,
  },
];
