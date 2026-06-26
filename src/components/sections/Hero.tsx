import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile, socials, stats } from '@/data/portfolio';
import Icon from '@/components/ui/Icon';
import MagneticButton from '@/components/ui/MagneticButton';
import profilePhoto from '@/assets/profile-cutout.webp';
import './Hero.css';

/** Rotating role text under the name. */
function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % profile.roles.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="hero__role-rotator">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[index]}
          className="hero__role-item"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: d, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
        <motion.span
          className="hero__badge"
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          animate="visible"
        >
          <span className="hero__badge-dot" />
          Available for opportunities · {profile.location}
        </motion.span>

        <h1 className="hero__title">
          <motion.span
            className="hero__hi"
            variants={fadeUp}
            custom={0.35}
            initial="hidden"
            animate="visible"
          >
            Hi, I&apos;m
          </motion.span>
          <motion.span
            className="hero__name gradient-text"
            variants={fadeUp}
            custom={0.5}
            initial="hidden"
            animate="visible"
          >
            {profile.name}
          </motion.span>
        </h1>

        <motion.div
          className="hero__role"
          variants={fadeUp}
          custom={0.7}
          initial="hidden"
          animate="visible"
        >
          <RoleRotator />
        </motion.div>

        <motion.p
          className="hero__tagline"
          variants={fadeUp}
          custom={0.85}
          initial="hidden"
          animate="visible"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="hero__actions"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="visible"
        >
          <MagneticButton className="btn btn--primary" onClick={() => go('projects')}>
            View my work <Icon name="arrow" size={18} />
          </MagneticButton>
          <MagneticButton
            className="btn btn--ghost"
            href={profile.resume}
            download="Manjula_V_Mahesh_Resume.pdf"
          >
            Download CV <Icon name="download" size={18} />
          </MagneticButton>
          <MagneticButton className="btn btn--text" onClick={() => go('contact')}>
            Get in touch
          </MagneticButton>
        </motion.div>

        <motion.div
          className="hero__socials"
          variants={fadeUp}
          custom={1.15}
          initial="hidden"
          animate="visible"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name={s.icon} size={20} />
            </a>
          ))}
        </motion.div>

        <motion.div
          className="hero__stats"
          variants={fadeUp}
          custom={1.3}
          initial="hidden"
          animate="visible"
        >
          {stats.map((s) => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-value gradient-text">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
        </div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="hero__portrait-glow"
            animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="hero__portrait-ring">
            <div className="hero__portrait-frame">
              <img src={profilePhoto} alt={profile.name} loading="eager" />
              <span className="hero__portrait-fade" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="hero__scroll"
        onClick={() => go('about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <span>Scroll</span>
        <span className="hero__scroll-line" />
      </motion.button>
    </section>
  );
}
