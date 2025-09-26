"use client";
import React from "react";
import CertificateCard from "./CertificateCard";

const Education = () => {
  return (
    <div>
      <div className="max-w-[1350px] mx-auto px-4 md:px-3 py-16 mb-24">
        <h1 className="text-center text-4xl font-bold mb-12">
          Education & <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent">Certification</span>
        </h1>

        {/* Responsive layout: column on small, row on md+ */}
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          {/* Education */}
          <div className="flex-1 relative bg-gray-800 rounded-xl">
            {/* dot */}
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2 "></div>
            <div className="p-5 shadow-md">
              <h3 className="text-lg font-semibold">BSc in CSE</h3>
              <p className="text-sm text-gray-500">
                Metropolitan University, Sylhet, Bangladesh
              </p>
              <p className="mt-3 mb-7">
                I’m currently pursuing my Bachelor’s degree with a focus on web
                development and problem-solving. At my university, I work on course-related projects, participate in coding contests and collaborate with peers, while also building web development projects to strengthen my skills.
              </p>
              <p className="text-sm mt-1 font-semibold">2023 - 2027</p>
            </div>
          </div>

          {/* Divider (only visible on md+) */}
          <div className="divider divider-horizontal "></div>

          {/* Certificate */}
          <div className="flex-1 relative bg-gray-800 rounded-xl mt-0 md:mt-[320px]">
            {/* dot */}
             <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2 "></div>
            <CertificateCard
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
