import { Code2, Server, Database, Wrench } from 'lucide-react';

export const skills = [
  {
    title: 'Frontend',
    icon: Code2,

    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
    ],
  },

  {
    title: 'Backend',
    icon: Server,

    items: [
      'Node.js',
      'Express.js',
      'REST API',
      'Prisma ORM',
      'Next.js API Route',
    ],
  },

  {
    title: 'Database',
    icon: Database,

    items: ['PostgreSQL', 'MySQL'],
  },

  {
    title: 'Tools',
    icon: Wrench,

    items: ['Git', 'GitHub', 'Postman', 'Figma', 'Vercel'],
  },
];
