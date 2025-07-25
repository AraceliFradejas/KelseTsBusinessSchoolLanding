import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      name: 'T.A.S.',
      title: 'CEO',
      image: '/assets/ktsbs_staff_CEO.png',
      titleKey: 'team.members.ceo.title'
    },
    {
      id: 2,
      name: 'T.M.K.',
      title: 'CIO', 
      image: '/assets/ktsbs_staff_CIO.png',
      titleKey: 'team.members.cio.title'
    },
    {
      id: 3,
      name: 'J.D.K.',
      title: 'CHRO',
      image: '/assets/ktsbs_staff_CHRO.png', 
      titleKey: 'team.members.chro.title'
    },
    {
      id: 4,
      name: 'A.K.S.',
      title: 'CCO',
      image: '/assets/ktsbs_staff_CCO.webp',
      titleKey: 'team.members.cco.title'
    }
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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            {t('team.badge', 'Our Team')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('team.title', 'Meet Our Professional Team')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('team.description', 'Our experienced leadership team brings decades of expertise in AI, business strategy, and education to drive innovation and excellence.')}
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              {/* Profile Photo */}
              <div className="relative mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: 'center 30%' // Ajustado para no cortar cabezas
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent group-hover:from-primary-600/20 transition-all duration-300"></div>
                </motion.div>
                
                {/* Decorative Ring */}
                <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full border-4 border-primary-200 group-hover:border-primary-400 transition-colors duration-300"></div>
              </div>

              {/* Member Info */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full text-sm font-semibold">
                  {t(member.titleKey, member.title)}
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('team.cta.title', 'Ready to Learn from the Best?')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('team.cta.description', 'Join thousands of professionals who have transformed their careers with our AI education programs.')}
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              {t('team.cta.button', 'Get Started Today')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
