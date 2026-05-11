import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/portfolioData';
import {
  GitBranch, ExternalLink, ChevronDown, ChevronUp,
  CheckCircle2, Wrench, FlaskConical, BarChart2
} from 'lucide-react';

const badgeColorMap = {
  accent: 'bg-accent/10 border-accent/30 text-accent',
  cyan:   'bg-cyan-400/10 border-cyan-400/30 text-cyan-400',
  amber:  'bg-amber-400/10 border-amber-400/30 text-amber-400',
};

const typeBadge = {
  accent: 'bg-accent/15 text-accent',
  cyan:   'bg-cyan-400/15 text-cyan-400',
  amber:  'bg-amber-400/15 text-amber-400',
};

export default function Projects() {
  const ref = useScrollReveal();
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="section-label mb-3">03 / PROJECTS</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading">
            Real Projects,{' '}
            <span className="gradient-text">Real Bugs Found.</span>
          </h2>
          <p className="text-body mt-4 max-w-xl">
            Each project represents a complete test effort — from planning and execution to
            defect reporting and regression validation.
          </p>
        </div>

        {/* Project cards */}
        <div className="space-y-6">
          {projects.map((project, i) => {
            const isExpanded = expanded === project.id;
            const badgeClasses = badgeColorMap[project.badgeColor] || badgeColorMap.accent;
            const typeBadgeClasses = typeBadge[project.badgeColor] || typeBadge.accent;

            return (
              <article
                key={project.id}
                className={`reveal reveal-delay-${i + 1} card-hover rounded-2xl border border-border bg-card overflow-hidden`}
              >
                {/* Card header */}
                <div className="p-6 md:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-mono text-[10px] px-3 py-1 rounded-full border bg-accent/10 border-accent/30 text-accent">
                          {project.type}
                        </span>
                        <span className="font-mono text-[14px] text-muted">
                          {project.period}
                        </span>
                      </div>
                      <h3 className="text-2xl font-extrabold text-heading">{project.title}</h3>
                      <p className="text-body text-sm mt-0.5">{project.subtitle}</p>
                    </div>

                    {/* Metrics */}
                    <div className="flex gap-3 flex-shrink-0">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <div className="font-mono text-lg font-bold gradient-text">{m.value}</div>
                          <div className="text-[11px] text-muted leading-tight">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-body text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Testing types */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.testingTypes.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-accent/15 text-accent border border-accent/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Wrench size={13} className="text-muted" />
                    {project.techStack.map((tech) => (
                      <span key={tech} className="font-mono text-[11px] text-muted border border-border rounded px-2 py-0.5 bg-surface">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expand / collapse toggle */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setExpanded(isExpanded ? null : project.id)}
                      className="flex items-center gap-1.5 font-mono text-xs text-accent hover:text-accent-dim transition-colors"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp size={14} />
                          LESS DETAILS
                        </>
                      ) : (
                        <>
                          <ChevronDown size={14} />
                          MORE DETAILS
                        </>
                      )}
                    </button>

                    {project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-heading transition-colors ml-auto"
                      >
                        <GitBranch size={13} />
                        GITHUB
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Expanded detail panel */}
                {isExpanded && (
                  <div className="border-t border-border bg-surface/60 p-6 md:p-7 space-y-5">
                    {/* Problem + Solution */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <FlaskConical size={14} className="text-amber-400" />
                          <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">The Problem</span>
                        </div>
                        <p className="text-body text-sm leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 size={14} className="text-accent" />
                          <span className="font-mono text-xs text-accent tracking-widest uppercase">The Solution</span>
                        </div>
                        <p className="text-body text-sm leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    {/* Key contributions */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BarChart2 size={14} className="text-cyan-400" />
                        <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">Key Contributions</span>
                      </div>
                      <ul className="space-y-2">
                        {project.contributions.map((c, ci) => (
                          <li key={ci} className="flex gap-3 text-sm text-body">
                            <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
