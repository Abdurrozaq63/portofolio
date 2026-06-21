'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { ComponentType } from 'react';

interface Props {
  title: string;
  icon: ComponentType<{ className?: string }>;
  href: string;
  description: string;
}

export default function ContactCard({
  title,
  icon: Icon,
  href,
  description,
}: Props) {
  return (
    <motion.a
      href={href}
      target="_blank"
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
      whileHover={{
        y: -8,
      }}
      className="
        group
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
      <div
        className="
          mb-5
          inline-flex
          rounded-2xl
          bg-gradient-to-br
          from-blue-500/10
          to-violet-500/10
          p-4
          text-blue-600
          transition
          group-hover:scale-110
        ">
        {/* <Icon size={30} /> */}
        <div>
          <Icon className="w-6 h-6" />
        </div>
      </div>

      <h3 className="text-xl font-bold">{title}</h3>

      <p
        className="
          mt-2
          text-sm
          text-slate-600
        ">
        {description}
      </p>
    </motion.a>
  );
}
