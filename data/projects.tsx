export type Project = {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  link: string;
  images: string[];
  gridArea: string;
  featuredAsset?: {
    type: 'image' | 'video';
    url: string;
  };
  assets: {
    type: 'image' | 'video';
    url: string;
  }[];
};

export const projects: Project[] = [
  {
    title: 'Athletics',
    slug: 'athletics',
    imageUrl: '/video/athletics-capture-optimized.mp4',
    gridArea: 'first',
    description:
      'A complete redesign and rebuild of Athletics’ agency website to better showcase their work and capabilities. Built with Next.js.',
    link: 'https://athleticsnyc.com/',
    images: [
      '/projects/athletics/first.jpg',
      '/projects/athletics/second.jpg',
      '/projects/athletics/third.jpg',
    ],
    featuredAsset: {
      type: 'video',
      url: '/projects/athletics/home.webm',
    },
    assets: [
      // {
      //   type: 'video',
      //   url: '/video/athletics-capture-optimized.mp4',
      // },
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
    slug: 'new-museum',
    gridArea: 'second',
    description:
      'Redesigned and built by Athletics to enhance their digital storytelling capabilities with a focus on exhibition and live events. Built with Next.js on WPVIP.',
    imageUrl: '/video/nm-capture-optimized.mp4',
    link: 'https://www.newmuseum.org/',
    images: [
      '/projects/athletics/first.jpg',
      '/projects/athletics/second.jpg',
      '/projects/athletics/third.jpg',
    ],
    featuredAsset: {
      type: 'video',
      url: '/projects/new-museum/fef95ab7.mp4',
    },
    assets: [
      // {
      //   type: 'video',
      //   url: '/video/nm-capture-optimized.mp4',
      // },
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
    description:
      'A complete redesign and rebuild of the NYRB website to better serve their 200k users and 60+ year archive.',
    imageUrl: '/video/nyrb-optimized.mp4',
    gridArea: 'third',
    link: 'https://www.nybooks.com/',
    images: [
      '/projects/athletics/first.jpg',
      '/projects/athletics/second.jpg',
      '/projects/athletics/third.jpg',
    ],
    featuredAsset: {
      type: 'video',
      url: '/projects/nyrb/2329492039.mp4',
    },
    assets: [
      // {
      //   type: 'video',
      //   url: '/video/nyrb-optimized.mp4',
      // },
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
    description:
      'The Counter needed a system that could elevate their storytelling in food journalism. Collaborating with Athletics, I helped build a custom CMS and front-end experience to bring their stories to life.',
    imageUrl: '/video/the-counter-optimized.mp4',
    gridArea: 'fourth',
    link: 'https://thecounter.org/',
    images: [
      '/projects/athletics/first.jpg',
      '/projects/athletics/second.jpg',
      '/projects/athletics/third.jpg',
    ],
    featuredAsset: {
      type: 'video',
      url: '/projects/the-counter/1801556876.mp4',
    },
    assets: [
      // {
      //   type: 'video',
      //   url: '/projects/the-counter/1801556876.mp4',
      // },
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
];
