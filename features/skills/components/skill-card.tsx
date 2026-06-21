'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Props {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export default function SkillCard({ title, icon: Icon, items }: Props) {
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
        backdrop-blur-lg
        shadow-sm
        transition
        hover:shadow-xl
        hover:shadow-blue-100
      ">
      {/* Icon */}
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

      {/* Title */}
      <h3
        className="
          text-2xl
          font-bold
          text-slate-900
        ">
        {title}
      </h3>

      {/* Skill List */}
      <div
        className="
          mt-5
          flex
          flex-wrap
          gap-3
        ">
        {items.map((item) => (
          <span
            key={item}
            className="
                rounded-full
                border
                border-slate-200
                bg-white
                px-4
                py-2
                text-sm
                text-slate-700
                shadow-sm
                transition
                hover:border-blue-500
                hover:text-blue-600
              ">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
