import { FaReact, FaGithub, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiMongodb, SiExpress, SiNextdotjs, SiVercel, SiShadcnui, SiSocketdotio } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const AllSkills = [
  { id: 1, title: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { id: 2, title: "React", icon: <FaReact className="text-sky-400" /> },
  { id: 3, title: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { id: 4, title: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { id: 5, title: "Python", icon: <FaPython className="text-blue-400" /> },
  { id: 8, title: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { id: 9, title: "Shadcn", icon: <SiShadcnui className="text-white" /> },
  { id: 11, title: "Express.js", icon: <SiExpress className="text-gray-200" /> },
  { id: 12, title: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-500" /> },
  { id: 17, title: "Socket.IO", icon: <SiSocketdotio className="" />},
  { id: 13, title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { id: 15, title: "GitHub", icon: <FaGithub className="text-white" /> },
  { id: 16, title: "Vercel", icon: <SiVercel className="text-white" /> },
];