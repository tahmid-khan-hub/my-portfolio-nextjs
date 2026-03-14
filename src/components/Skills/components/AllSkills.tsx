import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiMongodb, SiExpress, SiNextdotjs, SiVercel, SiShadcnui } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";

export const AllSkills = [
  { id: 1, title: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { id: 2, title: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  {
    id: 3,
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400" />,
  },
  {
    id: 4,
    title: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
  },
  {
    id: 5,
    title: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
  },
  { id: 6, title: "React", icon: <FaReact className="text-sky-400" /> },
  { id: 7, title: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { id: 8, title: "Express.js", icon: <SiExpress className="text-gray-200" /> },
  { id: 9, title: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { id: 10, title: "SQL", icon: <FaDatabase className="text-white" /> },
  {
    id: 11,
    title: "PostgreSQL",
    icon: <BiLogoPostgresql className="text-blue-500" />,
  },
  { id: 12, title: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { id: 13, title: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { id: 14, title: "GitHub", icon: <FaGithub className="text-white" /> },
  { id: 15, title: "Vercel", icon: <SiVercel className="text-white" /> },
  {
    id: 16,
    title: "Firebase",
    icon: <IoLogoFirebase className="text-orange-400" />,
  },
  { id: 17, title: "Shadcn", icon: <SiShadcnui className="text-white" /> },
];
