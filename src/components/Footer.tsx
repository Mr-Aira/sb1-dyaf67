import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 bg-opacity-80 backdrop-filter backdrop-blur-lg text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold glow">AstroBirthday</h3>
            <p className="mt-2">Discover your cosmic connection</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Connect with us</h4>
            <div className="flex justify-center space-x-4">
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="hover:text-purple-300 transition-colors">
                <Facebook />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="hover:text-purple-300 transition-colors">
                <Twitter />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.2 }} className="hover:text-purple-300 transition-colors">
                <Instagram />
              </motion.a>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p>&copy; 2024 AstroBirthday. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;