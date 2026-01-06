import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

/**
 * AnimatedCounter - Contador animado que se activa al entrar en viewport
 * @param {number} value - Valor final del contador
 * @param {number} duration - Duración de la animación en segundos (default: 2)
 * @param {string} suffix - Texto después del número (ejemplo: "+", "m²", "%")
 * @param {number} decimals - Número de decimales a mostrar (default: 0)
 * @param {string} className - Clases CSS adicionales
 */
const AnimatedCounter = ({ 
  value, 
  duration = 2, 
  suffix = '', 
  decimals = 0,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Easing function (easeOutQuart)
      const easeOut = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = easeOut * value;
      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, value, duration]);

  const formattedValue = decimals > 0 
    ? displayValue.toFixed(decimals)
    : Math.floor(displayValue).toLocaleString('es-AR');

  return (
    <span ref={ref} className={className}>
      {formattedValue}{suffix}
    </span>
  );
};

export default AnimatedCounter;
