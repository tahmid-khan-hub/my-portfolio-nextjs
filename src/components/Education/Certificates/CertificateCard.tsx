import { FaArrowRightLong } from "react-icons/fa6";
import { ReactNode } from "react";

interface CertificateCardProps {
    icon: ReactNode;
    title: string;
    platform: string;
    year: string;
    link: string;
    details: string;
}

export default function CertificateCard({
 icon, title, platform, year, link, details,
}: CertificateCardProps) {
    return (
        <div className="relative bg-gray-800/60 border border-gray-700/50 rounded-2xl p-5 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 cursor-default">
            {/* timeline dot (desktop only) */}
            <span className="hidden lg:block absolute -left-6.5 top-6 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-gray-900" />

            <div className="flex items-start justify-between mb-3">
                <div className="bg-blue-500/10 p-2.5 rounded-full">{icon}</div>
                <span className="text-xs text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {year}
                </span>
            </div>

            <h3 className="text-base md:text-lg text-gray-200 font-semibold">{title}</h3>
            <p className="text-sm text-blue-400 mt-0.5">{platform}</p>

            <p className="mt-3 text-gray-400 text-sm leading-relaxed">{details}</p>

            <button
                onClick={() => window.open(link, "_blank")}
                className="mt-4 flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
                View Certificate
                <FaArrowRightLong size={14} />
            </button>
        </div>
    );
}