import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './Cursor.css';

/**
 * Custom aurora cursor: a soft glowing dot that trails the pointer
 * and expands when hovering interactive elements.
 */
export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovering, setHovering] = useState(false);

  const springConfig = { damping: 28, stiffness: 380, mass: 0.4 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(
        Boolean(target.closest('a, button, [data-hover]'))
      );
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="cursor-ring"
        style={{ x, y }}
        animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 0.6 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      <motion.div
        className="cursor-dot"
        style={{ x: cursorX, y: cursorY }}
        animate={{ scale: hovering ? 0 : 1 }}
      />
    </>
  );
}
