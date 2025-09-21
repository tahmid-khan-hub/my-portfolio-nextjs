"use client";
import React from "react";
import CertificateCard from "./CertificateCard";

const Education = () => {
  return (
    <div>
      <div className="max-w-[1350px] mx-auto px-4 md:px-3 py-16 mb-24">
        <h1 className="text-center text-4xl font-bold mb-8">Education & Certification</h1>
        <div>
          {/* Education */}
          <div className="mb-12 ml-6">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-2"></div>
            <div className="p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold">BSc in CSE</h3>
              <p className="text-sm text-gray-500">
                Metropolitan University, Sylhet, Bangladesh
              </p>
              <p className="text-sm mt-1">2023 - 2027</p>
            </div>
          </div>

          {/* Certificate */}
          <div>
            <CertificateCard
              title="Web Development Course"
              platform="Random Platform Name"
              year="2022"
              link="https://drive.google.com/file/d/1JxLSK5BKnyFT4ZJWJYVbOyvec9f61bNf/view?usp=sharing"
            ></CertificateCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
