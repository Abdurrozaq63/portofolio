'use client';
import Container from '@/shared/components/container';

import TimelineItem from './timeline-item';

import { experiences } from '../data';

export default function Experience() {
  return (
    <section id="pengalaman" className="py-28">
      <Container>
        {/* Header */}
        <div className="text-center">
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-blue-600
            ">
            Pengalaman Pengembangan
          </span>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
            ">
            Perjalanan Saya di Dunia Teknologi
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              text-slate-600
            ">
            Perjalanan belajar, pengembangan proyek, dan pengalaman dalam
            membangun aplikasi berbasis teknologi web modern.
          </p>
        </div>

        {/* Timeline */}
        <div
          className="
            relative
            mx-auto
            mt-16
            max-w-3xl
            space-y-14
          ">
          {/* Vertical line */}
          <div
            className="
              absolute
              left-5
              top-2
              h-full
              w-[2px]
              bg-gradient-to-b
              from-blue-500
              to-violet-500
            "
          />

          {experiences.map((experience) => (
            <TimelineItem
              key={experience.period}
              icon={experience.icon}
              period={experience.period}
              title={experience.title}
              company={experience.company}
              description={experience.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
