import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, profile } from '@/data/portfolio';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import './Navbar.css';

const ids = navLinks.map((l) => l.id);

export default function Navbar() {
  const active = useScrollSpy(ids);
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <motion.header
      className="nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <div className="nav__inner container">
        <button className="nav__brand" onClick={() => go('home')}>
          <span className="nav__brand-mark">M</span>
          <span className="nav__brand-text">
            {profile.firstName}
            <span className="gradient-text">.dev</span>
          </span>
        </button>

        <nav className="nav__links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav__link ${active === link.id ? 'is-active' : ''}`}
              onClick={() => go(link.id)}
            >
              {link.label}
              {active === link.id && (
                <motion.span className="nav__dot" layoutId="nav-dot" />
              )}
            </button>
          ))}
        </nav>

        <a className="nav__cta" href={`mailto:${profile.email}`}>
          Let&apos;s talk
        </a>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="nav__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`nav__mobile-link ${active === link.id ? 'is-active' : ''}`}
                onClick={() => go(link.id)}
              >
                {link.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
