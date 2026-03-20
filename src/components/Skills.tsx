
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Code2, Palette, Database, Cloud, Terminal, Cpu, Layers, Zap, Monitor, Server, Globe, Shield, Settings, GitBranch } from 'lucide-react';
import { skillCategories, technicalProficiency, SkillCategory } from '@/data/skills';
import { useTheme } from '@/contexts/ThemeContext';
import BackgroundEffects from './BackgroundEffects';

const Skills: React.FC = () => {
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

  // Icon mapping for dynamic icon rendering
  const iconMap = {
    // Professional skill category icons
    Monitor: <Monitor className="text-blue-400" size={24} />,
    Server: <Server className="text-blue-400" size={24} />,
    Database: <Database className="text-blue-400" size={24} />,
    Cloud: <Cloud className="text-blue-400" size={24} />,
    
    // Additional professional icons
    Code2: <Code2 className="text-blue-400" size={24} />,
    Palette: <Palette className="text-blue-400" size={24} />,
    Terminal: <Terminal className="text-blue-400" size={24} />,
    Cpu: <Cpu className="text-blue-400" size={24} />,
    Layers: <Layers className="text-blue-400" size={24} />,
    Zap: <Zap className="text-blue-400" size={24} />,
    Globe: <Globe className="text-blue-400" size={24} />,
    Shield: <Shield className="text-blue-400" size={24} />,
    Settings: <Settings className="text-blue-400" size={24} />,
    GitBranch: <GitBranch className="text-blue-400" size={24} />
  };

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
      {/* Professional background effects */}
      <div className="absolute inset-0 bg-black">
        <BackgroundEffects type="particles" intensity="medium" color="#1e40af" />
        <BackgroundEffects type="geometric" intensity="medium" color="#3b82f6" />
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
            <span className="text-white">Skills & </span>
            <span className="text-blue-400">Expertise</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-12 sm:w-16 md:w-20 h-1 bg-blue-400 mx-auto mb-8 sm:mb-10 md:mb-12"></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                    {iconMap[category.icon as keyof typeof iconMap]}
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 sm:px-4 py-1 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-body font-medium hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12 sm:mt-14 md:mt-16 bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-6 sm:mb-8 text-center">Technical Proficiency</h3>
            
            <div className="space-y-4 sm:space-y-6">
              {technicalProficiency.map((skill, index) => (
                <div key={index} className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/90 text-sm sm:text-base md:text-lg font-body font-medium">{skill.name}</span>
                    <span className="text-white text-sm sm:text-base md:text-lg font-body font-bold">{skill.percentage}%</span>
                  </div>
                  <div className="w-full h-2 sm:h-3 bg-white/10 backdrop-blur-sm overflow-hidden">
                    <motion.div 
                      className={`h-full shadow-lg ${isDark ? 'bg-gradient-to-r from-gray-500 to-gray-400' : 'bg-gradient-to-r from-blue-500 to-blue-400'}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 0.8, delay: 0.1 * index }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-40 h-40 bg-gray-800/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Skills;
