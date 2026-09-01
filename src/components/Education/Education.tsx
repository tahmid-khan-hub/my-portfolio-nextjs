"use client";
import AnimateOnView from "@/hooks/AnimateOnView";
import { HiAcademicCap } from "react-icons/hi2";
import CertificateCard from "./Certificates/CertificateCard";
import { MdWorkspacePremium } from "react-icons/md";

const Education = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-16 mb-24">
        <AnimateOnView direction="down" delay={0.25} duration={0.6}>
          <h1 className="text-center text-4xl text-gray-300 font-bold mb-12">
            Education &{" "}
            <span className="bg-linear-to-r from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent">Certification</span>
          </h1>
        </AnimateOnView>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Education - Featured Card */}
          <div className="lg:col-span-3">
            <AnimateOnView direction="left" delay={0.15} duration={0.6}>
              <div className="bg-gray-800/60 border border-gray-700/50 rounded-2xl p-6 md:p-8 h-full flex flex-col hover:border-blue-500/30 transition-colors duration-300">
                {/* Top row: icon + year pill */}
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-500/10 p-3 rounded-full">
                    <HiAcademicCap className="text-blue-400 text-3xl" />
                  </div>
                  <span className="text-xs text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full whitespace-nowrap">2023 - 2027</span>
                </div>

                <h3 className="text-xl md:text-2xl text-gray-200 font-semibold">BSc in CSE</h3>
                <p className="text-sm text-blue-400 mt-1">Metropolitan University, Sylhet, Bangladesh</p>

                <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed flex-1">
                  I&apos;m currently pursuing my Bachelor&apos;s degree with a focus on web development and problem-solving. 
                  At my university, I work on course-related projects, participate in coding contests and collaborate with peers, while also building web development projects to strengthen my skills.
                </p>

                {/* Progress bar */}
                <div className="mt-8">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>Progress</span>
                    <span>Year 4 of 4</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-linear-to-r from-blue-700 via-blue-500 to-blue-300 rounded-full"
                      style={{ width: "87.5%" }}
                    />
                  </div>
                </div>
              </div>
            </AnimateOnView>
          </div>

          {/* Certificates - Timeline */}
          <div className="lg:col-span-2 flex flex-col gap-6 relative">
            {/* vertical timeline line (desktop only) */}
            <div className="hidden lg:block absolute -left-5 top-2 bottom-2 w-px bg-gray-700" />

            <AnimateOnView direction="right" delay={0.2} duration={0.5}>
              <CertificateCard
                icon={<MdWorkspacePremium className="text-blue-400 text-xl" />}
                title="Complete Web Development Course"
                platform="Programming Hero"
                details="I completed this course, which focused on modern web development. It helped me strengthen my coding skills while gaining practical experience through structured projects and guided learning."
                year="2025"
                link="https://drive.google.com/file/d/1JxLSK5BKnyFT4ZJWJYVbOyvec9f61bNf/view?usp=sharing"
              />
            </AnimateOnView>

            <AnimateOnView direction="right" delay={0.3} duration={0.5}>
              <CertificateCard
                icon={<MdWorkspacePremium className="text-blue-400 text-xl" />}
                title="Intro To Machine Learning"
                platform="Kaggle"
                details="I completed this course on Kaggle, which covered the fundamentals of machine learning like decision trees, random forests and model validation, by practicing on real datasets through guided projects."
                year="2026"
                link="https://drive.google.com/file/d/1wccwoxC5W5gDaKjpJTqUldOZTfM2VoGN/view?usp=sharing"
              />
            </AnimateOnView>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;