import { motion } from 'framer-motion';

/**
 * StaggerText - Anima cada carácter de un texto con delay incremental
 * @param {string} text - Texto a animar
 * @param {string} className - Clases CSS para el contenedor
 * @param {number} staggerDelay - Delay entre cada carácter en segundos (default: 0.03)
 * @param {number} duration - Duración de cada animación en segundos (default: 0.5)
 */
const StaggerText = ({ 
  text, 
  className = '', 
  staggerDelay = 0.03,
  duration = 0.5
}) => {
  const characters = text.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };

  const characterVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: 'inline-block' }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={characterVariants}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default StaggerText;
