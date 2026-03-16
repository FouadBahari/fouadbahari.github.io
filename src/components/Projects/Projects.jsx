import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import './Projects.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// Outer project variant
const projectVariants = {
  hidden: { opacity: 0, y: 100, rotateX: -20 },
  show: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { type: 'spring', damping: 20, stiffness: 100, staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

// Inner item variants for deep cascading
const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 15, stiffness: 150 } }
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container" style={{ perspective: "1000px" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="projects__header"
        >
          <span className="section__label">Selected Work</span>
          <h2 className="section__title projects__title">Projects</h2>
        </motion.div>

        <motion.div 
          className="projects__list"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {projects.map((project, i) => (
            <motion.a
              href={project.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              className="project-row"
              variants={projectVariants}
            >
              <div className="project-row__left">
                <motion.h3 className="project-row__title" variants={itemVariants}>{project.title}</motion.h3>
                <motion.p className="project-row__desc" variants={itemVariants}>{project.description}</motion.p>
                
                <motion.div className="project-row__tech" variants={projectVariants}>
                  {project.tech.map(t => (
                    <motion.span key={t} className="tech-badge-v3 hover-invert" variants={itemVariants}>{t}</motion.span>
                  ))}
                </motion.div>
              </div>

              <motion.div className="project-row__right" variants={itemVariants}>
                <span className="project-row__period">{project.period}</span>
                <div className="project-row__icon">
                  <ArrowUpRight size={32} />
                </div>
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
