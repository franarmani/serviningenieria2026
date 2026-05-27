import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * RevealOnScroll - Componente que anima sus hijos cuando entra en viewport
 * @param {ReactNode} children - Contenido a animar
 * @param {'up'|'down'|'left'|'right'} direction - Dirección de la animación (default: 'up')
 * @param {number} delay - Delay antes de la animación en segundos (default: 0)
 * @param {number} duration - Duración de la animación en segundos (default: 0.6)
 * @param {string} className - Clases CSS adicionales
 */
const RevealOnScroll = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directionOffset = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
