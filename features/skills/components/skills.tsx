'use client';
import Container from '@/shared/components/container';

import SkillCard from './skill-card';

import { skills } from '../data';

export default function Skills() {
  return (
    <section id="skill" className="py-28">
      <Container>
        {/* Header */}
        <div
          className="
            text-center
          ">
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-blue-600
            ">
            Skill & Teknologi
          </span>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
            ">
            Teknologi yang Saya Gunakan
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              text-slate-600
            ">
            Kumpulan teknologi dan tools yang saya gunakan dalam membangun
            aplikasi web modern yang responsif, scalable, dan mudah
            dikembangkan.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-14
            grid
            gap-6

            md:grid-cols-2
          ">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              icon={skill.icon}
              items={skill.items}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
