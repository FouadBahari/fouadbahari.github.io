import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, animate, useMotionValue } from 'framer-motion';
import { Globe } from 'lucide-react';
import { personalInfo, education, languages } from '../../data/portfolioData';
import './About.css';

function AnimatedCounter({ target, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => Math.round(v) + suffix);

  if (isInView) {
    animate(count, parseInt(target), { duration: 2, ease: [0.16, 1, 0.3, 1] });
  }

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// Utility for word-by-word reveal
const SplitText = ({ children, className = "", style = {} }) => {
  const words = typeof children === 'string' ? children.split(' ') : [];
  return (
    <motion.p className={className} style={style} variants={{ show: { transition: { staggerChildren: 0.03 } } }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', paddingRight: '0.25em' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            variants={{
              hidden: { y: "100%", opacity: 0, rotateX: -45 },
              show: { y: "0%", opacity: 1, rotateX: 0, transition: { type: "spring", damping: 15, stiffness: 100 } },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.p>
  );
};

// Utility for character-by-character reveal
const SplitChars = ({ children, className = "", delayOffset = 0 }) => {
  const chars = typeof children === 'string' ? children.split('') : [];
  return (
    <motion.span
      className={className}
      variants={{ show: { transition: { staggerChildren: 0.04, delayChildren: delayOffset } } }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block' }}
          variants={{
            hidden: { opacity: 0, scale: 0.5, y: 50 },
            show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 200 } },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 50, rotateY: -15 },
  show: { opacity: 1, x: 0, rotateY: 0, transition: { type: 'spring', damping: 20, stiffness: 100 } }
};

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="about" ref={containerRef}>
      <motion.div 
        className="container about__container"
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <div className="about__top">
          
          <motion.div className="about__title" style={{ y: y1 }} variants={containerVariants}>
            <SplitChars delayOffset={0}>I BUILD MOBILE</SplitChars><br />
            <span className="about__title-accent">
              <SplitChars delayOffset={0.5}>EXPERIENCES</SplitChars>
            </span><br />
            <SplitChars delayOffset={1.0}>THAT SCALE</SplitChars>
          </motion.div>
          
          <motion.div 
            className="about__content-right"
            style={{ y: y2 }}
            variants={containerVariants}
          >
            <SplitText className="about__bio">
              {personalInfo.summary}
            </SplitText>

            <motion.div className="about__stats-minimal" variants={containerVariants}>
              {personalInfo.stats.map((stat, i) => (
                <motion.div className="about__stat-minimal" key={i} variants={itemVariants}>
                  <div className="about__stat-number">
                    <AnimatedCounter target={stat.value.replace('+', '')} suffix="+" />
                  </div>
                  <div className="about__stat-text">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="about__edu-minimal" variants={itemVariants}>
              <h3 className="about__section-label">Education</h3>
              <div className="about__edu-item">
                <p className="about__edu-degree">{education.degree}</p>
                <p className="about__edu-school">{education.school} — {education.year}</p>
              </div>
            </motion.div>

            <motion.div className="about__lang-minimal" variants={containerVariants}>
              <motion.h3 className="about__section-label" variants={itemVariants}>Languages</motion.h3>
              <div className="about__lang-list">
                <motion.div variants={itemVariants}>
                  <Globe size={16} />
                </motion.div>
                {languages.map((lang, i) => (
                  <motion.span className="about__lang-item" key={i} variants={itemVariants} whileHover={{ scale: 1.1, x: 10 }}>
                    {lang.name} <span className="about__lang-level">({lang.level})</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
