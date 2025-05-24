import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      className="group relative bg-background shadow-lg rounded-lg overflow-hidden border border-text/10 hover:border-primary/20 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-text group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-light-text mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary flex items-center hover:opacity-80 transition-opacity"
              aria-label={`Visit live demo for ${project.title}`}
            >
              <ExternalLink size={16} className="mr-1" /> Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary flex items-center hover:opacity-80 transition-opacity"
              aria-label={`View GitHub repository for ${project.title}`}
            >
              <Github size={16} className="mr-1" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;