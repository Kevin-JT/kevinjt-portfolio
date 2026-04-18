import { useScrollReveal } from '../hooks/useScrollReveal';
import { CheckCircle2, Cpu, Globe, Zap, Target } from 'lucide-react';

const highlights = [
  { icon: CheckCircle2, label: '75+ Automated Scripts', desc: 'Selenium + Java + POM framework' },
  { icon: Zap,         label: 'Full Testing Lifecycle', desc: 'Manual, Automation, API & Performance' },
  { icon: Globe,       label: 'Cross-Browser Validated', desc: 'Chrome, Firefox, Edge' },
  { icon: Target,      label: 'Agile QA Mindset',       desc: 'SDLC / STLC in team environments' },
  { icon: Cpu,         label: 'API & Performance',       desc: 'Postman (REST) + JMeter load testing' },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal mb-16">
          <p className="section-label mb-3">01 / ABOUT ME</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading">
            Quality is not an act,<br />
            <span className="gradient-text">it's a habit.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — Summary */}
          <div className="space-y-5 reveal">
            <p className="text-body text-base leading-relaxed">
              I'm a Software Test Engineer who believes that catching bugs early is the most
              cost-effective way to build great software. Over the past year, I've worked across
              the complete testing lifecycle — from writing test cases on day one to shipping
              automation frameworks that run with every deployment.
            </p>
            <p className="text-body text-base leading-relaxed">
              My core strength is translating user requirements into precise, reproducible test
              scenarios. I don't just run tests — I design them to find the edge cases that matter
              before real users stumble across them.
            </p>
            <p className="text-body text-base leading-relaxed">
              I've worked with Selenium WebDriver + Java for UI automation, Postman for REST API
              testing, and JMeter for load validation. Currently, I'm deepening my expertise in
              Playwright to build faster, more stable automation frameworks.
            </p>

            {/* Terminal-style quick facts */}
            <div className="mt-6 p-5 rounded-xl bg-surface border border-border font-mono text-sm">
              <div className="text-muted mb-2 text-xs">~ kevin.json</div>
              <div className="space-y-1 text-xs">
                <div><span className="text-accent">"role"</span><span className="text-body">: </span><span className="text-heading">"Software Test Engineer"</span></div>
                <div><span className="text-accent">"focus"</span><span className="text-body">: </span><span className="text-heading">"QA Automation"</span></div>
                <div><span className="text-accent">"location"</span><span className="text-body">: </span><span className="text-heading">"Tamil Nadu, India"</span></div>
                <div><span className="text-accent">"experience"</span><span className="text-body">: </span><span className="text-heading">"3 Projects · 100+ Test Cases"</span></div>
                <div><span className="text-accent">"learning"</span><span className="text-body">: </span><span className="gradient-text">"Playwright"</span></div>
                <div><span className="text-accent">"openToWork"</span><span className="text-body">: </span><span className="text-green-400">true</span></div>
              </div>
            </div>
          </div>

          {/* Right — Highlights grid */}
          <div className="grid gap-4 reveal reveal-delay-2">
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                className="card-hover flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="mt-0.5 w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-heading text-sm font-semibold">{label}</div>
                  <div className="text-muted text-xs mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
