import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
}

/**
 * A button/link that is gently pulled toward the cursor when hovered.
 */
export default function MagneticButton({
  children,
  href,
  onClick,
  className,
  download,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const inner = <span className="magnetic-inner">{children}</span>;

  return (
    <motion.div
      ref={ref}
      className="magnetic-wrap"
      style={{ x: sx, y: sy, display: 'inline-block' }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {href ? (
        <a
          className={className}
          href={href}
          onClick={onClick}
          download={download}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {inner}
        </a>
      ) : (
        <button className={className} onClick={onClick}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}
