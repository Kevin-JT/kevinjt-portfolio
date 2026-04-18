import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { personalInfo } from '../data/portfolioData';
import { Mail, Linkedin, Github, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'kevinjt2004@gmail.com',
    href: 'mailto:kevinjt2004@gmail.com',
    color: 'text-accent',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/kevinjt2004',
    href: 'https://linkedin.com/in/kevinjt2004',
    color: 'text-accent',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/kevinjt2004',
    href: 'https://github.com/kevinjt2004',
    color: 'text-accent',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8531013918',
    href: 'tel:+918531013918',
    color: 'text-accent',
  },
];

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:kevinjt2004@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-surface/40 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="reveal mb-14 text-center">
          <p className="section-label mb-3">06 / CONTACT</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading">
            Let's Build{' '}
            <span className="gradient-text">Quality Together.</span>
          </h2>
          <p className="text-body mt-4 max-w-lg mx-auto">
            Open to entry-level and junior QA / Software Test Engineer roles. If you're building
            something that needs a quality-first tester, let's talk.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="status-dot" />
            <span className="font-mono text-xs text-accent tracking-widest">
              AVAILABLE FOR FULL-TIME / CONTRACT ROLES
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left — Contact Links */}
          <div className="reveal space-y-4">
            <h3 className="font-bold text-heading mb-5">Reach me at</h3>

            {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-hover group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center group-hover:border-accent/40 transition-colors">
                  <Icon size={18} className={color} />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-muted tracking-widest uppercase">
                    {label}
                  </div>
                  <div className="text-heading text-sm font-medium group-hover:text-accent transition-colors">
                    {value}
                  </div>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border mt-2">
              <MapPin size={16} className="text-muted flex-shrink-0" />
              <div>
                <div className="font-mono text-[10px] text-muted tracking-widest uppercase">Location</div>
                <div className="text-heading text-sm font-medium">Tamil Nadu, India</div>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="reveal reveal-delay-2">
            <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-card border border-border space-y-4">
              <h3 className="font-bold text-heading mb-4">Send a message</h3>

              <div>
                <label htmlFor="name" className="font-mono text-xs text-muted tracking-widest uppercase block mb-1.5">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="font-mono text-xs text-muted tracking-widest uppercase block mb-1.5">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-xs text-muted tracking-widest uppercase block mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-input resize-none"
                  placeholder="Hi Kevin, we'd love to chat about a QA opening..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={`btn-accent w-full flex items-center justify-center gap-2 ${sent ? 'opacity-80' : ''}`}
              >
                {sent ? (
                  <>
                    <CheckCircle2 size={16} />
                    MESSAGE SENT!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    SEND MESSAGE
                  </>
                )}
              </button>

              <p className="text-muted text-[11px] text-center font-mono">
                This will open your email client with a pre-filled message.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
