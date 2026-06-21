'use client';
import Container from '@/shared/components/container';

import ContactCard from './contact-card';

import { contacts } from '../data';

export default function Contact() {
  return (
    <section id="kontak" className="py-28">
      <Container>
        <div className="text-center">
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-blue-600
            ">
            Kontak
          </span>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
            ">
            Mari Bekerja Sama
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              text-slate-600
            ">
            Saya terbuka untuk peluang kerja sebagai Frontend Developer maupun
            Full Stack Developer. Mari berdiskusi untuk membangun aplikasi
            digital yang modern dan bermanfaat.
          </p>
        </div>

        <div
          className="
            mt-14
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          ">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.title}
              title={contact.title}
              icon={contact.icon}
              href={contact.href}
              description={contact.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
