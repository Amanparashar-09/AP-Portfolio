import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';
import { socialLinks } from '../data/social';
import * as LucideIcons from 'lucide-react';

const Contact = () => {
  return (
    <PageTransition>
      <section className="pt-28 pb-16">
        <div className="section-container">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="heading-lg mb-4">Get In Touch</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="paragraph max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
              I'm always open to new ideas and collaborations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="heading-sm mb-6">Send Me a Message</h2>
              <ContactForm />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="heading-sm mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="mr-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-light-text">Agra, Uttar Pradesh, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a href="mailto:amanparashar0911@gmail.com" className="text-light-text hover:text-primary transition-colors">
                      amanparashar0911@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <a href="tel:+918393909033" className="text-light-text hover:text-primary transition-colors">
                      +91 8393909033
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Working Hours</h3>
                    <p className="text-light-text">Monday - Friday: 9 AM - 5 PM</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => {
                    const Icon = LucideIcons[link.icon as keyof typeof LucideIcons] as React.ElementType;
                    return (
                      <motion.a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-text/10 flex items-center justify-center text-text hover:bg-primary hover:text-background transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={link.platform}
                      >
                        <Icon size={18} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
              
              <div className="mt-12 p-6 rounded-lg bg-primary/5 border border-primary/20">
                <h3 className="text-lg font-semibold mb-2">Let's Discuss Your Project</h3>
                <p className="text-light-text mb-4">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
                <a href="mailto:your.email@example.com" className="btn-primary">
                  Email Me Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-text/5">
        <div className="section-container text-center">
          <motion.h2 
            className="heading-md mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Work Together?
          </motion.h2>
          <motion.p 
            className="paragraph max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's collaborate to bring your vision to life. I'm excited to hear about your project!
          </motion.p>
          <motion.a 
            href="mailto:your.email@example.com"
            className="btn-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.a>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;