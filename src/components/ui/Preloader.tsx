import { motion } from 'framer-motion';
import { profile } from '@/data/portfolio';
import './Preloader.css';

const name = profile.name.toUpperCase();

/** Full-screen intro that wipes away to reveal the site. */
export default function Preloader() {
  return (
    <motion.div
      className="preloader"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="preloader__inner">
        <motion.span
          className="preloader__count"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          PORTFOLIO
        </motion.span>

        <h1 className="preloader__name">
          {name.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.3 + i * 0.04,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className="preloader__bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
}
