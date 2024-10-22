import React from 'react';
import { motion } from 'framer-motion';
import { getZodiacSign, getBirthstone, getBirthFlower, getZodiacInfo } from '../utils/zodiac';
import { Star, Droplet, Flower } from 'lucide-react';

interface ZodiacCardProps {
  birthdate: string;
}

const ZodiacCard: React.FC<ZodiacCardProps> = ({ birthdate }) => {
  const zodiacSign = getZodiacSign(birthdate);
  const birthstone = getBirthstone(birthdate);
  const birthFlower = getBirthFlower(birthdate);
  const zodiacInfo = getZodiacInfo(zodiacSign);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-indigo-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-20"></div>
      <h2 className="text-3xl font-bold mb-6 relative z-10 glow">Your Cosmic Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 relative z-10">
        <motion.div
          className="bg-indigo-800 bg-opacity-60 rounded-lg p-4 flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Star className="w-8 h-8 mb-2 text-yellow-400" />
          <h3 className="text-xl font-semibold mb-2">Zodiac Sign</h3>
          <p className="text-lg">{zodiacSign}</p>
        </motion.div>
        <motion.div
          className="bg-indigo-800 bg-opacity-60 rounded-lg p-4 flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Droplet className="w-8 h-8 mb-2 text-blue-400" />
          <h3 className="text-xl font-semibold mb-2">Birthstone</h3>
          <p className="text-lg">{birthstone}</p>
        </motion.div>
        <motion.div
          className="bg-indigo-800 bg-opacity-60 rounded-lg p-4 flex flex-col items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Flower className="w-8 h-8 mb-2 text-pink-400" />
          <h3 className="text-xl font-semibold mb-2">Birth Flower</h3>
          <p className="text-lg">{birthFlower}</p>
        </motion.div>
      </div>
      <motion.div
        className="bg-indigo-800 bg-opacity-60 rounded-lg p-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-2xl font-semibold mb-4 glow">Zodiac Traits</h3>
        <div className="grid grid-cols-2 gap-4">
          <p><strong>Element:</strong> {zodiacInfo.element}</p>
          <p><strong>Quality:</strong> {zodiacInfo.quality}</p>
          <p><strong>Ruling Planet:</strong> {zodiacInfo.rulingPlanet}</p>
          <p><strong>Traits:</strong> {zodiacInfo.traits.join(', ')}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ZodiacCard;