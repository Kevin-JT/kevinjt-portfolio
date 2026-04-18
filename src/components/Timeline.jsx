import { useScrollReveal } from '../hooks/useScrollReveal';
import { timeline } from '../data/portfolioData';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const typeConfig = {
  certification: {
    Icon: Award,
    color: 'text-accent',
    bg: 'bg-accent/10 border-accent/30',
    label: 'CERTIFICATION',
    labelColor: 'text-accent',
    dotColor: 'bg-accent shadow-[0_0_10px_rgba(0,229,160,0.6)]',
  },
  project: {
    Icon: Briefcase,
    color: 'text-accent',
    bg: 'bg-accent/10 border-accent/30',
    label: 'PROJECT',
    labelColor: 'text-accent',
    dotColor: 'bg-accent shadow-[0_0_10px_rgba(0,229,160,0.6)]',
  },
  education: {
    Icon: GraduationCap,
    color: 'text-accent',
    bg: 'bg-accent/10 border-accent/30',
    label: 'EDUCATION',
    labelColor: 'text-accent',
    dotColor: 'bg-accent shadow-[0_0_10px_rgba(34,211,238,0.6)]',
  },
};

export default function Timeline() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-24 bg-surface/40 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="section-label mb-3">04 / EXPERIENCE</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading">
            The Journey{' '}
            <span className="gradient-text">So Far.</span>
          </h2>
          <p className="text-body mt-4 max-w-lg">
            A structured timeline of projects, certifications, and milestones that built the
            tester I am today.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-2 bottom-2 w-0.5"
            style={{ background: 'linear-gradient(to bottom, #00E5A0 0%, #22D3EE 50%, transparent 100%)' }}
          />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const cfg = typeConfig[item.type] || typeConfig.project;
              const { Icon } = cfg;

              return (
                <div
                  key={i}
                  className={`reveal reveal-delay-${(i % 5) + 1} relative flex gap-6 pl-2`}
                >
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 w-8 flex justify-center pt-1">
                    <div className={`w-4 h-4 rounded-full border-1 border-bg ${cfg.dotColor}`} />
                  </div>

                  {/* Card */}
                  <div className="card-hover flex-1 p-5 rounded-xl bg-card border border-border mb-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`w-6 h-6 rounded-md border ${cfg.bg} flex items-center justify-center`}>
                            <Icon size={13} className={cfg.color} />
                          </div>
                          <span className={`font-mono text-[10px] tracking-widest uppercase ${cfg.labelColor}`}>
                            {cfg.label}
                          </span>
                        </div>
                        <h3 className="font-bold text-heading text-base">{item.title}</h3>
                        <p className="text-muted text-xs mt-0.5 font-mono">{item.org}</p>
                      </div>
                      <div className="font-mono text-xs text-muted border border-border rounded px-2 py-1 bg-surface">
                        {item.year}
                      </div>
                    </div>

                    <p className="text-body text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
