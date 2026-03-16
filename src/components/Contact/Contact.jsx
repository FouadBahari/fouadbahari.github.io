import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, ArrowUpRight } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import MagneticButton from '../MagneticButton/MagneticButton';
import './Contact.css';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 100 } }
};

const titleVariants = {
  hidden: { opacity: 0, y: 100, rotateX: -20 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { type: 'spring', damping: 20, stiffness: 100, delay: 0.2 } }
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container contact__container" style={{ perspective: "1000px" }}>
        <motion.div
          className="contact__top"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div className="contact__info" variants={itemVariants}>
            <h3 className="contact__subtitle">Have an idea?</h3>
            <a href={`mailto:${personalInfo.email}`} className="contact__email">
              {personalInfo.email} <ArrowUpRight size={24} />
            </a>
          </motion.div>
          
          <motion.div className="contact__socials" variants={containerVariants}>
            {socialLinks.map(link => (
              <motion.div key={link.name} variants={itemVariants}>
                <MagneticButton
                  as="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social-link"
                >
                  {link.name}
                </MagneticButton>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="contact__bottom"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <h2 className="contact__massive-title">
            LET'S <br />
            TALK
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
