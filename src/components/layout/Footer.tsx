import { motion } from 'framer-motion';
import { profile, socials, navLinks } from '@/data/portfolio';
import Icon from '@/components/ui/Icon';
import './Footer.css';

export default function Footer() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <motion.div
          className="footer__cta glass"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="footer__cta-label">Have a project in mind?</p>
          <h2 className="footer__cta-title">
            Let&apos;s build something <span className="gradient-text">remarkable</span>.
          </h2>
          <a className="footer__cta-btn" href={`mailto:${profile.email}`}>
            <span>{profile.email}</span>
            <Icon name="arrowUpRight" size={18} />
          </a>
        </motion.div>

        <div className="footer__grid">
          <div className="footer__brand">
            <span className="nav__brand-mark">M</span>
            <div>
              <p className="footer__name">{profile.name}</p>
              <p className="footer__role">{profile.role}</p>
            </div>
          </div>

          <nav className="footer__links">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => go(l.id)}>
                {l.label}
              </button>
            ))}
          </nav>

          <div className="footer__socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
          <span>Designed &amp; built with React + TypeScript.</span>
        </div>
      </div>
    </footer>
  );
}
