import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export default function TextReveal({ children, className = '', delay = 0, once = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-60px' });

  // Split text into words then chars
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  return (
    <span ref={ref} className={`text-reveal ${className}`} style={{ display: 'inline' }}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char, ci) => (
            <motion.span
              key={`${wi}-${ci}`}
              style={{ display: 'inline-block' }}
              initial={{ opacity: 0, y: 30, rotateX: -40 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                delay: delay + (wi * word.length + ci) * 0.02,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
