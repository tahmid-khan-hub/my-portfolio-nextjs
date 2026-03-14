"use client";
import { motion } from "framer-motion";
import AnimateOnView from "@/hooks/AnimateOnView";
import { AllSkills } from "./components/AllSkills";

const Skills = () => {
  return (
    <section className="w-full bg-[#0c1220] flex justify-center py-12 mt-16 mb-24 px-4 md:px-3 lg:px-4 ">
      <div className="max-w-332.5 w-full py-13.5">
        <AnimateOnView direction="down" delay={0.25} duration={0.6}><h2 className="text-4xl font-bold text-center mb-10 text-white">
          Skills & <span className="bg-linear-to-r from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent">Tools</span>
        </h2></AnimateOnView>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-8 text-center">
          {AllSkills.map((skill, i) => (
            <AnimateOnView key={i} direction="up" delay={i * 0.08}><motion.div
              whileHover={{
              scale: 1.1, 
              boxShadow: "0px 0px 20px rgba(0, 123, 255, 0.7)",
              }}
              transition={{ duration: 0 }}
              key={skill.id}
              className="flex flex-col items-center justify-center p-4 rounded-xl shadow-md bg-gray-800 hover:bg-gray-700 transition duration-300 h-full"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-gray-200 font-medium">{skill.title}</p>
            </motion.div></AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
