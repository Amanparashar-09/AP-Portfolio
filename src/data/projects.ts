import { Project } from '../types';
import gtdImage from '../images/GTD.png';
import urlsImage from '../images/URLS.png';

export const projects: Project[] = [
  {
    id: 1,
    title: "Multiuser-AI-based-coding-platform",
    description: "A fully functional Multiuser-AI-based-coding-platform with user management, code editor, and AI functionality.",
    image: "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "Node.js", "MongoDB", "Redis"],
    link: "#",
    github: "https://github.com/Amanparashar-09/Multiuser-AI-based-coding-platform"
  },
  {
    id: 2,
    title: "Goal Tracker Dashboard",
    description: "An interactive dashboard application that helps users track and visualize their goals, tasks, and progress.",
    image: gtdImage,
    tags: ["JavaScript", "Frontend", "Next.js", "Chart.js"],
    link: "#",
    github: "https://github.com/Amanparashar-09/Goal-Traker-UI"
  },
  {
    id: 3,
    title: "Url Shortener",
    description: "A Web Application that allows users to shorten long URLs into shorter, more manageable links.",
    image: urlsImage,
    tags: ["React", "Node.js", "Redux", "MongoDB", "Express"],
    link: "#",
    github: "https://github.com/Amanparashar-09/Url-Shortner"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and professional experience.",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://portfolio-demo.com",
    github: "https://github.com/username/portfolio"
  },
  // {
  //   id: 5,
  //   title: "Social Media Dashboard",
  //   description: "Analytics dashboard for social media platforms with data visualization and reporting features.",
  //   image: "https://images.pexels.com/photos/7175450/pexels-photo-7175450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   tags: ["React", "D3.js", "Node.js", "Express"],
  //   link: "https://analytics-demo.com",
  //   github: "https://github.com/username/social-dashboard"
  // },
  // {
  //   id: 6,
  //   title: "Fitness Tracker",
  //   description: "Mobile application for tracking workouts, nutrition, and fitness progress with personalized recommendations.",
  //   image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   tags: ["React Native", "Redux", "Firebase", "Health API"],
  //   link: "https://fitness-app-demo.com",
  //   github: "https://github.com/username/fitness-tracker"
  // }
];