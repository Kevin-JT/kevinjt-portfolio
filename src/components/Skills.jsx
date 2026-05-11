import { useScrollReveal } from '../hooks/useScrollReveal';
import { skillGroups, learningItems } from '../data/portfolioData';
import { Bot, Code2, Zap, Search, Wrench, Layers, Rocket, BookOpen } from 'lucide-react';

const iconMap = {
  bot: Bot,
  code: Code2,
  zap: Zap,
  search: Search,
  wrench: Wrench,
  layers: Layers,
};

const colorMap = {
  accent:  { badge: 'border-accent/30 bg-accent/5 text-accent hover:bg-accent/15',  dot: 'bg-accent'  },
  cyan:    { badge: 'border-cyan/30 bg-cyan/5 text-cyan hover:bg-cyan/15', dot: 'bg-cyan' },
  amber:   { badge: 'border-amber/30 bg-amber/5 text-amber hover:bg-amber/15', dot: 'bg-amber' },
  purple:  { badge: 'border-purple-400/30 bg-purple-400/5 text-purple-400 hover:bg-purple-400/15', dot: 'bg-purple-400' },
  green:   { badge: 'border-green-400/30 bg-green-400/5 text-green-400 hover:bg-green-400/15', dot: 'bg-green-400' },
  blue:    { badge: 'border-blue-400/30 bg-blue-400/5 text-blue-400 hover:bg-blue-400/15', dot: 'bg-blue-400' },
};

const iconColorMap = {
  accent: 'text-accent bg-accent/10 border-accent/20',
  cyan: 'text-cyan bg-cyan/10 border-cyan/20',
  amber: 'text-amber bg-amber/10 border-amber/20',
  purple: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  green: 'text-green-400 bg-green-400/10 border-green-400/20',
  blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
};

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 bg-surface/40 relative" ref={ref}>
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="section-label mb-3">02 / SKILLS</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading">
            Tech Stack &amp;{' '}
            <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-body mt-4 max-w-xl">
            My toolkit for finding, documenting, and preventing defects — from writing a single
            test case to building a full automation framework.
          </p>
        </div>

        {/* Skill groups grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {skillGroups.map((group, gi) => {
            const Icon = iconMap[group.icon] || Code2;
            const colors = colorMap[group.color] || colorMap.accent;
            const iconColors = iconColorMap[group.color] || iconColorMap.accent;

            return (
              <div
                key={group.category}
                className={`reveal reveal-delay-${(gi % 3) + 1} card-hover p-5 rounded-2xl bg-card border border-border`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${iconColors}`}>
                    <Icon size={17} />
                  </div>
                  <h3 className="font-semibold text-heading text-sm">{group.category}</h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-badge ${colors.badge}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Currently Learning */}
        <div className="reveal">
          <div className="p-6 rounded-2xl border border-dashed border-accent/40 bg-accent/3">
            <div className="flex items-center gap-3 mb-5">
              <Rocket size={18} className="text-accent" />
              <h3 className="font-mono text-sm text-accent tracking-widest uppercase">
                Currently Learning
              </h3>
              <div className="flex-1 h-px bg-accent/20" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {learningItems.map((item) => (
                <div
                  key={item.tool}
                  className="flex gap-4 items-start p-4 rounded-xl bg-card border border-border"
                >
                  <div className="mt-1">
                    <BookOpen size={16} className="text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-heading text-sm">{item.tool}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono border border-accent/30 text-accent bg-accent/5">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-muted text-xs leading-relaxed">{item.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
