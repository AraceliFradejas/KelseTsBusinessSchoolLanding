import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin, 
  FiTwitter, 
  FiYoutube, 
  FiInstagram,
  FiArrowUp,
  FiExternalLink,
  FiGithub
} from 'react-icons/fi';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <img 
                src="/assets/KelseTS Bussines School.png" 
                alt="KelceTS Business School" 
                className="h-12 mb-4"
              />
              <p className="text-gray-400 mb-6 max-w-md">
                {t('footer.description', 'Leading AI education for business professionals. Learn cutting-edge artificial intelligence applications for your company.')}
              </p>
              
              {/* Parent Company Link */}
              <motion.a
                href="https://kelset-slanding.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors font-medium"
              >
                <FiExternalLink className="w-4 h-4" />
                🔗 {t('footer.parentCompany', 'Part of Kelse TS Group')} ↗
              </motion.a>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FiMail className="w-4 h-4 text-primary-500" />
                <span className="text-gray-400">info@kelscts.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="w-4 h-4 text-primary-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMapPin className="w-4 h-4 text-primary-500" />
                <span className="text-gray-400">Kansas City, MO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              <motion.a
                href="https://linkedin.com/in/araceli-fradejas"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com/aracelif"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
              >
                <FiTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://github.com/AraceliFradejas"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://youtube.com/@aracelif"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
              >
                <FiYoutube className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com/aracelif"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
              >
                <FiInstagram className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <FiArrowUp className="w-4 h-4" />
              Back to Top
            </motion.button>
          </div>
        </div>

        {/* Disclaimer and Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center space-y-4">
            {/* Disclaimer */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 max-w-4xl mx-auto">
              <h5 className="text-secondary-500 font-semibold mb-2">Microsoft Power Up - Copilot Studio</h5>
              <p className="text-gray-400 text-sm">
                KelceTS is a fictional project created for the Microsoft Power Up program. 
                This is for educational purposes only and does not represent a real product or service.
              </p>
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              <p>&copy; 2025 KelceTS Business School. All rights reserved.</p>
              <p className="mt-1">
                Part of <a href="https://kelset-slanding.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-400 transition-colors">Kelse TS Group</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;