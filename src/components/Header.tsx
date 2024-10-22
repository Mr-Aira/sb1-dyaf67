import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-900 bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-white">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Star className="h-8 w-8 text-yellow-400" />
          </motion.div>
          <span className="glow">AstroBirthday</span>
        </Link>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="text-white hover:text-purple-300 transition-colors">Home</Link></li>
          <li><Link to="/about" className="text-white hover:text-purple-300 transition-colors">About</Link></li>
          <li><Link to="/blog" className="text-white hover:text-purple-300 transition-colors">Blog</Link></li>
          <li><Link to="/contact" className="text-white hover:text-purple-300 transition-colors">Contact</Link></li>
          <li><Link to="/faq" className="text-white hover:text-purple-300 transition-colors">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;