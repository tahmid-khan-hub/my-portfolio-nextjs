import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CertificateCard = ({
  title,
  platform,
  year,
  link,
  details,
}: {
  title: string;
  platform: string;
  year: string;
  link: string;
  details: string;
}) => {
  return (
    <div className="p-5 rounded-xl shadow-md cursor-pointer relative">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{platform}</p>
        <p className="mt-4">{details}</p>
        <p className="text-sm mt-7 font-semibold">{year}</p>
      </div>

      {/* Arrow Button in Bottom Right */}
      <FaArrowRightLong
        size={25}
        onClick={() => window.open(link, "_blank")}
        className="text-blue-500 hover:text-blue-400 text-xl transition absolute bottom-5 right-5"
      />
    </div>
  );
};

export default CertificateCard;
