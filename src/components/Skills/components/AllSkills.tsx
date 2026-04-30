import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaGitAlt, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiMongodb, SiExpress, SiNextdotjs, SiVercel, SiShadcnui } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const AllSkills = [
  { id: 1, title: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { id: 2, title: "React", icon: <FaReact className="text-sky-400" /> },
  { id: 3, title: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { id: 4, title: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { id: 5, title: "Python", icon: <FaPython className="text-blue-400" /> },
  { id: 6, title: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { id: 7, title: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { id: 8, title: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { id: 9, title: "Shadcn", icon: <SiShadcnui className="text-white" /> },
  { id: 10, title: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { id: 11, title: "Express.js", icon: <SiExpress className="text-gray-200" /> },
  { id: 12, title: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-500" /> },
  { id: 13, title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { id: 14, title: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { id: 15, title: "GitHub", icon: <FaGithub className="text-white" /> },
  { id: 16, title: "Vercel", icon: <SiVercel className="text-white" /> },
];