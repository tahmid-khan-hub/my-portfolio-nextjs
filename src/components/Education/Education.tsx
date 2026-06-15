"use client";
import AnimateOnView from "@/hooks/AnimateOnView";
import { HiAcademicCap } from "react-icons/hi2";
import WebProgrammingCertificate from "./Certificates/WebProgrammingCertificate";

const Education = () => {
  return (
    <div>
      <div className="max-w-337.5 mx-auto px-4 md:px-3 py-16 mb-24">
        <AnimateOnView direction="down" delay={0.25} duration={0.6}>
          <h1 className="text-center text-4xl text-gray-300 font-bold mb-12">
            Education &{" "}
            <span className="bg-linear-to-r from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent">
              Certification
            </span>
          </h1>
        </AnimateOnView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Education */}
          <div className="bg-gray-800 rounded-xl flex flex-col">
            <div className="p-5 shadow-md flex flex-col flex-1">
              {/* Icon */}
              <div className="mb-3">
                <HiAcademicCap className="text-blue-400 text-4xl hover:text-blue-500" />
              </div>
              <h3 className="text-xl text-gray-300 font-semibold">BSc in CSE</h3>
              <p className="text-sm text-gray-500">
                Metropolitan University, Sylhet, Bangladesh
              </p>
              <p className="mt-3 text-gray-300 flex-1">
                I&apos;m currently pursuing my Bachelor&apos;s degree with a focus on web
                development and problem-solving. At my university, I work on
                course-related projects, participate in coding contests and
                collaborate with peers, while also building web development
                projects to strengthen my skills.
              </p>
              <p className="text-sm text-gray-500 mt-6 font-semibold">2023 - 2027</p>
            </div>
          </div>

          {/* Certificate */}
          <div className="bg-gray-800 rounded-xl flex flex-col">
            <WebProgrammingCertificate 
              title="Complete Web Development Course"
              platform="Programming Hero"
              details="I completed this course, which focused on modern web development. It helped me strengthen my coding skills while gaining practical experience through structured projects and guided learning."
              year="2025"
              link="https://drive.google.com/file/d/1JxLSK5BKnyFT4ZJWJYVbOyvec9f61bNf/view?usp=sharing"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;