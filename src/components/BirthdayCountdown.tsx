import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { calculateTimeUntilBirthday } from '../utils/zodiac';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { Facebook, Twitter, Whatsapp } from 'lucide-react';

interface BirthdayCountdownProps {
  birthdate: string;
}

const BirthdayCountdown: React.FC<BirthdayCountdownProps> = ({ birthdate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeUntilBirthday(birthdate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeUntilBirthday(birthdate));
    }, 1000);

    return () => clearInterval(timer);
  }, [birthdate]);

  const shareUrl = window.location.href;
  const shareTitle = `Check out my birthday countdown on AstroBirthday!`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-indigo-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-6 mb-8 shadow-lg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-20"></div>
      <h2 className="text-3xl font-bold mb-6 relative z-10">Countdown to Your Next Birthday</h2>
      <div className="grid grid-cols-4 gap-4 mb-6 relative z-10">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div
            key={unit}
            className="bg-indigo-800 bg-opacity-60 rounded-lg p-4 flex flex-col items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="text-4xl font-bold block mb-2"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {value}
            </motion.span>
            <p className="text-sm uppercase">{unit}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 relative z-10">
        <FacebookShareButton url={shareUrl} quote={shareTitle}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Facebook className="text-blue-400 hover:text-blue-300 transition-colors" />
          </motion.div>
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={shareTitle}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Twitter className="text-blue-400 hover:text-blue-300 transition-colors" />
          </motion.div>
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={shareTitle}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Whatsapp className="text-green-400 hover:text-green-300 transition-colors" />
          </motion.div>
        </WhatsappShareButton>
      </div>
    </motion.div>
  );
};

export default BirthdayCountdown;