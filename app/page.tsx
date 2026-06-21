import Navbar from '@/shared/components/navbar';

import Hero from '@/features/hero/components/hero';
import About from '@/features/about/components/about';
import Skills from '@/features/skills/components/skills';
import Projects from '@/features/projects/components/projects';
import Experience from '@/features/experience/components/experience';
import Contact from '@/features/contact/components/contact';
import Footer from '@/shared/components/footer';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
