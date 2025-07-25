import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiTrendingUp, FiStar } from 'react-icons/fi';

const About = () => {
  const { t } = useTranslation();

  const statsIcons = [FiUsers, FiAward, FiTrendingUp, FiStar];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                {t('about.badge', 'About KelceTS')}
              </span>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              {t('about.title')}
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-primary-600 mb-6 font-medium"
            >
              {t('about.subtitle')}
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-8 leading-relaxed text-lg"
            >
              {t('about.description')}
            </motion.p>

            {/* Stats Grid */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 gap-6 mb-8"
            >
              {t('about.stats', { returnObjects: true }).map((stat, index) => {
                const IconComponent = statsIcons[index];
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    <IconComponent className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Additional Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">{t('about.facts.founded', 'Founded in 2025 with a focus on AI education')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">{t('about.facts.partnerships', 'Partnerships with leading tech companies')}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">{t('about.facts.alumni', 'Alumni network spanning 50+ countries')}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Images */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="/assets/ktsbs0.png"
                  alt="KelceTS Business School"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating Card 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FiTrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{t('about.successRate.label', 'Success Rate')}</div>
                    <div className="text-lg font-bold text-green-600">95%</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary-100 rounded-full flex items-center justify-center">
                    <FiStar className="w-5 h-5 text-secondary-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{t('about.rating.label', 'Rating')}</div>
                    <div className="text-lg font-bold text-secondary-600">4.9/5</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Secondary Images Grid */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-3 gap-4"
            >
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="/assets/1 carreer.png" 
                  alt="Career 1" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  style={{
                    objectPosition: 'center 30%'
                  }}
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="/assets/2 carreer.png" 
                  alt="Career 2" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  style={{
                    objectPosition: 'center 30%'
                  }}
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="/assets/3 carreer.png" 
                  alt="Career 3" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  style={{
                    objectPosition: 'center 30%'
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mission & Vision Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 gap-12"
        >
          <div className="card p-8">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
              <FiTrendingUp className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.mission.title', 'Our Mission')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.mission.description', 'To bridge the gap between cutting-edge AI technology and practical business applications, empowering professionals and organizations to thrive in the AI-driven future.')}
            </p>
          </div>

          <div className="card p-8">
            <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mb-6">
              <FiStar className="w-6 h-6 text-secondary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.vision.title', 'Our Vision')}</h3>
            <p className="text-gray-600 leading-relaxed">
              {t('about.vision.description', 'To be the global leader in AI business education, creating a world where every professional has the knowledge and skills to leverage artificial intelligence for positive impact.')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
