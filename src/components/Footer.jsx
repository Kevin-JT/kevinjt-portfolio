import { Bug, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
              <Bug size={16} className="text-accent" />
            </div>
            <div>
              <div className="font-mono text-sm font-bold text-heading">Kevin J T</div>
              <div className="font-mono text-xs text-muted">Software Test Engineer</div>
            </div>
          </div>

          {/* Center — tagline */}
          <p className="font-mono text-xs text-muted text-center">
            © {year} Kevin J T · Built with React &amp; Tailwind CSS
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-muted hover:text-accent transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
