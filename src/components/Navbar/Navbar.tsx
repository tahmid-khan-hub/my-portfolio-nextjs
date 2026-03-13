"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  if (pathname.startsWith("/projects-details/")) {
    return null;
  }

  const links = (
    <>
      <li>
        <a
          href="#banner"
          className={`font-semibold pb-1 border-b-2 border-transparent ${
            activeHash === "#banner"
              ? "[border-image:linear-gradient(to_right,#1d4ed8,#3b82f6)_1]"
              : "border-none"
          } hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-600 hover:to-blue-300 transition-colors duration-300`}
        >
          Banner
        </a>
      </li>
      <li>
        <a
          href="#about"
          className={`font-semibold pb-1 border-b-2 ${
            activeHash === "#about"
              ? "border-transparent [border-image:linear-gradient(to_right,#1d4ed8,#3b82f6)_1]"
              : "border-none"
          } hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-600 hover:to-blue-300 transition-colors duration-300`}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#skills"
          className={`font-semibold pb-1 border-b-2 ${
            activeHash === "#skills"
              ? "border-transparent [border-image:linear-gradient(to_right,#1d4ed8,#3b82f6)_1]"
              : "border-none"
          } hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-600 hover:to-blue-300 transition-colors duration-300`}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className={`font-semibold pb-1 border-b-2 ${
            activeHash === "#projects"
              ? "border-transparent [border-image:linear-gradient(to_right,#1d4ed8,#3b82f6)_1]"
              : "border-none"
          } hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-600 hover:to-blue-300 transition-colors duration-300`}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#education"
          className={`font-semibold pb-1 border-b-2 ${
            activeHash === "#education"
              ? "border-transparent [border-image:linear-gradient(to_right,#1d4ed8,#3b82f6)_1]"
              : "border-none"
          } hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-600 hover:to-blue-300 transition-colors duration-300`}
        >
          Education
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className={`font-semibold pb-1 ${
            activeHash === "#contact" ? "border-b-2 border-blue-500 " : ""
          } hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-600 hover:to-blue-300 transition-colors duration-300`}
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-60 bg-background/55 backdrop-blur-md text-white">
      <div className="max-w-[1350px] mx-auto w-full flex justify-between items-center px-4 md:px-3">
        {/* Left side */}
        <Link
          href="/"
          className="text-xl -ml-1 md:-ml-0.5 lg:-ml-0 font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent"
        >
          Portfolio
        </Link>

        {/* Right side */}
        <div className="navbar-end">
          <ul className="hidden lg:flex gap-5">{links}</ul>

          {/* Mobile menu */}
          <div className="lg:hidden relative -mr-1" ref={menuRef}>
            {/* Hamburger Icon */}
            <label
              tabIndex={0}
              className="cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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

            {/* Dropdown menu */}
            {isOpen && (
              <ul
                tabIndex={0}
                className="absolute right-0 mt-3 w-60 p-4 rounded-2xl shadow-lg bg-[#1c222a] flex flex-col gap-4 z-50"
              >
                {links}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
