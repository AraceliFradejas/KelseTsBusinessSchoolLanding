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
      {/* Franja naranjita de redes sociales */}
      <div className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 py-6 shadow-lg border-b-4 border-orange-300">
        <div className="container-custom flex flex-col md:flex-row items-center justify-center gap-6">
          <h3 className="font-bold text-white text-xl tracking-wide flex items-center gap-2">
            <span>🌟</span> {t('footer.socialMedia.title', 'Conecta conmigo')} <span>🌟</span>
          </h3>
          
          {/* Íconos en estilo compacto */}
          <div className="flex items-center space-x-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full px-4 py-2">
            <a 
              href="https://github.com/AraceliFradejas"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-yellow-200 transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-yellow-200 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.youtube.com/@aracelifradejasmunoz2758"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-yellow-200 transition-colors duration-300"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            
            <a 
              href="https://medium.com/@araceli.fradejas"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-yellow-200 transition-colors duration-300"
              aria-label="Medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
            
            <a 
              href="https://x.com/AraceliFradejas"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-yellow-200 transition-colors duration-300"
              aria-label="X/Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
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