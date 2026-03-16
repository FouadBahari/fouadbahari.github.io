import { useRef, useState } from 'react';
import { motion, useInView, useMotionTemplate, useMotionValue } from 'framer-motion';
import { bentoSkills } from '../../data/portfolioData';
import './Skills.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 25, stiffness: 120 } }
};

const innerContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.3 }
  }
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', damping: 12, stiffness: 200 } }
};

function BentoCard({ category, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Create a staggered infinite float
  const floatAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay: index * 0.2, // Stagger based on grid index
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bento-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={isHovered ? { y: -5, scale: 1.02 } : floatAnimation} // Override float on hover
      transition={isHovered ? { type: "spring", stiffness: 300, damping: 20 } : floatAnimation.transition}
    >
      {/* Interactive Spotlight Glow */}
      <motion.div
        className="bento-card__glow"
        style={{
          background: useMotionTemplate`
            radial-gradient(
               400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
          opacity: isHovered ? 1 : 0,
        }}
      />

      <h3 className="bento-card__title">{category.category}</h3>
      <motion.div 
        className="bento-card__tags"
        variants={innerContainerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {category.items.map((item, i) => (
          <motion.span 
            key={i} 
            className="bento-card__tag"
            variants={tagVariants}
            whileHover={{ scale: 1.1, rotate: [-1, 1, 0], backgroundColor: 'var(--text-primary)', color: 'var(--bg-primary)' }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="skills__header"
        >
          <span className="section__label">Technical Expertise</span>
          <h2 className="section__title skills__title">The Stack</h2>
        </motion.div>

        <motion.div 
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {bentoSkills.map((category, index) => (
            <BentoCard key={index} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
