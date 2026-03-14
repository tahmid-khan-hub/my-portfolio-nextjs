"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BannerLeftSideContent } from "./components/BannerLeftSideContent";

export default function Banner() {

  return (
    <section className="w-full bg-[#0c1220] text-white py-16 mb-24 ">
      <div className="max-w-337.5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-4 md:px-3 py-23.75">
        
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <BannerLeftSideContent />
        </div>

        {/* Right Side - Image with motion */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Image
              src="/my-profile-photo.png" 
              alt="Banner Image"
              width={320}
              height={320}
              className="rounded-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
