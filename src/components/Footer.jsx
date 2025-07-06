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
  FiExternalLink
} from 'react-icons/fi';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState(null);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          language: i18n.language
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubscribeStatus('success');
        setEmail('');
      } else {
        setSubscribeStatus('error');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setSubscribeStatus('error');
    } finally {
      setIsSubscribing(false);
      setTimeout(() => setSubscribeStatus(null), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FiLinkedin, href: '#', label: t('footer.social.linkedin') },
    { icon: FiTwitter, href: '#', label: t('footer.social.twitter') },
    { icon: FiYoutube, href: '#', label: t('footer.social.youtube') },
    { icon: FiInstagram, href: '#', label: t('footer.social.instagram') }
  ];

  const footerLinks = [
    {
      title: 'Programs',
      links: [
        { label: t('footer.links.programs'), href: '#programs' },
        { label: 'AI Strategy for Executives', href: '#' },
        { label: 'Machine Learning for Business', href: '#' },
        { label: 'AI Innovation Workshop', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: t('footer.links.admissions'), href: '#contact' },
        { label: 'About Us', href: '#about' },
        { label: t('footer.links.careers'), href: '#' },
        { label: t('footer.links.news'), href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Student Portal', href: '#' },
        { label: 'Alumni Network', href: '#' },
        { label: 'Contact Support', href: '#contact' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: t('footer.links.privacy'), href: '#' },
        { label: t('footer.links.terms'), href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Accessibility', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <img 
                    src="/assets/KelseTS Bussines School.png" 
                    alt="KelceTS Business School" 
                    className="h-12 w-auto"
                  />
                  <div>
                    <h3 className="text-2xl font-bold">KelceTS</h3>
                    <p className="text-gray-400 text-sm">Business School</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                  {t('footer.description')}
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <FiMapPin className="w-5 h-5 text-primary-400" />
                    <span className="text-sm">123 AI Innovation Drive, Tech District, NY 10001</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <FiPhone className="w-5 h-5 text-primary-400" />
                    <span className="text-sm">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <FiMail className="w-5 h-5 text-primary-400" />
                    <span className="text-sm">admissions@kelscts.edu</span>
                  </div>
                </div>

                {/* Parent Company Link */}
                <motion.a
                  href="https://kelset-slanding.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium"
                >
                  <span>{t('footer.parentCompany')}</span>
                  <FiExternalLink className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>

            {/* Links Sections */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-white transition-all duration-200 text-sm block"
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Newsletter Section */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">{t('footer.newsletter.title')}</h4>
              <p className="text-gray-300 text-sm mb-6">
                {t('footer.newsletter.description')}
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('footer.newsletter.placeholder')}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubscribing}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full btn-primary ${
                    isSubscribing ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubscribing ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
                  ) : (
                    t('footer.newsletter.button')
                  )}
                </motion.button>

                {subscribeStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-sm ${
                      subscribeStatus === 'success' ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {subscribeStatus === 'success'
                      ? 'Successfully subscribed!'
                      : 'Error subscribing. Please try again.'
                    }
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm"
              >
                {t('footer.copyright')}
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Scroll to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center text-white transition-all duration-200 group"
                aria-label="Scroll to top"
              >
                <FiArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
