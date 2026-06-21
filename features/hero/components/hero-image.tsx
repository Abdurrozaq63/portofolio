'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroImage() {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
      className="relative mx-auto w-full max-w-md">
      {/* Glow */}
      <div
        className="
          absolute
          -inset-5
          rounded-[3rem]
          bg-gradient-to-r
          from-blue-400/30
          to-violet-500/30
          blur-3xl
        "
      />

      {/* Border */}
      <div
        className="
          relative
          rotate-3
          rounded-[2.5rem]
          bg-gradient-to-br
          from-blue-500
          to-violet-500
          p-1
          shadow-2xl
        ">
        <div
          className="
            overflow-hidden
            rounded-[2.3rem]
            bg-white
          ">
          <Image
            src="/images/profile.png"
            alt="Muhammad Abdul Rozaq"
            width={500}
            height={650}
            className="
              h-auto
              w-full
              object-cover
              transition
              duration-500
              hover:scale-105
            "
          />
        </div>
      </div>
    </motion.div>
  );
}
