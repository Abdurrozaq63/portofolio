'use client';

import { useState } from 'react';

import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';

import { Mail, Menu, X } from 'lucide-react';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';

import Container from './container';

import { profile } from '@/features/hero/data';

const menus = [
  {
    title: 'Tentang',
    href: '#tentang',
  },

  {
    title: 'Skill',
    href: '#skill',
  },

  {
    title: 'Project',
    href: '#project',
  },

  {
    title: 'Pengalaman',
    href: '#pengalaman',
  },

  {
    title: 'Kontak',
    href: '#kontak',
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{
        y: -60,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        fixed 
        top-4 
        left-0 
        z-50 
        w-full
      ">
      <Container>
        <nav
          className="
            flex 
            items-center 
            justify-between

            rounded-full

            border border-white/50

            bg-white/70

            px-6 py-4

            shadow-lg
            shadow-blue-100/50

            backdrop-blur-xl
          ">
          {/* Logo */}
          <Link
            href="/"
            className="
              text-2xl 
              font-bold
              tracking-tight
            ">
            Rozaq
            <span className="text-blue-600">.</span>
          </Link>

          {/* Desktop Menu */}
          <ul
            className="
              hidden
              items-center
              gap-8

              text-sm
              font-medium

              lg:flex
            ">
            {menus.map((menu) => (
              <li key={menu.title}>
                <a
                  href={menu.href}
                  className="
                      text-slate-600
                      transition

                      hover:text-blue-600
                    ">
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Right */}
          <div
            className="
              hidden
              items-center
              gap-4

              lg:flex
            ">
            <SocialIcon href={profile.socials.github}>
              <SiGithub size={18} />
            </SocialIcon>

            <SocialIcon href={profile.socials.linkedin}>
              <BsLinkedin size={18} />
            </SocialIcon>

            <SocialIcon href={profile.socials.instagram}>
              <SiInstagram size={18} />
            </SocialIcon>

            <a
              href={profile.cv}
              className="
                rounded-full

                bg-gradient-to-r
                from-blue-600
                to-violet-600

                px-5 py-2.5

                text-sm
                font-medium
                text-white

                shadow-md

                transition

                hover:scale-105
              ">
              Download CV
            </a>
          </div>

          {/* Mobile Button */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="
                mt-3

                rounded-3xl

                border

                bg-white/90

                p-6

                backdrop-blur-xl

                lg:hidden
              ">
              <div
                className="
                  flex
                  flex-col
                  gap-5
                ">
                {menus.map((menu) => (
                  <a
                    key={menu.title}
                    href={menu.href}
                    onClick={() => setOpen(false)}>
                    {menu.title}
                  </a>
                ))}

                <hr />

                <div className="flex gap-4">
                  <SocialIcon href={profile.socials.github}>
                    <SiGithub size={18} />
                  </SocialIcon>

                  <SocialIcon href={profile.socials.linkedin}>
                    <BsLinkedin size={18} />
                  </SocialIcon>

                  <SocialIcon href={profile.socials.instagram}>
                    <SiInstagram size={18} />
                  </SocialIcon>

                  <SocialIcon href={profile.socials.email}>
                    <Mail size={18} />
                  </SocialIcon>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
}

interface SocialIconProps {
  href: string;
  children: React.ReactNode;
}

function SocialIcon({ href, children }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="
        rounded-full

        border

        p-2.5

        text-slate-700

        transition

        hover:-translate-y-1
        hover:border-blue-500
        hover:text-blue-600
      ">
      {children}
    </a>
  );
}
