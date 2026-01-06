import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

/**
 * ParallaxSection - Componente con efecto parallax basado en scroll
 * @param {ReactNode} children - Contenido a animar
 * @param {number} speed - Velocidad del parallax (-1 a 1, negativo para reversa) (default: 0.5)
 * @param {string} className - Clases CSS adicionales
 */
const ParallaxSection = ({ 
  children, 
  speed = 0.5, 
  className = '' 
}) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;
