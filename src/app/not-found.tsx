"use client";
import { useEffect } from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import ErrorLottie from "../../public/lotties/404.json"

export default function NotFound({ error, }: { error: Error; reset: () => void }) {
  useEffect(() => {
    document.title = "Portfolio | No Page Found";
  }, [error]);

  return (
    <div className="bg-[#0c1220]">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-72 h-72">
          <Lottie animationData={ErrorLottie} loop />
        </div>

        <p className="text-center text-2xl my-4">
          Oops! The page does not exist
        </p>

        <div className="flex">
          <Link href="/" className="block mx-auto w-fit">
            <button className="px-6 py-2 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-800 transition-transform duration-200 hover:scale-103 active:scale-95 rounded-xl">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
