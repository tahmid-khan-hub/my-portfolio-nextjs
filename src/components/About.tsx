"use client";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full flex justify-center px-4 py-12">
      <div className="max-w-[1350px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/my-photo.jpg" 
            alt="About Me"
            width={300}
            height={300}
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I&apos;m a passionate <span className="font-semibold">MERN stack developer</span> 
            who loves building efficient, scalable, and modern web applications.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Currently, I&apos;m pursuing a degree in{" "}
            <span className="font-semibold">Computer Science & Engineering</span> 
            at <span className="font-semibold">Metropolitan University</span>, 
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
