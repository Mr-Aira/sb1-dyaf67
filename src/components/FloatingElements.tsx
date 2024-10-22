import React from 'react';
import { motion } from 'framer-motion';
import { Star, Moon, Sun } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const elements = [
    { icon: Star, color: 'text-yellow-400', size: 'w-4 h-4' },
    { icon: Moon, color: 'text-blue-300', size: 'w-6 h-6' },
    { icon: Sun, color: 'text-orange-400', size: 'w-8 h-8' },
    { icon: Star, color: 'text-pink-400', size: 'w-3 h-3' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((Element, index) => (
        <motion.div
          key={index}
          className={`absolute ${Element.color} ${Element.size}`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Element.icon />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;