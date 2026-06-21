'use client';

import { motion } from 'framer-motion';

import { LucideIcon } from 'lucide-react';

interface Props {
  icon: LucideIcon;
  period: string;
  title: string;
  company: string;
  description: string;
}

export default function TimelineItem({
  icon: Icon,
  period,
  title,
  company,
  description,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="relative pl-14">
      {/* Timeline dot */}
      <div
        className="
          absolute
          left-0
          top-1
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-blue-600
          to-violet-600
          text-white
          shadow-lg
        ">
        <Icon size={20} />
      </div>

      <span
        className="
          text-sm
          font-medium
          text-blue-600
        ">
        {period}
      </span>

      <h3
        className="
          mt-2
          text-2xl
          font-bold
        ">
        {title}
      </h3>

      <p
        className="
          mt-1
          font-medium
          text-slate-700
        ">
        {company}
      </p>

      <p
        className="
          mt-3
          leading-relaxed
          text-slate-600
        ">
        {description}
      </p>
    </motion.div>
  );
}
