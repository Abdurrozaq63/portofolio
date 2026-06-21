'use client';

import Image from 'next/image';

import { ArrowUpRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

import { motion } from 'framer-motion';

import { Project } from '../types';

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white/70
        shadow-sm
        backdrop-blur-lg
        transition
        hover:shadow-xl
        hover:shadow-blue-100
      ">
      {/* Image */}
      <div
        className="
          relative
          h-60
          overflow-hidden
        ">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="
            object-cover
            transition
            duration-500
            hover:scale-105
          "
        />
      </div>

      {/* Content */}
      <div className="p-7">
        <h3
          className="
            text-2xl
            font-bold
          ">
          {project.title}
        </h3>

        <p
          className="
            mt-3
            text-slate-600
            leading-relaxed
          ">
          {project.description}
        </p>

        {/* Tech */}
        <div
          className="
            mt-5
            flex
            flex-wrap
            gap-2
          ">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                    rounded-full
                    bg-blue-50
                    px-3
                    py-1
                    text-sm
                    text-blue-600
                  ">
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul
          className="
            mt-6
            space-y-2
          ">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="
                    flex
                    items-center
                    gap-2
                    text-sm
                  ">
              <span className="text-green-500">✓</span>

              {feature}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div
          className="
            mt-8
            flex
            gap-4
          ">
          <a
            href={project.demo}
            target="_blank"
            className="
              flex
              items-center
              gap-2

              rounded-full

              bg-gradient-to-r
              from-blue-600
              to-violet-600

              px-5
              py-2.5

              text-white
            ">
            Demo
            <ArrowUpRight size={18} />
          </a>

          <a
            href={project.github}
            target="_blank"
            className="
              flex
              items-center
              gap-2

              rounded-full
              border

              px-5
              py-2.5
            ">
            <SiGithub size={18} />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
