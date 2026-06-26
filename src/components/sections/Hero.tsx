import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile, socials, stats } from '@/data/portfolio';
import Icon from '@/components/ui/Icon';
import MagneticButton from '@/components/ui/MagneticButton';
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
      {profile.roles.map((role, i) => (
        <motion.span
          key={role}
          className="hero__role-item"
          initial={false}
          animate={{
            y: i === index ? 0 : 28,
            opacity: i === index ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {role}
        </motion.span>
      ))}
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
          <MagneticButton className="btn btn--ghost" onClick={() => go('contact')}>
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
