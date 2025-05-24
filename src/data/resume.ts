import { Experience, Education, Skill } from '../types';

export const experiences: Experience[] = [
  {
    title: "Software Engineer Co-op",
    company: "Seeking Opportunities",
    location: "Remote",
    duration: "Present",
    description: [
      "Full-stack developer with expertise in both front-end and back-end development",
      "Skilled in building responsive React interfaces and optimizing performance",
      "Experience with code reviews and cross-functional team collaboration",
      "Focus on developing innovative, scalable solutions"
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Bachelor of Engineering (B.E.), Computer Engineering",
    institution: "GLA University",
    location: "Mathura, India",
    duration: "Present",
    description: "Specialization in Blockchain technology • GPA: 7.68"
  }
];

export const skills: Skill[] = [
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "Python", level: 70, category: "backend" },
  { name: "Java", level: 55, category: "backend" },
  { name: "Solidity", level: 60, category: "backend" },
  { name: "Web3.js", level: 60, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" }
];