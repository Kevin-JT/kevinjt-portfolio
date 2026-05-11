import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const TAGLINE = personalInfo.tagline;

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(TAGLINE.slice(0, i + 1));
      i++;
      if (i >= TAGLINE.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, 55);
    return () => clearInterval(timer);
  }, []);

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center dot-grid overflow-hidden">
      {/* Gradient blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00E5A0, transparent)' }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full opacity-[0.05] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #22D3EE, transparent)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 animate-fade-in"
          style={{ animationFillMode: 'forwards' }}
        >
          <div className="status-dot" />
          <span className="font-mono text-xs text-accent tracking-widest">
            OPEN TO WORK · QA / SOFTWARE TEST ENGINEER
          </span>
        </div>

        {/* Name */}
        <div
          className="mb-4 animate-fade-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards', opacity: 0 }}
        >
          <span className="font-mono text-body text-sm tracking-[0.25em] uppercase">
            &lt; Hello, I'm &gt;
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-heading mt-1 leading-tight">
            {personalInfo.name}
          </h1>
        </div>

        {/* Typewriter tagline */}
        <div
          className="mb-6 animate-fade-up"
          style={{ animationDelay: '0.25s', animationFillMode: 'forwards', opacity: 0 }}
        >
          <h2
            className={`text-2xl md:text-4xl font-bold gradient-text font-mono ${!done ? 'cursor' : ''}`}
          >
            {displayed}
          </h2>
        </div>

        {/* Subtitle */}
        <p
          className="max-w-2xl text-body text-base md:text-lg leading-relaxed mb-8 animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards', opacity: 0 }}
        >
          {personalInfo.subtitle}
        </p>

        {/* Location */}
        <div
          className="flex items-center gap-2 mb-10 animate-fade-up"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards', opacity: 0 }}
        >
          <MapPin size={16} strokewidth={2.5} className="text-accent" />
          <span className="font-mono text-heading text-sm tracking-widest font-semibold">
            {personalInfo.location}
          </span>
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-4 mb-16 animate-fade-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards', opacity: 0 }}
        >
          <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            <button className="btn-accent flex items-center gap-2">
              <CheckCircle2 size={16} />
              VIEW PROJECTS
            </button>
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            <button className="btn-outline flex items-center gap-2">
              <Mail size={16} />
              CONTACT ME
            </button>
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fade-up"
          style={{ animationDelay: '0.75s', animationFillMode: 'forwards', opacity: 0 }}
        >
          {personalInfo.stats.map((stat) => (
            <div
              key={stat.label}
              className="card-hover p-4 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-center"
            >
              <div className="text-2xl md:text-3xl font-extrabold gradient-text font-mono">
                {stat.value}
              </div>
              <div className="text-xs text-muted mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div
          className="flex items-center gap-6 animate-fade-up"
          style={{ animationDelay: '0.85s', animationFillMode: 'forwards', opacity: 0 }}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} strokeWidth={2.5} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} strokeWidth={2.5} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={24} strokeWidth={2.5}/>
          </a>
          <div className="h-px w-16 bg-border" />
          <span className="font-mono text-xs text-muted tracking-widest">
            kevinjt2004@gmail.com
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-accent transition-colors group"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">SCROLL</span>
        <ArrowDown
          size={16}
          className="animate-bounce group-hover:text-accent"
        />
      </button>
    </section>
  );
}
