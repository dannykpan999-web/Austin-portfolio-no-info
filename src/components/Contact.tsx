
import React, { useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, FileText, Phone, MessageCircle, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { personalInfo } from '@/data/personalInfo';
import BackgroundEffects from './BackgroundEffects';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
      {/* Professional background effects */}
      <div className="absolute inset-0 bg-black">
        <BackgroundEffects type="particles" intensity="medium" color="#1e40af" />
        <BackgroundEffects type="grid" intensity="medium" color="#3b82f6" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center mb-4">
            <span className="text-white">Get In </span>
            <span className="text-blue-400">Touch</span>
          </h2>
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-blue-400 mx-auto mb-8 sm:mb-10 md:mb-12"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 sm:mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/90 mb-2 text-sm sm:text-base md:text-lg font-body font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm sm:text-base md:text-lg font-body focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white/90 mb-2 text-sm sm:text-base md:text-lg font-body font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm sm:text-base md:text-lg font-body focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/90 mb-2 text-sm sm:text-base md:text-lg font-body font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/15 border border-white/30 text-white text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-4 px-4 sm:px-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-white font-body font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 disabled:opacity-50"
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 border-2 border-white border-t-transparent animate-spin"></div>
                      <span className="text-sm sm:text-base md:text-lg font-body">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} className="sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base md:text-lg font-body">Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 sm:mb-6">Contact Information</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                      <Mail size={20} className="text-white sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-white/90 text-sm sm:text-base md:text-lg font-body font-medium">Email</p>
                      <a href={`mailto:${personalInfo.contact.email}`} className="text-white hover:text-white/90 transition-colors text-sm sm:text-base md:text-lg break-all font-body">
                        {personalInfo.contact.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                      <MapPin size={20} className="text-white sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-white/90 text-sm sm:text-base md:text-lg font-body font-medium">Location</p>
                      <p className="text-white text-sm sm:text-base md:text-lg font-body">{personalInfo.contact.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex-1 shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 sm:mb-6">Connect With Me</h3>
                
                <div className="space-y-3 sm:space-y-4">
                  <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="p-1.5 sm:p-2 bg-white/15">
                      <Linkedin size={20} className="text-white sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-white text-sm sm:text-base md:text-lg font-body font-medium">LinkedIn</span>
                  </a>

                  <a href="/resume/resume.pdf" download="Austin-Bartlett-Resume.pdf"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="p-1.5 sm:p-2 bg-white/15">
                      <FileText size={20} className="text-white sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-white text-sm sm:text-base md:text-lg font-body font-medium">Download Resume</span>
                  </a>
                </div>
                
                <div className="mt-6 sm:mt-8">
                  <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-body">
                    I'm currently open to new opportunities and collaborations. Feel free to reach out!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gray-800/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Contact;
