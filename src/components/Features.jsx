import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Features = () => {
  const { t } = useTranslation();

  const featureImages = [
    '/assets/ktsbs2.png',
    '/assets/ktsbs3.png', 
    '/assets/ktsbs4.png',
    '/assets/ktsbs5.png'
  ];

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
    hidden: { y: 50, opacity: 0 },
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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16"
        >
          {t('features.items', { returnObjects: true }).map((feature, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card p-8 group overflow-hidden"
              >
                {/* Large Featured Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative mb-8 overflow-hidden rounded-xl"
                >
                  <img 
                    src={featureImages[index]} 
                    alt={feature.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full"></div>
                  </div>
                </motion.div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className="mt-6 w-12 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Stats Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl md:text-4xl font-bold text-gradient mb-2"
            >
              100%
            </motion.div>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
              AI-Focused
            </p>
          </div>
          
          <div className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl md:text-4xl font-bold text-gradient mb-2"
            >
              24/7
            </motion.div>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
              Support
            </p>
          </div>
          
          <div className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl md:text-4xl font-bold text-gradient mb-2"
            >
              50+
            </motion.div>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
              Countries
            </p>
          </div>
          
          <div className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl md:text-4xl font-bold text-gradient mb-2"
            >
              10+
            </motion.div>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
              Years Experience
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
