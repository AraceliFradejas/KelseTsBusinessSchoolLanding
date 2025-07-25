import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShare2, FiX, FiLinkedin, FiTwitter, FiGithub, FiYoutube, FiInstagram } from 'react-icons/fi';

const SocialMedia = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: FiLinkedin, 
      url: 'https://linkedin.com/in/araceli-fradejas', 
      color: 'bg-primary-600 hover:bg-primary-700',
      delay: 0.1
    },
    { 
      name: 'Twitter', 
      icon: FiTwitter, 
      url: 'https://twitter.com/arafradejas', 
      color: 'bg-sky-500 hover:bg-sky-600',
      delay: 0.2
    },
    { 
      name: 'GitHub', 
      icon: FiGithub, 
      url: 'https://github.com/AraceliFradejas', 
      color: 'bg-gray-800 hover:bg-gray-900',
      delay: 0.3
    },
    { 
      name: 'YouTube', 
      icon: FiYoutube, 
      url: 'https://youtube.com/@arafradejas', 
      color: 'bg-red-600 hover:bg-red-700',
      delay: 0.4
    },
    { 
      name: 'Instagram', 
      icon: FiInstagram, 
      url: 'https://instagram.com/arafradejas', 
      color: 'bg-pink-600 hover:bg-pink-700',
      delay: 0.5
    }
  ];

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Social Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ delay: social.delay, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg ${social.color} transition-all duration-200 group relative`}
                title={social.name}
              >
                <social.icon className="w-5 h-5" />
                
                {/* Tooltip */}
                <span className="absolute right-14 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={toggleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-gray-700 hover:bg-gray-800 text-white' 
            : 'bg-gradient-to-r from-secondary-500 to-primary-600 hover:from-secondary-600 hover:to-primary-700 text-white'
        }`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiX className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiShare2 className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pulsing background when closed */}
      {!isOpen && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-600 rounded-full -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </div>
  );
};

export default SocialMedia;
