import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import MagneticButton from '../MagneticButton/MagneticButton';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__name">© {new Date().getFullYear()} Fouad Bahari.</span>
          <span className="footer__copy">All rights reserved.</span>
        </div>

        <div className="footer__right">
          <MagneticButton
            className="footer__top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
