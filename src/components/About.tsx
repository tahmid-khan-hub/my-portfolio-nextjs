"use client";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full flex justify-center py-20 pb-24 mb-24 px-4 md:px-3">
      <div className="max-w-[1350px] w-full flex flex-col md:flex-row items-center justify-between">
        {/* Image */}
        <div className="flex justify-center md:justify-start flex-shrink-0 ">
          <Image
            src="/my-profile-photo.png" 
            alt="About Me"
            width={230}
            height={230}
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="space-y-4 max-w-[900px] ml-0 md:ml-7 ">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-14 md:mt-0 mb-7 text-center md:text-left">
            About <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I&apos;m a passionate <span className="font-bold mr-1">Web developer</span> 
             who loves building efficient, scalable and modern web applications.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Currently, I&apos;m pursuing a degree in{" "}
            <span className="font-bold mr-1">Computer Science & Engineering</span> 
            at <span className="font-bold mr-1">Metropolitan University</span>, 
            located in Sylhet, Bangladesh.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I love problem-solving and continuously learning...
          </p>

          {/* Bullet Points */}
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Built 3 full-stack projects</li>
            <li>Focused on web performance optimization</li>
            <li>Developing problem-solving skills</li>
          </ul>

          <p className="italic text-lg text-gray-900 dark:text-gray-100">
            &quot;Turning ideas into scalable solutions — one line of code at a time.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
