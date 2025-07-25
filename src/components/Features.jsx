import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Features = () => {
  const { t } = useTranslation();
  const [expandedCard, setExpandedCard] = useState(null);

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

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
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
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {t('features.items', { returnObjects: true }).map((feature, index) => {
            const isExpanded = expandedCard === index;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`card p-6 group overflow-hidden cursor-pointer transition-all duration-300 ${
                  isExpanded ? 'ring-2 ring-primary-500 shadow-lg' : 'hover:shadow-lg'
                }`}
                onClick={() => toggleCard(index)}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                {/* Compact header with small image and title */}
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="flex-shrink-0 w-[70px] h-[70px] rounded-lg overflow-hidden shadow-md"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img 
                      src={featureImages[index]} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition: 'center 35%'
                      }}
                    />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {feature.title}
                    </h3>
                    <motion.div 
                      className="text-sm text-primary-600 mt-1 flex items-center gap-1 font-medium"
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                    >
                      <span>{isExpanded ? 'Contraer' : 'Ver más'}</span>
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        ↓
                      </motion.span>
                    </motion.div>
                  </div>
                </div>

                {/* Expandable content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        className="pt-2 border-t border-gray-200"
                      >
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                        
                        {/* Decorative gradient line */}
                        <div className="mt-4 w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
