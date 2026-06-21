import { Project } from './types';

export const projects: Project[] = [
  {
    title: 'TeamOra',

    description:
      'Aplikasi manajemen proyek berbasis multi-tenant yang membantu tim dalam mengelola proyek, tugas, kolaborasi, dan komunikasi secara efisien.',

    image: '/images/projects/teamora.PNG',

    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'NextAuth',
    ],

    features: [
      'Multi Tenant Workspace',
      'Role & Permission Management',
      'Task Management',
      'File Upload',
      'Diskusi Project',
      'Activity History',
    ],

    github: 'https://github.com/abdurrozaq63/teamora',

    demo: 'https://teamora-orcin.vercel.app/',
  },

  {
    title: 'Kosin',

    description:
      'Sistem rekomendasi berbasis metode MFEP yang membantu mahasiswa menemukan kos sesuai preferensi seperti harga, fasilitas, lokasi, dan aturan kos.',

    image: '/images/projects/kos.png',

    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'MFEP',
    ],

    features: [
      'Perhitungan MFEP',
      'Manajemen Data Kos',
      'Pencarian dan Filter',
      'Sistem Rekomendasi',
      'Dashboard Admin',
    ],

    github: 'https://github.com/Abdurrozaq63/kosin',

    demo: 'https://kosinaja.vercel.app',
  },
];
