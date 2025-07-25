import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FiClock, FiUser, FiCheck, FiArrowRight } from 'react-icons/fi';

const Programs = () => {
  const { t } = useTranslation();

  const programImages = [
    '/assets/ktsbs6.png',
    '/assets/ktsbs7.png',
    '/assets/ktsbs8.png'
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

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'executive':
      case 'ejecutivo':
        return 'bg-black text-white';
      case 'intermediate':
      case 'intermedio':
        return 'bg-primary-600 text-secondary-400';
      case 'beginner':
      case 'principiante':
        return 'bg-secondary-500 text-primary-600';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="programs" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('programs.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('programs.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {t('programs.items', { returnObjects: true }).map((program, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="card p-6 relative overflow-hidden group"
            >
              {/* Program Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img 
                  src={programImages[index % programImages.length]} 
                  alt={program.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{
                    objectPosition: 'center 35%' // Ajustado para mostrar mejor las caras
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {program.title}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(program.level)}`}>
                      {program.level}
                    </span>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex items-center space-x-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <FiClock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiUser className="w-4 h-4" />
                    <span>{program.level}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center">
                        <FiCheck className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2 group"
                >
                  <span>Learn More</span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Program Comparison Table */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Program Comparison
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Executive</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Intermediate</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Beginner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Duration</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">6 weeks</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">12 weeks</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">4 weeks</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Prerequisites</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">C-Level</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">Basic Tech</td>
                  <td className="px-6 py-4 text-sm text-gray-600 text-center">None</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Hands-on Projects</td>
                  <td className="px-6 py-4 text-center">
                    <FiCheck className="w-5 h-5 bg-primary-600 text-white rounded-full p-1 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <FiCheck className="w-5 h-5 bg-primary-600 text-white rounded-full p-1 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <FiCheck className="w-5 h-5 bg-primary-600 text-white rounded-full p-1 mx-auto" />
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">Certificate</td>
                  <td className="px-6 py-4 text-center">
                    <FiCheck className="w-5 h-5 bg-primary-600 text-white rounded-full p-1 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <FiCheck className="w-5 h-5 bg-primary-600 text-white rounded-full p-1 mx-auto" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <FiCheck className="w-5 h-5 bg-primary-600 text-white rounded-full p-1 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
