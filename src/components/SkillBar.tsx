import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
}

const SkillBar = ({ name, level }: SkillBarProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-light-text">{level}%</span>
      </div>
      <div className="w-full h-2 bg-text/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default SkillBar;