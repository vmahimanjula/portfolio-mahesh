import { motion, type Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  once?: boolean;
}

const container: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: 0.03, delayChildren: stagger },
  }),
};

const word: Variants = {
  hidden: { y: '110%', opacity: 0, rotateX: -40 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * Reveals text word-by-word with a vertical "curtain" motion.
 * Animates when scrolled into view.
 */
export default function AnimatedText({
  text,
  className,
  delay = 0,
  as = 'span',
  once = true,
}: AnimatedTextProps) {
  const MotionTag = motion[as];
  const words = text.split(' ');

  return (
    <MotionTag
      className={className}
      variants={container}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
      style={{ display: 'inline-block', perspective: 800 }}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top' }}
        >
          <motion.span variants={word} style={{ display: 'inline-block' }}>
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
