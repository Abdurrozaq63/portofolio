'use client';
import { ArrowRight } from 'lucide-react';

import Container from '@/shared/components/container';

import StatCard from './stat-card';

import { aboutData } from '../data';

export default function About() {
  return (
    <section
      id="tentang"
      className="
        py-28
      ">
      <Container>
        <div
          className="
            grid
            gap-10

            lg:grid-cols-2
          ">
          {/* Content */}
          <div>
            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-widest
                text-blue-600
              ">
              Tentang Saya
            </span>

            <h2
              className="
                mt-4
                text-4xl
                font-bold
                leading-tight
              ">
              Membangun Solusi Digital
              <br />
              <span
                className="
                  bg-gradient-to-r
                  from-blue-600
                  to-violet-600
                  bg-clip-text
                  text-transparent
                ">
                dengan Teknologi Modern
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-relaxed
                text-slate-600
              ">
              {aboutData.description}
            </p>

            <button
              className="
                mt-8

                flex
                items-center
                gap-2

                rounded-full
                border
                border-slate-300

                px-6
                py-3

                font-medium

                transition
                hover:border-blue-500
                hover:text-blue-600
              ">
              Lebih Lanjut Tentang Saya
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Statistics */}
          <div
            className="
              grid
              gap-6

              md:grid-cols-2
            ">
            {aboutData.stats.map((item) => (
              <StatCard
                key={item.title}
                icon={item.icon}
                value={item.value}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
