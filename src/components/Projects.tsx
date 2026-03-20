import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ExternalLink, Github, Code2, Star, PenTool, Palette, Globe, Server, Zap, Shield, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from '@/contexts/ThemeContext';
import { projectsData, Project } from '@/data/projects';
import BackgroundEffects from './BackgroundEffects';

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const animations = useAnimation();

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
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Professional background effects */}
      <div className="absolute inset-0 bg-black">
        <BackgroundEffects type="waves" intensity="medium" color="#1e40af" />
        <BackgroundEffects type="grid" intensity="medium" color="#3b82f6" />
      </div>
      
      {/* Modern decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gray-800/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-10 left-1/4 w-20 h-20 bg-gray-700/20 rounded-full blur-lg animate-float3d"></div>
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-gray-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gray-800/15 rounded-full blur-xl animate-float3d"></div>
      
      {/* Subtle background pattern */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gray-800/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={animations}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 md:mb-16 relative z-10">
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">
              <span className="text-white">Featured </span>
              <span className="text-blue-400">Projects</span>
            </motion.h2>
            <motion.div variants={itemVariants} className="w-16 sm:w-20 md:w-24 h-1 bg-blue-400 mx-auto mb-6 sm:mb-8 shadow-lg"></motion.div>
            
            <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 font-body drop-shadow-md">
              A showcase of my work combining modern design with powerful functionality
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {projectsData.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className={`overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:-translate-y-2 hover:bg-white/10 hover:border-white/20 ${project.featured ? 'ring-2 ring-white/30' : ''}`}>
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-1/2 h-48 sm:h-56 md:h-64 lg:h-auto overflow-hidden bg-white/5 backdrop-blur-sm relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="lg:w-1/2 flex flex-col">
                      <CardHeader className="p-4 sm:p-6 pb-2 sm:pb-4">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl font-display font-bold group-hover:text-white transition-colors text-white mb-2 sm:mb-3">
                      {project.title}
                    </CardTitle>
                    <div className="text-white/80">
                      <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base leading-relaxed font-body">
                        {project.description.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                      </CardHeader>
                      
                      <CardContent className="p-4 sm:p-6 pt-0 flex-1 flex flex-col justify-end">
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {project.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs sm:text-sm font-body font-medium py-1 sm:py-2 px-2 sm:px-3 transition-all text-white/90 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/30"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        {project.liveUrl && (
                          <div className="mt-4">
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-body font-medium hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                            >
                              <ExternalLink size={16} />
                              Live Demo
                            </a>
                          </div>
                        )}
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants} 
            className="mt-12 flex justify-center"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
