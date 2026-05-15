import { FaArrowRightLong } from "react-icons/fa6";
import { MdWorkspacePremium } from "react-icons/md";

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
    <div className="p-5 rounded-xl shadow-md cursor-pointer flex flex-col h-full">
      {/* Icon */}
      <MdWorkspacePremium className="text-blue-400 text-4xl mb-3 hover:text-blue-500" />

      <h3 className="text-xl text-gray-300 font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">{platform}</p>

      <p className="mt-4 text-gray-300 flex-1">{details}</p>

      <div className="flex items-center justify-between mt-6">
        <p className="text-sm text-gray-500 font-semibold">{year}</p>
        <FaArrowRightLong
          size={20}
          onClick={() => window.open(link, "_blank")}
          className="text-blue-500 hover:text-blue-400 transition"
        />
      </div>
    </div>
  );
};

export default CertificateCard;
