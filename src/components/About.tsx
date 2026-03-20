import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { MapPin, Mail, GraduationCap, FileText, User, Briefcase, Code2, Award } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { personalInfo } from '@/data/personalInfo';
import BackgroundEffects from './BackgroundEffects';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
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
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
      {/* Professional background effects */}
      <div className="absolute inset-0 bg-black">
        <BackgroundEffects type="geometric" intensity="medium" color="#1e40af" />
        <BackgroundEffects type="dots" intensity="medium" color="#3b82f6" />
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
             <span className="text-white">About </span>
             <span className="text-blue-400">Me</span>
           </motion.h2>
           <motion.div variants={itemVariants} className="w-12 sm:w-16 md:w-20 h-1 bg-blue-400 mx-auto mb-8 sm:mb-10 md:mb-12"></motion.div>

          {/* Professional Layout with Enhanced Structure */}
          <div className="space-y-12">
            {/* Hero Section with Avatar and Key Info */}
            <motion.div variants={itemVariants} className="text-center">
              {/* Avatar hidden */}

              {/* Name and Title */}
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-2">
                  {personalInfo.name.first} {personalInfo.name.last}
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl text-blue-400 font-body font-medium">
                  {personalInfo.title}
                </p>
              </div>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Personal Information Card */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 h-full shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <h4 className="text-xl font-display font-bold text-white mb-6 pb-4 border-b border-gray-700/50">Personal Information</h4>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-base font-body font-semibold text-white mb-1">Location</h5>
                        <p className="text-white/80 text-sm font-body">{personalInfo.contact.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-base font-body font-semibold text-white mb-1">Email</h5>
                        <a href={`mailto:${personalInfo.contact.email}`} className="text-white/80 hover:text-white transition-colors text-sm break-all font-body">
                          {personalInfo.contact.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                        <GraduationCap className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-base font-body font-semibold text-white mb-1">Education</h5>
                        <p className="text-white/80 text-sm font-body">{personalInfo.education.degree}</p>
                        <p className="text-white/80 text-sm font-body">{personalInfo.education.institution}, {personalInfo.education.year}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                        <FileText className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-base font-body font-semibold text-white mb-1">Resume</h5>
                        <a
                          href="/resume/resume.pdf"
                          download="Austin-Bartlett-Resume.pdf"
                          className="text-white/80 hover:text-white transition-colors text-sm underline hover:no-underline font-body"
                        >
                          Download PDF Resume
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Professional Summary Card */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 h-full shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  <h4 className="text-xl font-display font-bold text-white mb-6">Who am I</h4>

                  <div className="space-y-6">
                    {personalInfo.bio.long.map((paragraph, index) => (
                      <p key={index} className="text-sm sm:text-base leading-relaxed text-white/85 font-body">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gray-800/20 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-20 w-48 h-48 bg-gray-700/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default About;
