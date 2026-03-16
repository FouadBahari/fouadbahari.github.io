import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import './Hero.css';
import Magnetic from '../ui/Magnetic';

// Utility component to stagger text word-by-word
const SplitText = ({ children, className = "", delayOffset = 0 }) => {
  const words = children.split(' ');
  return (
    <motion.p
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.04, delayChildren: delayOffset } },
      }}
    >
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', paddingRight: '0.25em' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            variants={{
              hidden: { y: "100%", opacity: 0, rotate: 5 },
              visible: { y: "0%", opacity: 1, rotate: 0, transition: { type: "spring", damping: 15, stiffness: 100 } },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.p>
  );
};

// Utility component to stagger text character-by-character
const SplitChars = ({ children, className = "", outline = false, delayOffset = 0 }) => {
  const chars = children.split('');
  return (
    <motion.h1
      className={`hero__name ${outline ? 'hero__name--outline' : ''} ${className}`}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.05, delayChildren: delayOffset } },
      }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block' }}
          variants={{
            hidden: { y: 150, opacity: 0, scale: 0.8, rotateX: -90 },
            visible: { y: 0, opacity: 1, scale: 1, rotateX: 0, transition: { type: "spring", damping: 12, stiffness: 200 } },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const marqueeVariants = {
    animate: {
      x: [0, -2000],
      transition: { x: { repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" } },
    },
  };

  return (
    <section id="home" ref={sectionRef} className="hero">
      <div className="hero__glow" />

      {/* Marquee Background (Placed before content to ensure it stays in background) */}
      <motion.div 
        className="hero__marquee"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ delay: 0.5, duration: 2 }}
      >
        <motion.div className="hero__marquee-inner" variants={marqueeVariants} animate="animate">
          <span>FLUTTER DEVELOPER — MOBILE EXPERT — UI ARCHITECT — </span>
          <span>FLUTTER DEVELOPER — MOBILE EXPERT — UI ARCHITECT — </span>
          <span>FLUTTER DEVELOPER — MOBILE EXPERT — UI ARCHITECT — </span>
        </motion.div>
      </motion.div>

      <motion.div className="hero__content container" style={{ y: parallaxY, opacity }}>
        
        {/* Status badge */}
        <motion.div 
          className="hero__status" 
          initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        >
          <span className="hero__status-dot" />
          <span className="hero__status-text">Available for work · Open to relocation</span>
        </motion.div>

        {/* Massive Name - Character by Character */}
        <div className="hero__title-wrapper">
          <SplitChars delayOffset={0.3}>FOUAD</SplitChars>
          <SplitChars delayOffset={0.5} outline>BAHARI</SplitChars>
        </div>

        {/* Description & Actions */}
        <div className="hero__bottom">
          <SplitText className="hero__desc" delayOffset={1.0}>
            Crafting scalable architecture, fluid animations, and pixel-perfect interfaces. I build premium, high-performance mobile experiences for iOS and Android.
          </SplitText>

          <motion.div 
            className="hero__actions"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1, delayChildren: 1.5 } }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring" } } }}>
              <Magnetic>
                <a href="#contact" className="btn btn--primary">
                  Let's Talk <ChevronRight size={16} />
                </a>
              </Magnetic>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring" } } }}>
              <Magnetic>
                <a href="#projects" className="btn btn--outline">
                  Selected Works
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 1, type: "spring" }}
      >
        <span className="hero__scroll-text">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.div>
    </section>
  );
}
