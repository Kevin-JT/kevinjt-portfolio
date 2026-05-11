import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-body relative overflow-x-hidden">
      {/* Sticky nav */}
      <Navbar />

      <main>
        {/* 01 — Hero */}
        <Hero />

        {/* 02 — About */}
        <About />

        {/* 03 — Skills */}
        <Skills />

        {/* 04 — Projects */}
        <Projects />

        {/* 05 — Experience Timeline */}
        <Timeline />

        {/* 06 — Certifications */}
        <Certifications />

        {/* 07 — Contact */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
