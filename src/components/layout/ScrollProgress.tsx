import { motion, useScroll, useSpring } from 'framer-motion';
import './ScrollProgress.css';

/** Thin gradient bar at the top of the viewport reflecting scroll position. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}
