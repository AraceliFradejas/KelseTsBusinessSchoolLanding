import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar, FiMessageCircle } from 'react-icons/fi';

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAvatars, setUserAvatars] = useState([]);
  
  const testimonials = t('testimonials.items', { returnObjects: true });

  // Generate random user avatars matching testimonial names
  useEffect(() => {
    const generateAvatars = async () => {
      try {
        // Match gender with testimonial names: Sarah (F), Michael (M), Maria (F)
        const avatarConfigs = [
          { gender: 'female', seed: 'sarahjohnson2025', nat: 'us' },    // Sarah Johnson
          { gender: 'male', seed: 'michaelchen2025', nat: 'us' },      // Michael Chen  
          { gender: 'female', seed: 'mariarodriguez2025', nat: 'us' }  // Maria Rodriguez
        ];
        
        const avatarPromises = avatarConfigs.map(config => 
          fetch(`https://randomuser.me/api/?gender=${config.gender}&nat=${config.nat}&inc=picture&seed=${config.seed}`)
        );

        const responses = await Promise.all(avatarPromises);
        const userData = await Promise.all(responses.map(res => res.json()));
        
        const avatars = userData.map(data => data.results[0].picture.large);
        setUserAvatars(avatars);
      } catch (error) {
        console.log('Error loading avatars, using fallback');
        // Fallback to local assets if API fails (matching genders)
        setUserAvatars([
          '/assets/ktsbs_staff_CHRO.png',  // Female for Sarah Johnson
          '/assets/ktsbs_staff_CEO.png',   // Male for Michael Chen
          '/assets/ktsbs_staff_CCO.webp'   // Female for Maria Rodriguez
        ]);
      }
    };

    generateAvatars();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative h-96 md:h-80">
            <AnimatePresence initial={false} custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    nextTestimonial();
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevTestimonial();
                  }
                }}
                className="absolute inset-0"
              >
                <div className="h-full bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                  
                  {/* Quote icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="absolute top-8 left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    <FiMessageCircle className="w-6 h-6 text-primary-600" />
                  </motion.div>

                  <div className="relative z-10 text-center">
                    {/* Stars */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex justify-center space-x-1 mb-6"
                    >
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </motion.div>

                    {/* Testimonial content */}
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto italic"
                    >
                      "{testimonials[currentIndex].content}"
                    </motion.p>

                    {/* Author info */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center justify-center space-x-4"
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center shadow-lg">
                        {userAvatars.length > 0 && userAvatars[currentIndex] ? (
                          <img 
                            src={userAvatars[currentIndex]} 
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                            style={{
                              objectPosition: 'center 30%'
                            }}
                            onError={(e) => {
                              // Fallback if image fails to load
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div 
                          className="w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg"
                          style={{ display: userAvatars.length > 0 ? 'none' : 'flex' }}
                        >
                          {testimonials[currentIndex].name.charAt(0)}
                        </div>
                      </div>
                      <div className="text-left">
                        <h4 className="font-semibold text-gray-900 text-lg">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-gray-600">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-200 group"
          >
            <FiChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary-600 hover:shadow-xl transition-all duration-200 group"
          >
            <FiChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-primary-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`card p-6 cursor-pointer transition-all duration-300 ${
                index === currentIndex ? 'ring-2 ring-primary-600 bg-primary-50' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shadow-md overflow-hidden">
                  {userAvatars.length > 0 && userAvatars[index] ? (
                    <img 
                      src={userAvatars[index]} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition: 'center 30%'
                      }}
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className="w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-xs"
                    style={{ display: userAvatars.length > 0 ? 'none' : 'flex' }}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
