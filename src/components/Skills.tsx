"use client";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiMongodb, SiExpress, SiNextdotjs, SiVercel } from "react-icons/si";

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
];

const Skills = () => {
  return (
    <section className="w-full flex justify-center py-12">
      <div className="max-w-[1350px] w-full px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Skills & Tools
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 text-center">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center justify-center p-4 rounded-xl shadow-md bg-gray-800 hover:bg-gray-700 transition duration-300"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-gray-200 font-medium">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
