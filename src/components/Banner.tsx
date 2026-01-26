"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { socialLinks } from "@/constants/socialLinks";
import AnimateOnView from "@/hooks/AnimateOnView";

export default function Banner() {

  const ResumeLink = "https://drive.google.com/file/d/1Uko2goJqYDguJHy6PjAmWQAjacI8FpBU/view?usp=sharing";

  return (
    <section className="w-full bg-[#0c1220] text-white py-16 mb-24 ">
      <div className="max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-4 md:px-3 py-[95px]">
        
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <div>
            <AnimateOnView direction="down" delay={0.1} duration={0.6}>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Hi, I’m <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent">Tahmid</span></h1>
            </AnimateOnView>
          </div>

          {/* Type Animation */}
          <TypeAnimation
            sequence={[
              "A Web Developer",
              2000,
              "A Problem Solver",
              2000,
              "A Tech Enthusiast",
              2000,
              "An Aspiring Engineer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-3xl font-semibold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent inline-block mb-6"
          />

          {/* Paragraphs */}
          <div>
            <AnimateOnView direction="left" delay={0.1} duration={0.6}>
              <p className="text-gray-300 mb-6 max-w-xl">I’m a university student who builds responsive and user-friendly websites using modern web technologies.</p>
            </AnimateOnView>
            <AnimateOnView direction="left" delay={0.1} duration={1.2}>
              <p className="text-gray-300 mb-6 max-w-xl">My goal is to become a software engineer, exploring Next.js, building scalable and modern applications.</p>
            </AnimateOnView>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-6 w-full sm:w-auto justify-center md:justify-start">
            <AnimateOnView direction="up" delay={0.1} duration={0.6}>
              <button
                onClick={() => window.open(ResumeLink, "_blank")}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400 hover:from-blue-900 hover:to-blue-800 transition-transform duration-200 hover:scale-103 active:scale-95 rounded-xl font-medium"
              >
                Resume
              </button>
            </AnimateOnView>
            <AnimateOnView direction="up" delay={0.25} duration={0.6}>
              <a href="#projects">
                <button
                  className="px-6 py-2.5 bg-gradient-to-r border text-blue-500 hover:text-white hover:border-blue-700 hover:from-blue-800 hover:to-blue-700 transition-transform duration-200 hover:scale-103 active:scale-95 rounded-xl font-medium"
                >
                  My Work
                </button>
              </a>
            </AnimateOnView>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl justify-center md:justify-start mt-2">
            {socialLinks.map(({ id, href, icon: Icon }) => (
              <AnimateOnView key={id} direction="up" delay={id * 0.08}>
                <div key={id}
                  className="p-2 bg-gray-800 rounded-full transition-transform duration-200 hover:scale-110 hover:shadow-md shadow-blue-300"
                >
                  <a href={href} target="_blank" rel="noreferrer">
                    <Icon className="hover:text-blue-400 transition-colors" />
                  </a>
                </div>
              </AnimateOnView>
            ))}
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
