import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SkillBar from '../components/SkillBar';
import { experiences, education, skills } from '../data/resume';

const Resume = () => {
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
            <h1 className="heading-lg mb-4">My Resume</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="paragraph max-w-2xl mx-auto">
              Here you can find information about my work experience, education, and skills.
            </p>
            <motion.a
              href="#"
              className="mt-6 inline-flex items-center btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} className="mr-2" /> Download Resume
            </motion.a>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Experience & Education */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-12">
                <h2 className="heading-sm mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-primary">
                    01
                  </span>
                  Work Experience
                </h2>
                
                <div className="space-y-8">
                  {experiences.map((experience, index) => (
                    <motion.div 
                      key={index}
                      className="relative pl-8 border-l-2 border-text/10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                      <div className="mb-1 text-sm text-light-text">{experience.duration}</div>
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <div className="text-primary mb-2">{experience.company} | {experience.location}</div>
                      <ul className="space-y-2">
                        {experience.description.map((item, i) => (
                          <li key={i} className="text-light-text flex">
                            <span className="text-primary mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="heading-sm mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-primary">
                    02
                  </span>
                  Education
                </h2>
                
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <motion.div 
                      key={index}
                      className="relative pl-8 border-l-2 border-text/10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                      <div className="mb-1 text-sm text-light-text">{edu.duration}</div>
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <div className="text-primary mb-2">{edu.institution} | {edu.location}</div>
                      {edu.description && (
                        <p className="text-light-text">{edu.description}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Right Column - Skills */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="sticky top-28">
                <h2 className="heading-sm mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-primary">
                    03
                  </span>
                  Skills
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Frontend Development</h3>
                    <div className="space-y-4">
                      {skills.filter(skill => skill.category === 'frontend').map((skill, index) => (
                        <SkillBar key={index} name={skill.name} level={skill.level} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Backend Development</h3>
                    <div className="space-y-4">
                      {skills.filter(skill => skill.category === 'backend').map((skill, index) => (
                        <SkillBar key={index} name={skill.name} level={skill.level} />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Tools & Others</h3>
                    <div className="space-y-4">
                      {skills.filter(skill => skill.category === 'tools' || skill.category === 'other').map((skill, index) => (
                        <SkillBar key={index} name={skill.name} level={skill.level} />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <Link to="/contact" className="btn-secondary w-full flex justify-center">
                    Hire Me <ExternalLink size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Resume;