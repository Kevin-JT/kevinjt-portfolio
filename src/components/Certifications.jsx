import { useScrollReveal } from '../hooks/useScrollReveal';
import { certifications } from '../data/portfolioData';
import { ShieldCheck, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-14">
          <p className="section-label mb-3">05 / CERTIFICATIONS</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading">
            Credentials &amp;{' '}
            <span className="gradient-text">Training.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="reveal card-hover p-6 rounded-2xl bg-card border border-accent/20 glow-border relative overflow-hidden"
            >
              {/* Glow accent top-right */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 blur-2xl pointer-events-none"
                style={{ background: '#00E5A0' }}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <ShieldCheck size={24} className="text-accent" />
                </div>
                <span className="font-mono text-xs text-accent border border-accent/30 bg-accent/5 rounded-full px-3 py-1">
                  {cert.year}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-heading font-bold text-lg mb-1">{cert.title}</h3>
              <p className="text-muted text-sm font-mono mb-1">{cert.issuer}</p>
              <p className="text-muted text-xs mb-5">{cert.location}</p>

              {/* Skills covered */}
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-surface border border-border text-body"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Verified badge */}
              <div className="mt-5 flex items-center gap-2 text-xs text-accent font-mono">
                <ShieldCheck size={12} />
                VERIFIED CERTIFICATION
              </div>
            </div>
          ))}

          {/* Placeholder "more coming" card */}
          <div className="reveal card-hover p-6 rounded-2xl bg-card border border-dashed border-border flex flex-col items-center justify-center text-center min-h-[200px]">
            <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center mb-4">
              <ExternalLink size={20} className="text-muted" />
            </div>
            <p className="text-muted text-sm font-mono">More certifications</p>
            <p className="text-muted text-xs mt-1">in progress...</p>
            <div className="mt-3 flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[10px] text-accent">Playwright Certification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
