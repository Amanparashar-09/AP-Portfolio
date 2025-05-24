import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import PageTransition from '../components/PageTransition';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  // Extract unique tags
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => 
        project.tags.includes(filter)
      );
      setFilteredProjects(filtered);
    }
  };

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
            <h1 className="heading-lg mb-4">My Projects</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="paragraph max-w-2xl mx-auto">
              Here's a collection of projects I've worked on. Each project is a unique piece 
              of development that I've created with attention to detail and focus on user experience.
            </p>
          </motion.div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <motion.button
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeFilter === 'all' 
                  ? 'bg-primary text-background' 
                  : 'bg-text/10 hover:bg-text/20 text-text'
              }`}
              onClick={() => handleFilterChange('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All
            </motion.button>
            
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeFilter === tag
                    ? 'bg-primary text-background'
                    : 'bg-text/10 hover:bg-text/20 text-text'
                }`}
                onClick={() => handleFilterChange(tag)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))
              ) : (
                <motion.div 
                  className="col-span-full text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg text-light-text">No projects found with this filter.</p>
                  <button
                    className="mt-4 text-primary hover:underline"
                    onClick={() => handleFilterChange('all')}
                  >
                    View all projects instead
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;