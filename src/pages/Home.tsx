import { motion } from 'framer-motion';
import { ArrowRight, Code, Briefcase, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import urlsImage from '../images/URLS.png';

const Home = () => {
  return (
    <PageTransition>
      <section className="min-h-screen pt-24 pb-16">
        <div className="section-container">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-12">
            <motion.div 
              className="md:w-1/2 mt-12 md:mt-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.span 
                className="inline-block text-primary font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Hello, my name is
              </motion.span>
              <motion.h1 
                className="heading-xl mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Aman Parashar
              </motion.h1>
              <motion.h2 
                className="heading-md text-light-text mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I build modern full-stack web applications
              </motion.h2>
              <motion.p 
                className="paragraph mb-8 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                I'm a full-stack developer and student passionate about building responsive, scalable, and user-friendly digital products. 
                Currently, I'm exploring the power of JavaScript, machine learning, and blockchain to create impactful, real-world solutions.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to="/projects" className="btn-primary">
                  View My Projects <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <motion.div 
                  className="absolute inset-0 bg-primary/10 rounded-full"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute inset-4 bg-primary/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute inset-8 bg-primary/30 rounded-full overflow-hidden flex items-center justify-center"
                  animate={{ 
                    rotate: 360
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="text-background text-9xl font-bold opacity-20 tracking-wider">AP</div>
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code size={80} className="text-primary" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-text/5">
        <div className="section-container">
          <motion.h2 
            className="heading-md text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What I Do
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="p-6 rounded-lg bg-background shadow-md border border-text/10 hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Code size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-light-text">
                I create responsive and performant web applications using modern technologies 
                and best practices, focusing on delivering exceptional user experiences.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 rounded-lg bg-background shadow-md border border-text/10 hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Briefcase size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-light-text">
                I design intuitive and visually appealing user interfaces that balance aesthetics 
                with functionality, creating seamless and enjoyable user experiences.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 rounded-lg bg-background shadow-md border border-text/10 hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <User size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-light-text">
                I provide expert advice and guidance on web development strategies, helping 
                clients make informed decisions for their digital presence.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/about" className="btn-secondary">
              Learn More About Me
            </Link>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="section-container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md mb-4">Featured Projects</h2>
            <p className="paragraph max-w-2xl mx-auto">
              Here are some of my recent projects. Each project is built with attention to detail
              and focus on user experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Featured Project 1 */}
            <motion.div 
              className="group relative overflow-hidden rounded-lg shadow-lg border border-text/10 hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Multiuser-AI-based-coding-platform" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Multiuser-AI-based-coding-platform</h3>
                  <p className="text-white/80 text-sm">React, Node.js, MongoDB, Redis</p>
                </div>
              </div>
            </motion.div>
            
            {/* Featured Project 2 */}
            <motion.div 
              className="group relative overflow-hidden rounded-lg shadow-lg border border-text/10 hover:border-primary/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={urlsImage} 
                  alt="URL Shortener" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">URL Shortener</h3>
                  <p className="text-white/80 text-sm">React, Node.js, Redux, MongoDB, Express</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/projects" className="btn-primary">
              View All Projects <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-primary/5">
        <div className="section-container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md mb-4">Let's Work Together</h2>
            <p className="paragraph max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="btn-primary">
              Get In Touch <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;