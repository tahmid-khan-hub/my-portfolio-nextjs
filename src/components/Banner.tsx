"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="w-full bg-[#0c1220] text-white py-16 mb-24 ">
      <div className="max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-4 md:px-3 py-[70px]">
        
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hi, I’m Tahmid
          </h1>

          {/* Type Animation */}
          <TypeAnimation
            sequence={[
              "A Web Developer",
              2000,
              "A Problem Solver",
              2000,
              "A Fast Learner",
              2000,
              "An Aspiring Engineer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl font-semibold text-blue-500 mb-6"
          />

          {/* Paragraphs */}
          <p className="text-gray-300 mb-4 max-w-xl">
            I’m a university student who builds responsive and user-friendly websites
            using modern web technologies.
          </p>
          <p className="text-gray-300 mb-6 max-w-xl">
            My goal is to become a software engineer, exploring Next.js,
            building scalable and modern applications.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-6 w-full sm:w-auto justify-center md:justify-start">
            <button className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Hire Me
            </button>
            <button className="px-6 py-3 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium">
                View Portfolio
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl justify-center md:justify-start mt-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Side - Image with motion */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Image
              src="/my-profile-photo.png" 
              alt="Banner Image"
              width={320}
              height={320}
              className="rounded-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
