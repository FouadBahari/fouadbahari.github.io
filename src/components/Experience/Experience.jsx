import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../../data/portfolioData';
import './Experience.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const innerContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: -50, rotateY: 20 },
  show: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0,
    transition: { type: 'spring', damping: 20, stiffness: 100 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 15, stiffness: 150 } }
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="container" style={{ perspective: "1000px" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="exp__header"
        >
          <span className="section__label">Experience</span>
          <h2 className="section__title exp__title">Roles</h2>
        </motion.div>

        <motion.div 
          className="exp__timeline"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {experience.map((job, i) => (
            <motion.div
              key={i}
              className="exp__item"
              variants={cardVariants}
            >
              <div className="exp__item-left">
                <span className="exp__period">{job.period}</span>
                <span className="exp__location">{job.location}</span>
              </div>
              
              <div className="exp__item-right">
                <div className="exp__item-top">
                  <div>
                    <h3 className="exp__role">{job.role}</h3>
                    <p className="exp__company">{job.company}</p>
                  </div>
                  <div className="exp__number">0{i + 1}</div>
                </div>

                {/* Granular Stagger for highlights */}
                <motion.ul className="exp__highlights" variants={innerContainerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  {job.highlights.map((h, j) => (
                    <motion.li key={j} className="exp__highlight" variants={itemVariants}>{h}</motion.li>
                  ))}
                </motion.ul>

                {/* Granular Stagger for tech badges */}
                {job.tech && (
                  <motion.div className="exp__tech" variants={innerContainerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                    {job.tech.map(t => (
                      <motion.span key={t} className="tech-badge-v3" variants={itemVariants}>{t}</motion.span>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
