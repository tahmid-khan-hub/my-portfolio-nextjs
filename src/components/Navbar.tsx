"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash);
    updateHash(); 
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  if (pathname.startsWith("/projects-details/")) {
    return null;
  }

  const links = (
    <>
      <li>
        <a
          href="#banner"
          className={`font-semibold pb-1 ${
            activeHash === "#banner"
              ? "border-b-2 border-blue-500 "
              : ""
          }`}
        >
          Banner
        </a>
      </li>
      <li>
        <a
          href="#about"
          className={`font-semibold pb-1 ${
            activeHash === "#about"
              ? "border-b-2 border-blue-500 "
              : ""
          }`}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className={`font-semibold pb-1 ${
            activeHash === "#skills"
              ? "border-b-2 border-blue-500 "
              : ""
          }`}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className={`font-semibold pb-1 ${
            activeHash === "#projects"
              ? "border-b-2 border-blue-500 "
              : ""
          }`}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#education"
          className={`font-semibold pb-1 ${
            activeHash === "#education"
              ? "border-b-2 border-blue-500 "
              : ""
          }`}
        >
          Education
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className={`font-semibold pb-1 ${
            activeHash === "#contact"
              ? "border-b-2 border-blue-500 "
              : ""
          }`}
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-background/55 backdrop-blur-md text-white">
      <div className="max-w-[1350px] mx-auto w-full flex justify-between items-center px-4 md:px-3">
        {/* Left side */}
        <Link href="/" className="text-xl  font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent">
          Portfolio
        </Link>

        {/* Right side */}
        <div className="navbar-end">
          <ul className="hidden lg:flex menu menu-horizontal ">{links}</ul>

          {/* Mobile menu */}
          <div className="lg:hidden dropdown dropdown-end -mx-1.5">
            <label tabIndex={0} className="">
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-[1]"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
