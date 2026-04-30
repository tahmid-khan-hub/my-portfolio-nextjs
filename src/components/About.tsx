"use client";
import { bulletPoints } from "@/constants/bulletPoints";
import AnimateOnView from "@/hooks/AnimateOnView";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full flex justify-center py-20 pb-24 mb-24 px-4 md:px-3">
      <div className="max-w-332.5 w-full flex flex-col md:flex-row items-center justify-between">
        {/* Image */}
        <AnimateOnView direction="left" delay={0.8} duration={1}><div className="flex justify-center md:justify-start shrink-0 ">
          <Image
            src="/my-photo.png" 
            alt="About Me"
            width={230}
            height={230}
            className="rounded-2xl object-cover shadow-lg"
          />
        </div></AnimateOnView>

        {/* Text */}
        <div className="space-y-4 max-w-225 ml-0 md:ml-7 ">
          <AnimateOnView direction="down" delay={0.25} duration={0.6}><h2 className="text-4xl font-bold text-white mt-14 md:mt-0 mb-7 text-center md:text-left">
            About <span className="bg-linear-to-r from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent">Me</span>
          </h2></AnimateOnView>

          {/* 1 */}
          <AnimateOnView direction="left" delay={0.25} duration={0.6}><p className="text-gray-300 leading-relaxed ">
             I&apos;m a <span className="font-bold">Web developer</span> who builds things on the web and keeps figuring out how everything connects.
          </p></AnimateOnView>

          {/* 2 */}
          <AnimateOnView direction="right" delay={0.25} duration={0.6}><p className="text-gray-300 leading-relaxed ">
            Currently, I&apos;m pursuing a degree in{" "}
            <span className="font-bold">Computer Science & Engineering</span> 
            at <span className="font-bold">Metropolitan University</span>, 
            located in Sylhet, Bangladesh.
          </p></AnimateOnView>

          {/* 3 */}
          <AnimateOnView direction="left" delay={0.25} duration={0.6}><p className="text-gray-300 leading-relaxed ">
           I do <span className="font-bold">competitive programming</span> on Codeforces and CodeChef and continuously expand my knowledge in both frontend and backend technologies.
           With every project I learn something new, explore better ways to write <span className="font-bold">clean code</span> and <span className="font-bold">design interfaces</span> that are easy to use. I also use <span className="font-bold">AI tools</span> deliberately to make my workflow more productive, not as a shortcut but as a way to move faster and think better.
          </p></AnimateOnView>

          {/* journey glimpse */}
          <p className="text-gray-300 leading-relaxed mt-12 md:mt-5 font-semibold">
            Some highlights of my journey so far:
          </p> 

          {/* bullet points */}
          <ul className="list-disc pl-6 space-y-2 text-gray-400 ">
            {bulletPoints.map(({id, text}) => (
              <AnimateOnView key={id} direction="right" delay={id * 0.08}>
                <li>{text}</li>
              </AnimateOnView>
            ))}
          </ul>

          <AnimateOnView direction="scale" delay={0.25} duration={0.6}>
            <p className="italic text-lg bg-linear-to-r from-blue-700 via-blue-400 to-blue-200 bg-clip-text text-transparent mt-7">
              &quot;Now stopping does not feel like an option&quot;
            </p>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
};

export default About;
