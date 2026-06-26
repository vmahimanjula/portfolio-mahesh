import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import './SectionHeading.css';

interface SectionHeadingProps {
  index: string;
  title: string;
  subtitle?: string;
}

/** Shared section header with an index tag, animated title and rule line. */
export default function SectionHeading({
  index,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <motion.span
        className="section-index"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {index}
      </motion.span>
      <AnimatedText as="h2" className="section-title" text={title} />
      {subtitle && (
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        className="section-rule"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
