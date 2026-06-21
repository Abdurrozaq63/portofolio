import Container from '@/shared/components/container';

import ProjectCard from './project-card';

import { projects } from '../data';

export default function Projects() {
  return (
    <section id="project" className="py-28">
      <Container>
        <div className="text-center">
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-blue-600
            ">
            Project Unggulan
          </span>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
            ">
            Hasil Karya yang Saya Bangun
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              text-slate-600
            ">
            Beberapa aplikasi yang saya kembangkan menggunakan teknologi modern
            dari tahap perancangan hingga deployment.
          </p>
        </div>

        <div
          className="
            mt-14
            grid
            gap-8
            lg:grid-cols-2
          ">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
