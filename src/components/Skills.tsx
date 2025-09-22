"use client";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiMongodb, SiExpress, SiNextdotjs, SiVercel } from "react-icons/si";
import { motion } from "framer-motion";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  { id: 1, title: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { id: 2, title: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { id: 3, title: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { id: 4, title: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { id: 5, title: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { id: 6, title: "React", icon: <FaReact className="text-sky-400" /> },
  { id: 7, title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { id: 8, title: "Express.js", icon: <SiExpress className="text-gray-200" /> },
  { id: 9, title: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { id: 10, title: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { id: 11, title: "Vercel", icon: <SiVercel className="text-white" /> },
  { id:12, title: "Firebase", icon: <IoLogoFirebase className="text-orange-400" />},
  { id:13, title: "GitHub", icon: <FaGithub className="text-white" />},
];

const Skills = () => {
  return (
    <section className="w-full bg-[#0c1220] flex justify-center py-12 mt-16 mb-24 px-4 md:px-3">
      <div className="max-w-[1350px] w-full py-[54px]">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Skills & <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent">Tools</span>
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 text-center">
          {skills.map((skill) => (
            <motion.div
              whileHover={{
              scale: 1.1, 
              boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.7)",
              }}
              transition={{ duration: 0 }}
              key={skill.id}
              className="flex flex-col items-center justify-center p-4 rounded-xl shadow-md bg-gray-800 hover:bg-gray-700 transition duration-300"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-gray-200 font-medium">{skill.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
