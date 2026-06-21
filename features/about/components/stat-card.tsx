'use client';

import { motion } from 'framer-motion';

import { LucideIcon } from 'lucide-react';

interface Props {
  icon: LucideIcon;
  value: string;
  title: string;
  description: string;
}

export default function StatCard({
  icon: Icon,
  value,
  title,
  description,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        rounded-3xl
        border
        border-slate-200

        bg-white/70
        p-6

        shadow-sm
        backdrop-blur-lg

        transition-shadow
        hover:shadow-xl
        hover:shadow-blue-100
      ">
      <div
        className="
          mb-5
          inline-flex
          rounded-2xl
          bg-gradient-to-br
          from-blue-500/10
          to-violet-500/10
          p-3
          text-blue-600
        ">
        <Icon size={28} />
      </div>

      <h3
        className="
        text-3xl
        font-bold
        text-slate-900
      ">
        {value}
      </h3>

      <p
        className="
        mt-2
        font-semibold
      ">
        {title}
      </p>

      <p
        className="
        text-sm
        text-slate-500
      ">
        {description}
      </p>
    </motion.div>
  );
}
