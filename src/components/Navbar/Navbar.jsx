import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/portfolioData';
import Magnetic from '../ui/Magnetic';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 300) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.div className="navbar__progress" style={{ scaleX }} />

      <motion.nav
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar__island">
          <Magnetic>
            <a href="#home" className="navbar__logo">
              fouad<span className="navbar__logo-dot">.</span>
            </a>
          </Magnetic>

          <ul className="navbar__links">
            {navLinks.map(link => (
              <li key={link.href}>
                <Magnetic damping={15} stiffness={200}>
                  <a
                    href={link.href}
                    className={`navbar__link ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`}
                  >
                    {link.label}
                    {activeSection === link.href.slice(1) && (
                      <motion.span className="navbar__link-bg" layoutId="nav-bg" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
                    )}
                  </a>
                </Magnetic>
              </li>
            ))}
          </ul>

          <Magnetic>
            <a href="#contact" className="navbar__cta">
              Talk
            </a>
          </Magnetic>

          <button
            className="navbar__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <Magnetic>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </Magnetic>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="navbar__mobile-menu"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="navbar__mobile-link"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="navbar__mobile-num">0{i + 1}</span>
                  {link.label}
                </motion.a>
              ))}
              <a href="#contact" className="navbar__mobile-cta" onClick={() => setMobileOpen(false)}>
                Let's Talk
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
