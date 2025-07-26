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
  FiEdit3,
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
    <footer className="bg-black text-white pt-0 pb-16 relative overflow-hidden">
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
            <h4 className="text-lg font-semibold mb-4 text-white">{t('footer.quickLinks', 'Quick Links')}</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">{t('nav.home', 'Home')}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">{t('nav.about', 'About Us')}</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors">{t('nav.programs', 'Programs')}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">{t('nav.contact', 'Contact')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{t('footer.contactInfo', 'Contact Info')}</h4>
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

        {/* Back to Top Button */}
        <div className="flex justify-center mt-8 mb-8">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-orange-400 hover:text-orange-600 transition-colors font-semibold text-lg"
          >
            <FiArrowUp className="w-4 h-4" />
            {t('footer.backToTop', 'Volver arriba')}
          </motion.button>
        </div>

        {/* Disclaimer and Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center space-y-4">
            {/* Educational Disclaimer */}
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-700/50 rounded-lg p-6 max-w-5xl mx-auto">
              <h5 className="text-purple-400 font-bold text-lg mb-3 flex items-center justify-center gap-2">
                ✨ Microsoft Power Up - Copilot Studio Challenge ✨
              </h5>
              <div className="space-y-3 text-gray-300">
                <p className="font-semibold text-purple-300">
                  KelseTS Business School Parking Inspector - Microsoft Power Up Challenge v1.0
                </p>
                <p className="flex items-center justify-center gap-2">
                  Created with <span className="text-red-400 text-xl">💖</span> by a Swiftie inspired by Taylor & Travis
                </p>
                <p className="text-yellow-300">
                  Demonstrating Power Platform magic ✨
                </p>
                <p className="text-sm text-gray-400">
                  Educational purposes only. This is a fictional project created for the Microsoft Power Up program 
                  and does not represent a real product or service.
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-sm space-y-2">
              <p className="font-medium">© 2025 Araceli Fradejas - All rights reserved</p>
              <p>
                Part of <a href="https://kelset-slanding.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-400 transition-colors underline">Kelse TS Group</a>
              </p>
              <p className="text-xs text-gray-600">
                Made with Microsoft Copilot Studio • Power Platform • React • Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;