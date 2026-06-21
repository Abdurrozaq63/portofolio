import { ArrowRight, Mail } from 'lucide-react';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';

import Link from 'next/link';

import Container from '@/shared/components/container';

import HeroImage from './hero-image';

import { profile } from '../data';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32">
      {/* Background decoration */}
      <div
        className="
        absolute
        left-20 top-20
        h-40 w-40
        rounded-full
        bg-blue-400/20
        blur-3xl
      "
      />

      <Container>
        <div
          className="
            grid
            min-h-[85vh]
            items-center
            gap-12
            lg:grid-cols-2
          ">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            {profile.available && (
              <div
                className="
                  mb-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  bg-white/60
                  px-4
                  py-2
                  text-sm
                  backdrop-blur
                ">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Tersedia untuk peluang kerja
              </div>
            )}

            <h1
              className="
              text-5xl
              font-black
              leading-tight
              md:text-7xl
            ">
              Muhammad
              <br />
              Abdul{' '}
              <span
                className="
                bg-gradient-to-r
                from-blue-600
                to-violet-600
                bg-clip-text
                text-transparent
              ">
                Rozaq
              </span>
            </h1>

            <h2
              className="
              mt-5
              text-2xl
              font-bold
              text-blue-600
            ">
              {profile.role}
            </h2>

            <p
              className="
              mt-5
              max-w-xl
              text-lg
              text-slate-600
            ">
              {profile.description}
            </p>

            {/* Tech Stack */}
            <div
              className="
              mt-8
              flex
              flex-wrap
              gap-3
            ">
              {profile.techStack.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    bg-white/70
                    px-4 py-2
                    text-sm
                    shadow-sm
                  ">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div
              className="
              mt-8
              flex
              flex-wrap
              gap-4
            ">
              <a
                href="#project"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  to-violet-600
                  px-6 py-3
                  text-white
                  transition
                  hover:scale-105
                ">
                Lihat Project
                <ArrowRight size={18} />
              </a>

              <a
                href="#kontak"
                className="
                  rounded-full
                  border
                  px-6 py-3
                  transition
                  hover:border-blue-600
                  hover:text-blue-600
                ">
                Hubungi Saya
              </a>
            </div>

            {/* Social */}
            <div
              className="
              mt-10
              flex
              items-center
              gap-4
            ">
              <span className="text-slate-500">Temukan saya di</span>

              <Link href={profile.socials.github}>
                <SiGithub size={20} />
              </Link>

              <Link href={profile.socials.linkedin}>
                <BsLinkedin size={20} />
              </Link>

              <Link href={profile.socials.instagram}>
                <SiInstagram size={20} />
              </Link>

              <Link href={profile.socials.email}>
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <HeroImage />
          </div>
        </div>
      </Container>
    </section>
  );
}
