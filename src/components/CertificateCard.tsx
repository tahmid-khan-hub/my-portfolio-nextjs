import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CertificateCard = ({
  title,
  platform,
  year,
  link,
}: {
  title: string;
  platform: string;
  year: string;
  link: string;
}) => {
  return (
    <div className="p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-lg transition">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{platform}</p>
          <p className="text-sm mt-5 font-semibold">{year}</p>
        </div>
        <FaArrowRightLong
          onClick={() => window.open(link, "_blank")}
          className="text-blue-500 hover:text-blue-400 text-xl transition"
        />
      </div>
    </div>
  );
};

export default CertificateCard;
