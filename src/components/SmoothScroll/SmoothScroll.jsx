import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Support smooth scroll navigation clicks
    const onClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) lenis.scrollTo(target, { offset: -80, duration: 1.5 });
      }
    };
    document.addEventListener('click', onClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', onClick);
    };
  }, []);

  return children;
}
