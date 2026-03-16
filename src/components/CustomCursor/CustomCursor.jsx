import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 300, mass: 0.5 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300, mass: 0.5 });
  const glowRef = useRef(null);
  const isHovering = useRef(false);
  const dotRef = useRef(null);

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window) return;

    const onMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onEnter = () => {
      if (dotRef.current) dotRef.current.classList.add('cursor--hovering');
      if (glowRef.current) glowRef.current.classList.add('cursor-glow--hovering');
    };

    const onLeave = () => {
      if (dotRef.current) dotRef.current.classList.remove('cursor--hovering');
      if (glowRef.current) glowRef.current.classList.remove('cursor-glow--hovering');
    };

    window.addEventListener('mousemove', onMove, { passive: true });

    const interactives = document.querySelectorAll('a, button, .glass-card, .btn, [data-magnetic]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    // Re-observe on DOM changes
    const observer = new MutationObserver(() => {
      const newInteractives = document.querySelectorAll('a, button, .glass-card, .btn, [data-magnetic]');
      newInteractives.forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [cursorX, cursorY]);

  // Hide on mobile
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      <motion.div
        ref={dotRef}
        className="cursor-dot"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        ref={glowRef}
        className="cursor-glow"
        style={{ x: springX, y: springY }}
      />
    </>
  );
}
