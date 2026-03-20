
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Calendar, Building2, Briefcase, Clock, MapPin, Award } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { experienceData, ExperienceItem } from '@/data/experience';
import BackgroundEffects from './BackgroundEffects';

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const animations = useAnimation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    if (isInView) {
      animations.start('visible');
    }
  }, [isInView, animations]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
      {/* Professional background effects */}
      <div className="absolute inset-0 bg-black">
        <BackgroundEffects type="dots" intensity="medium" color="#1e40af" />
        <BackgroundEffects type="waves" intensity="medium" color="#3b82f6" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={animations}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-4">
            <span className="text-white">Work </span>
            <span className="text-blue-400">Experience</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-12 sm:w-16 md:w-20 h-1 bg-blue-400 mx-auto mb-8 sm:mb-10 md:mb-12"></motion.div>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {experienceData.map((experience, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20"
              >
                <div className="md:flex md:items-start md:gap-6 lg:gap-8">
                  <div className="hidden md:block md:w-1/4 shrink-0">
                    <div className="flex items-center gap-2 lg:gap-3 text-white mb-3">
                      <div className="p-1.5 sm:p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                        <Calendar size={18} className="lg:w-5 lg:h-5" />
                      </div>
                      <span className="text-sm lg:text-lg font-semibold">{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-3 text-white/90">
                      <div className="p-1.5 sm:p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                        <Building2 size={18} className="lg:w-5 lg:h-5" />
                      </div>
                      <span className="text-sm lg:text-lg">{experience.location}</span>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white mb-2">{experience.title}</h3>
                    <p className="text-white text-base sm:text-lg md:text-xl font-body font-semibold mb-4 sm:mb-6">{experience.company}</p>
                    
                    <div className="md:hidden mb-4 sm:mb-6">
                      <div className="flex items-center gap-2 sm:gap-3 text-white mb-2">
                        <div className="p-1.5 sm:p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                          <Calendar size={16} className="sm:w-4 sm:h-4" />
                        </div>
                        <span className="text-sm sm:text-base md:text-lg font-body font-semibold">{experience.period}</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-white/90">
                        <div className="p-1.5 sm:p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                          <Building2 size={16} className="sm:w-4 sm:h-4" />
                        </div>
                        <span className="text-sm sm:text-base md:text-lg font-body">{experience.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 sm:space-y-4">
                      {experience.achievements.map((achievement, aidx) => (
                        <li key={aidx} className="flex items-start gap-3 sm:gap-4">
                          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white shrink-0 mt-2 sm:mt-3"></div>
                          <span className="text-sm sm:text-base md:text-lg leading-relaxed text-white/90 font-body">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-40 h-40 bg-gray-800/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Experience;
