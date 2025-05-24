import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SkillBar from "../components/SkillBar";
import { skills } from "../data/resume";

const About = () => {
  const frontendSkills = skills.filter(
    (skill) => skill.category === "frontend"
  );
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const otherSkills = skills.filter(
    (skill) => skill.category === "tools" || skill.category === "other"
  );

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
            <h1 className="heading-lg mb-4">About Me</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="paragraph max-w-2xl mx-auto">
              Get to know more about me, my background, and what drives me.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row md:space-x-12 mb-20">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="heading-sm mb-6">My Story</h2>
              <div className="space-y-4">
                <p className="paragraph">
                  Hello! I'm Aman Parashar, a full-stack developer and computer
                  science student based in Agra, India.
                </p>
                <p className="paragraph">
                  I enjoy turning ideas into functional, elegant web
                  applications using tools like React, Node.js, MongoDB, and
                  Express. From dynamic UIs to backend APIs and even smart
                  contracts, I love working across the stack to bring complete
                  solutions to life.
                </p>
                <p className="paragraph">
                  I'm currently studying at GLA University, where I've built
                  projects involving personal finance tracking, real-time AI
                  feedback systems, and decentralized applications using
                  Solidity and Remix.
                </p>
                <p className="paragraph">
                  Outside of coding, I enjoy sports, music, and continuous
                  learning. I'm always excited to take on new challenges,
                  collaborate with like-minded creators, and grow as a
                  developer.
                </p>
              </div>

              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Let's Connect <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative rounded-lg overflow-hidden h-96 shadow-xl">
                <img
                  src="/images/DSC_9824.JPG"
                  alt="Aman Parashar"
                  className="w-full h-full object-cover object-[center_30%]"
                />
                <div className="absolute inset-0 bg-primary/10"></div>
                <div className="absolute bottom-0 right-0 p-6 bg-gradient-to-t from-text/80 to-transparent w-full text-right">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">Aman Parashar</h3>
                    <p className="text-white/80">FullStack Developer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-sm mb-6 text-center">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                    <span className="text-primary">01</span>
                  </div>
                  Frontend Development
                </h3>
                <div className="space-y-4">
                  {frontendSkills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                    <span className="text-primary">02</span>
                  </div>
                  Backend Development
                </h3>
                <div className="space-y-4">
                  {backendSkills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                    <span className="text-primary">03</span>
                  </div>
                  Other Skills
                </h3>
                <div className="space-y-4">
                  {otherSkills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-sm mb-6 text-center">What I Love</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                className="p-6 rounded-lg bg-background shadow-md border border-text/10 hover:border-primary/20 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Clean Code</h3>
                <p className="text-light-text">
                  I'm passionate about writing clean, maintainable code that
                  follows best practices.
                </p>
              </motion.div>

              <motion.div
                className="p-6 rounded-lg bg-background shadow-md border border-text/10 hover:border-primary/20 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">User Experience</h3>
                <p className="text-light-text">
                  Creating intuitive and enjoyable user experiences is at the
                  core of everything I build.
                </p>
              </motion.div>

              <motion.div
                className="p-6 rounded-lg bg-background shadow-md border border-text/10 hover:border-primary/20 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Learning</h3>
                <p className="text-light-text">
                  I'm always eager to learn new technologies and improve my
                  skills as a developer.
                </p>
              </motion.div>

              <motion.div
                className="p-6 rounded-lg bg-background shadow-md border border-text/10 hover:border-primary/20 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Problem Solving</h3>
                <p className="text-light-text">
                  I enjoy tackling complex problems and finding elegant
                  solutions.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/resume" className="btn-secondary">
              View My Resume
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
