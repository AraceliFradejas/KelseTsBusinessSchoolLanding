import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShare2, FiX, FiGithub, FiLinkedin, FiTwitter, FiEdit3, FiYoutube, FiGlobe } from 'react-icons/fi';

const FloatingSocial = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://linkedin.com/in/araceli-fradejas',
      color: '#0077b5',
      bgColor: '#e7f3ff'
    },
    {
      name: 'Twitter',
      icon: FiTwitter,
      url: 'https://twitter.com/araceli_fradejas',
      color: '#1da1f2',
      bgColor: '#e7f7ff'
    },
    {
      name: 'Medium',
      icon: FiEdit3,
      url: 'https://medium.com/@araceli.fradejas',
      color: '#00ab6c',
      bgColor: '#f0fdf4'
    },
    {
      name: 'YouTube',
      icon: FiYoutube,
      url: 'https://www.youtube.com/@KelseTS',
      color: '#ff0000',
      bgColor: '#fef2f2'
    },
    {
      name: 'GitHub',
      icon: FiGithub,
      url: 'https://github.com/AraceliFradejas',
      color: '#333',
      bgColor: '#f6f8fa'
    },
    {
      name: 'Kelse TS Group',
      icon: FiGlobe,
      url: 'https://kelset-slanding.vercel.app/',
      color: '#6366f1',
      bgColor: '#f0f9ff'
    }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    open: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    closed: {
      y: 20,
      x: 20,
      opacity: 0,
      scale: 0.8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Social Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute bottom-16 right-0 space-y-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  x: -5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg backdrop-blur-sm border border-white/20 transition-all duration-200"
                style={{
                  backgroundColor: social.bgColor,
                  color: social.color
                }}
                title={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={toggleMenu}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 text-white border-red-400' 
            : 'bg-gradient-to-br from-primary-500 to-secondary-500 text-white border-primary-400'
        }`}
      >
        {isOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <FiShare2 className="w-6 h-6" />
        )}
      </motion.button>
    </div>
  );
};

export default FloatingSocial;
